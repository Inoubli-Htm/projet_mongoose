import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addContact, updateContact } from "../redux/actions/contactActions";

function AddEditContact() {
  const [user, setUser] = useState({ name: "", email: "", age: "" });

  const edit = useSelector((state) => state.contactReducer.edit);
  const contact = useSelector((state) => state.contactReducer.contact);

  useEffect(() => {
    edit
      ? setUser({
          name: contact?.name,
          email: contact?.email,
          age: contact?.age,
        })
      : setUser({ name: "", email: "", age: "" });
  }, [contact]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addContact(user));
    navigate("/contacts");
  };
  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(updateContact(contact._id, user));
    navigate("/contacts");
  };

  return (
    <Form style={{ width: "30%", margin: "auto" }}>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter email"
          name="email"
          onChange={handleChange}
          value={user.email}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          name="name"
          onChange={handleChange}
          value={user.name}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter age"
          name="age"
          onChange={handleChange}
          value={user.age}
        />
      </Form.Group>
      {edit ? (
        <Button variant="primary" type="submit" onClick={handleEdit}>
          Edit
        </Button>
      ) : (
        <Button variant="primary" type="submit" onClick={handleAdd}>
          Add
        </Button>
      )}
    </Form>
  );
}

export default AddEditContact;

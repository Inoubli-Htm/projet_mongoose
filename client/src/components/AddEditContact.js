import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addContact } from "../redux/actions/contactActions";

function AddEditContact() {
  const [user, setUser] = useState({ name: "", email: "", age: "" });

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

  return (
    <Form style={{ width: "30%", margin: "auto" }}>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter email"
          name="email"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          name="name"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter age"
          name="age"
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleAdd}>
        Add
      </Button>
    </Form>
  );
}

export default AddEditContact;

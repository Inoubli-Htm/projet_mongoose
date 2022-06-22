import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  deleteContact,
  getContact,
  toggleTrue,
} from "../redux/actions/contactActions";

function ContactCard({ contact }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm("Are you sure ?")) {
      dispatch(deleteContact(contact._id));
    }
  };
  const handleToggleTrue = () => {
    dispatch(toggleTrue());
    dispatch(getContact(contact._id));
    navigate("/addEdit");
  };
  return (
    <Card style={{ width: "18rem", marginBottom: "30px" }}>
      <Card.Header>Featured</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Name : {contact.name}</ListGroup.Item>
        <ListGroup.Item>Email : {contact.email}</ListGroup.Item>
        <ListGroup.Item>Age : {contact.age}</ListGroup.Item>
        <ListGroup.Item>
          <Button variant="danger" onClick={handleDelete}>
            delete
          </Button>

          <Button variant="info" onClick={handleToggleTrue}>
            edit
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default ContactCard;

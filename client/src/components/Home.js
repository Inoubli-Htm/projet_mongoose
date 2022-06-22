import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toggleFalse } from "../redux/actions/contactActions";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleToggleFalse = () => {
    dispatch(toggleFalse());
    navigate("/addEdit");
  };

  return (
    <div
      style={{
        paddingTop: "50px",
        width: "40%",
        display: "flex",
        justifyContent: "space-around",
        margin: "auto",
      }}
    >
      <Link to="/contacts">
        {" "}
        <Button variant="primary">Contacts</Button>
      </Link>

      <Button variant="primary" onClick={handleToggleFalse}>
        Add Contacts
      </Button>
    </div>
  );
}

export default Home;

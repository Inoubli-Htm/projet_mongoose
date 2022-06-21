import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../redux/actions/contactActions";
import ContactCard from "./ContactCard";

function Contacts() {
  const contacts = useSelector((state) => state.contactReducer.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        paddingTop: "50px",
        width: "90%",
        margin: "auto",
      }}
    >
      {contacts.map((contact) => (
        <ContactCard contact={contact} key={contact._id} />
      ))}
    </div>
  );
}

export default Contacts;

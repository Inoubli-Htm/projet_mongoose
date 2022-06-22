import axios from "axios";
import {
  GET_CONTACT,
  GET_CONTACTS,
  TOGGLE_FALSE,
  TOGGLE_TRUE,
} from "../types/contactTypes";

export const getContacts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/contacts/allContacts");

    dispatch({ type: GET_CONTACTS, payload: res.data.contacts });
  } catch (error) {
    console.log(error);
  }
};

export const addContact = (formData) => async (dispatch) => {
  try {
    await axios.post("/api/contacts/addContact", formData);
    dispatch(getContacts());
  } catch (error) {
    console.log(error);
  }
};

export const deleteContact = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/contacts/deleteContact/${id}`);
    dispatch(getContacts());
  } catch (error) {
    console.log(error);
  }
};

export const toggleTrue = () => {
  return {
    type: TOGGLE_TRUE,
  };
};
export const toggleFalse = () => {
  return {
    type: TOGGLE_FALSE,
  };
};
export const getContact = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/contacts/getOneContact/${id}`);
    dispatch({
      type: GET_CONTACT,
      payload: res.data.contact,
    });
  } catch (error) {
    console.log(error);
  }
};
export const updateContact = (id, formData) => async (dispatch) => {
  try {
    await axios.put(`/api/contacts/updateContact/${id}`, formData);
    dispatch(getContacts());
  } catch (error) {
    console.log(error);
  }
};

import {
  GET_CONTACT,
  GET_CONTACTS,
  TOGGLE_FALSE,
  TOGGLE_TRUE,
} from "../types/contactTypes";

const initState = {
  contacts: [],
  contact: null,
  loading: true,
  edit: true,
};
function contactReducer(state = initState, { type, payload }) {
  switch (type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: payload,
        loading: false,
      };
    case GET_CONTACT:
      return {
        ...state,
        contact: payload,
        loading: false,
      };
    case TOGGLE_TRUE:
      return {
        ...state,
        edit: true,
      };
    case TOGGLE_FALSE:
      return {
        ...state,
        edit: false,
      };
    default:
      return state;
  }
}
export default contactReducer;

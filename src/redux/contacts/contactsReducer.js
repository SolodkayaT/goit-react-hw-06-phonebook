import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactsAction from "./contactsActions";

const addContact = (state, action) => [...state, action.payload.contact];
const removeContact = (state, action) =>
  state.filter(contact => contact.id !== action.payload);
const items = createReducer([], {
  [contactsAction.addContact]: addContact,
  [contactsAction.removeContact]: removeContact
});

const filter = createReducer("", {
  [contactsAction.changeFilter]: (state, action) => action.payload
});

export default combineReducers({
  items,
  filter
});

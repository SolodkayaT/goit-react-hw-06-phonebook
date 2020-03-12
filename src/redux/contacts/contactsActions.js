import { uuid } from "uuidv4";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contacts/add", (name, phone) => ({
  payload: {
    contact: {
      id: uuid(),
      name,
      phone
    }
  }
}));

const removeContact = createAction("contacts/remove");
const changeFilter = createAction("task/changeFilter");

export default {
  addContact,
  removeContact,
  changeFilter
};

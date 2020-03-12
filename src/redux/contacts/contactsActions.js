import { uuid } from "uuidv4";
import actionsType from "./contactsActionType";

const addContact = (name, phone) => ({
  type: actionsType.ADD,
  payload: {
    contact: {
      id: uuid(),
      name,
      phone
    }
  }
});

const removeContact = id => ({
  type: actionsType.REMOVE,
  payload: {
    id
  }
});

const changeFilter = filter => ({
  type: actionsType.CHANGE_FILTER,
  payload: {
    filter
  }
});

export default {
  addContact,
  removeContact,
  changeFilter
};

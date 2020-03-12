import { combineReducers } from "redux";
import actionType from "./contactsActionType";

const items = (state = [], { type, payload }) => {
  switch (type) {
    case actionType.ADD:
      return [...state, payload.contact];
    case actionType.REMOVE:
      return state.filter(contact => contact.id !== payload.id);
    default:
      return state;
  }
};

const filter = (state = "", { type, payload }) => {
  switch (type) {
    case actionType.CHANGE_FILTER:
      return payload.filter;
    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter
});

import { createStore, combineReducers } from "redux";
import contactsReducer from "./contacts/contactsReducer";

const rootReduser = combineReducers({
  contacts: contactsReducer
});
const store = createStore(
  rootReduser,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

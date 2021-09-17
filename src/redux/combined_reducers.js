import { contactsReducer } from "./contacts_redux/contacts_reducer";
import { usersReducer } from "./users_redux/users_reducer";
import { combineReducers } from "redux";

const reducer = combineReducers({
  contactsReducer: contactsReducer,
  usersReducer: usersReducer
});

export default reducer;

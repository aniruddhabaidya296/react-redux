import { SHOW_CONTACTS,UPDATE_CONTACTS } from "./events";

const initialState = {
  contacts: []
};

export const contactsReducer = (state = initialState, action) => {
  // console.log("reducer action", action);
  switch (action.type) {
    case SHOW_CONTACTS:
      state["contacts"] = action.payload;
      console.log("reducer state ", state["contacts"].length);
      return { ...state };
    case UPDATE_CONTACTS:
      state["contacts"] = action.payload;
      console.log("reducer state ", state["contacts"].length);
      return { ...state };
    default:
      return state;
  }
};

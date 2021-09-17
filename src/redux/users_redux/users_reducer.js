import { SET_USERS } from "./user_events";

const initialState = {
  users: []
};

export const usersReducer = (state = initialState, action) => {
  // console.log("reducer action", action);
  switch (action.type) {
    case SET_USERS:
      state["users"] = action.payload;
      console.log("userReducer state ", state["users"].length);
      return { ...state };
    default:
      return state;
  }
};

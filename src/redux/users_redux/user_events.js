export const GET_USERS = "GET_USERS";
export const SET_USERS = "SET_USERS";

//action
export const getUsersEvent = () => {
  return {
    type: GET_USERS,
  };
};
//action
export const setUsersEvent = data => {
  return {
    type: SET_USERS,
    payload: data
  };
};

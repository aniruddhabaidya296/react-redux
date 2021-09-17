export const SHOW_CONTACTS = "SHOW_CONTACTS";
export const UPDATE_CONTACTS = "UPDATE_CONTACTS";

//action
export const showContactsEvent = data => {
  return {
    type: SHOW_CONTACTS,
    payload: data
  };
};

export const updateContactsEvent = data => {
  return {
    type: UPDATE_CONTACTS,
    payload: data
  };
};

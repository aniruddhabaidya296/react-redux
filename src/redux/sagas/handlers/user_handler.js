import { call, put } from "redux-saga/effects";
import { setUsersEvent } from "../../users_redux/user_events";
import { requestFetchUsers } from "../requests/user_request";
import { SET_USERS } from "../../users_redux/user_events";

export function* handleFetchUsers(action) {
  try {
    const response = yield call(requestFetchUsers);
    const { data } = response;
    console.log(data);
    yield put(setUsersEvent(data));
  } catch (error) {
    console.log(error);
  }
}

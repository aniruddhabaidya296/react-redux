import { takeEvery } from "redux-saga/effects";
import { GET_USERS } from "../users_redux/user_events";
import { handleFetchUsers } from "./handlers/user_handler";

export function* watcherSaga() {
  yield takeEvery(GET_USERS, handleFetchUsers);
}

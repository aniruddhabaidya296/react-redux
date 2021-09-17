import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas/root_saga";
import reducer from "./combined_reducers";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;

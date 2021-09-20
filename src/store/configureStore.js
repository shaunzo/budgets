import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import entriesReducer from '../reducers/entries.reducers';
import modalsReducer from '../reducers/modals.reducers';
import createSagaMiddleware from "@redux-saga/core";
import { testSaga } from "../sagas/testSaga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const configureStore = () => {
    const store = createStore(
        combineReducers({
            entries: entriesReducer,
            modals: modalsReducer,
        }),
        composeWithDevTools(
            applyMiddleware(...middlewares)
        )
    );
    sagaMiddleware.run(testSaga)
    return store;
};

export default configureStore;
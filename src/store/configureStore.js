import { configure } from "@testing-library/react";
import { combineReducers, createStore } from "redux";
import entriesReducer from '../reducers/entries.reducers';

const configureStore = () => {
    return createStore(
        combineReducers({
            entries: entriesReducer,
        })
    )
};

export default configureStore;
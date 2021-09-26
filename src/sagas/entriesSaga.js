import {call, fork, put, take} from 'redux-saga/effects';
import entriesTypes, { populateEntries, populateEntryDetails } from '../actions/entries.actions';
import axios from 'axios';

export function* getAllEntries() {
    // Wait till we receive a message to fetch all the entries with take effect
    yield take(entriesTypes.GET_ENTRIES);
    const result = yield call(axios, 'http://localhost:3001/entries');
    yield put(populateEntries(result.data));
}

export function* getEntryDetails(id) {
    const {data} = yield call(axios, `http://localhost:3001/values/${id}`);
    yield put(populateEntryDetails(id, data));
}

export function* getAllEntriesDetails() {
    const { payload } =  yield take(entriesTypes.POPULATE_ENTRIES);

    for (let index = 0; index < payload.length; index++) {
        const entry = payload[index];
        yield fork(getEntryDetails, entry.id);
    }
}
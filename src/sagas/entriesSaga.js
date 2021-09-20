import {call, take} from 'redux-saga/effects';
import entriesTypes from '../actions/entries.actions';
import axios from 'axios';

export function* getAllEntries() {
    // Wait till we receive a message to fetch all the entries with take effect
    yield take(entriesTypes.GET_ENTRIES);
    console.log('I need to get the entries now');
    const result = yield call(axios, 'http://localhost:3001/entries');
    console.log(result);
}
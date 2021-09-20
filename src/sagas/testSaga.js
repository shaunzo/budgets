import {delay, take, put, call} from 'redux-saga/effects';

export function* testSaga() {
    while(true) {
        console.log('Starting Saga');
        const state = yield take('TEST_MESSAGE');
        const a = yield call(double, 2);
        console.log(a);
        const b = yield double(3);
        console.log(b);
        console.log("Finish saga function", state);
    }
}

export function* dispatchTest() {
    while(true) {
        yield delay(1000);
        yield put({type: 'TEST_MESSAGE'});
    }
}

export function double(number) {
    return number * 2;
}

// Utility helper functions
// * delay - like timeout, will execute after a given amount of milleseconds
// * take - Will wait until a specified action is dispatched
    /**
     * export function* testSaga() {
        while(true) {
            console.log('Starting Saga');
            const state = yield take('TEST_MESSAGE')
            console.log("Finish saga function", state);
        }
    }
 */
// * put - same as dispatch - puts a message/data in a yield as a payload:
/**
 * export function* dispatchTest() {
    while(true) {
        yield delay(1000);
        yield put({type: 'TEST_MESSAGE'});
    }
}
 */

// Call - calls a function
import {delay, take, put, call, fork, takeEvery} from 'redux-saga/effects';

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

function* doNothing() {
    console.log('I have been called');
    yield delay(1000);
    console.log('I am doing nothing');
}

export function* testSagaFork() {
    while(true) {
        yield take('TEST_MESSAGE_2');
        yield fork(doNothing);
        yield fork(doNothing);
        yield fork(doNothing);
    }
}

export function* testSagaTakeEveryProcess({payload}){
    console.log(`Starting process for index ${payload}`);
    yield delay(3000);
    console.log(`Ending process for index ${payload}`);
}

export function* testSagaTakeEvery() {
    const {payload} = yield takeEvery('TEST_MESSAGE_3', testSagaTakeEveryProcess);
    console.log(`Finished TakeEvery for index ${payload}`); 

}

export function* dispatchTest() {
    let index = 0;
    while(true) {
        yield delay(500);
        yield put({type: 'TEST_MESSAGE_3', payload: index});
        index++;
    }
}

export function* double(number) {
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

// Call - calls a function after it received a result

// Fork - executes multiple functions at the same time/in parrallel
// import * as entriesSaga from '../sagas/entriesSaga';
import * as testSaga from '../sagas/testSaga';

export function initSagas(sagaMiddleware) {
    Object.values(testSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
    // Object.values(entriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
}
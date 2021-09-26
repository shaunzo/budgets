import * as entriesSaga from '../sagas/entriesSaga';
import * as entriesSagaDeletion from '../sagas/entriesSagaDeletion';
import * as entriesSagaAdd from '../sagas/entriesSagaAdd';
// import * as testSaga from '../sagas/testSaga';

export function initSagas(sagaMiddleware) {
    // Object.values(testSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
    Object.values(entriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
    Object.values(entriesSagaDeletion).forEach(sagaMiddleware.run.bind(sagaMiddleware));
    Object.values(entriesSagaAdd).forEach(sagaMiddleware.run.bind(sagaMiddleware));
}
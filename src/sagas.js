import { all } from 'redux-saga/effects';

/**
 * Root saga
 * @returns {IterableIterator<AllEffect | GenericAllEffect<any> | *>}
 */

export default function* rootSagas() {
  yield all([
  ]);
}

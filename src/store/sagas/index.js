import { all, takeLatest } from 'redux-saga/effects';

import { Types as UserTypes } from '../ducks/user';

import { addUser } from './users';

/**
 * Combinar todos os sagas em um só
 */
export default function* rootSaga() {
  // Configurar para que quando a action ADD_REQUEST disparar, chamar o saga 'addUser'
  yield all([takeLatest(UserTypes.ADD_REQUEST, addUser)]);
}

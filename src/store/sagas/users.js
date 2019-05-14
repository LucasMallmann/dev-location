import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as UserActions } from '../ducks/user';

/**
 * Eu vou receber a action de ADD_REQUEST, então ela vai vir com as coordinates
 * @param {object} action
 */
export function* addUser(action) {
  try {
    const { coordinates } = action.payload;
    const { data } = yield call(api.get, `/${action.payload.user}`);
    const userData = {
      id: data.id,
      name: data.name,
      username: data.login,
      avatar: data.avatar_url,
      coordinates,
    };
    yield put(UserActions.addSuccess(userData));
  } catch (error) {
    yield put(UserActions.addFailure('Não foi possível obter o usuário'));
  }
}

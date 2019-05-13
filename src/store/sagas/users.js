import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as UserActions } from '../ducks/user';

export function* addUser(action) {
  try {
    const { data } = yield call(api.get, `/${action.payload.user}`);
    const userData = {
      name: data.name,
      username: data.login,
      avatar: data.avatar_url,
    };
    yield put(UserActions.addSuccess(userData));
  } catch (error) {
    yield put(UserActions.addFailure('Não foi possível obter o usuário'));
  }
}

import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { loadUsersFailure, loadUsersSuccess } from './actions';

export function* load() {
  try {
    const response = yield call(api.get, '/users');

    yield put(loadUsersSuccess(response.data.data));
  } catch (err) {
    yield put(loadUsersFailure());
  }
}

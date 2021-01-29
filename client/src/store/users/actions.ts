import { User, UsersActionTypes, UsersTypes } from './types';

export const loadUsersRequest = (): UsersActionTypes => ({
  type: UsersTypes.LOAD_USERS_REQUEST,
});

export const loadUsersSuccess = (users: User[]): UsersActionTypes => ({
  type: UsersTypes.LOAD_USERS_SUCCESS,
  payload: users,
});

export const loadUsersFailure = (): UsersActionTypes => ({
  type: UsersTypes.LOAD_USERS_FAILURE,
});

export enum UsersTypes {
  LOAD_USERS_REQUEST = '@users/LOAD_USERS_REQUEST',
  LOAD_USERS_SUCCESS = '@users/LOAD_USERS_SUCCESS',
  LOAD_USERS_FAILURE = '@users/LOAD_USERS_FAILURE',
}

export interface User {
  id: string;
  name: string;
  email: string;
}

interface LoadUsersRequest {
  type: UsersTypes.LOAD_USERS_REQUEST;
}

interface LoadUsersSuccess {
  type: UsersTypes.LOAD_USERS_SUCCESS;
  payload: User[];
}

interface LoadUsersFailure {
  type: UsersTypes.LOAD_USERS_FAILURE;
}

export type UsersActionTypes =
  | LoadUsersRequest
  | LoadUsersSuccess
  | LoadUsersFailure;

export interface UsersState {
  readonly data: User[];
  readonly loading: boolean;
  readonly error: boolean;
}

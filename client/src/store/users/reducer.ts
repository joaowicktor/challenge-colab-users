import { Reducer } from 'redux';

import { UsersState, UsersTypes } from './types';

const INITIAL_STATE: UsersState = {
  data: [],
  loading: false,
  error: false,
};

const reducer: Reducer<UsersState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UsersTypes.LOAD_USERS_REQUEST:
      return { ...state, loading: true };
    case UsersTypes.LOAD_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    case UsersTypes.LOAD_USERS_FAILURE:
      return { ...state, loading: false, error: true, data: [] };
    default:
      return state;
  }
};

export default reducer;

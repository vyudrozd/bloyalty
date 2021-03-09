import { ActionTypes } from './actions';

export const initialState = Object.freeze({
  data: {
    id: null,
    login: null,
    fam_inner: null,
    phone_inner: null,
  },
  loading: false,
  error: null,
});

export default (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case ActionTypes.USER_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionTypes.USER_SUCCESS:
      return {
        loading: false,
        error: null,
        data: payload.data,
      };
    case ActionTypes.USER_ERROR:
      return {
        loading: false,
        error: payload.error,
        data: null,
      };
    default:
      return state;
  }
};

import axios from '../../axios';

export const ActionTypes = {
  USER_START: 'user/user-start',
  USER_SUCCESS: 'user/user-success',
  USER_ERROR: 'user/user-error',
};

export const _start = () => ({
  type: ActionTypes.USER_START,
});

export const _success = ({ data }) => ({
  type: ActionTypes.USER_SUCCESS,
  payload: {
    data,
  },
});

export const _failure = ({ error }) => ({
  type: ActionTypes.USER_ERROR,
  payload: error,
});

export const loginUser = ({ email, password, onError }) => async dispatch => {
  dispatch(_start());

  try {
    const { data } = await axios.post('/auth', { login: email, password });
    dispatch(_success({ data }));
    localStorage.setItem('__bloyalty__', data?.token);
  } catch (err) {
    const error = err?.response?.data?.errors;
    dispatch(_failure(error));
    if (typeof onError === 'function') {
      onError(error);
    }
  }
};

export const loginUserByToken = ({ token }) => async dispatch => {
  dispatch(_start());

  try {
    const { data } = await axios.post('/auth', { token });
    dispatch(_success({ data }));
    localStorage.setItem('__bloyalty__', data?.token);
  } catch (err) {
    const error = err?.response?.data?.errors;
    dispatch(_failure(error));
  }
};

import * as types from './types';
import firebase from 'firebase';

export const emailChanged = (text) => {
  return {
    type: types.EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: types.PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: types.LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch((error) => {
        console.log(error);
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
      });
  };
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: types.LOGIN_USER_SUCCESS,
    payload: user,
  });
};

const loginUserFail = (dispatch) => {
  dispatch({
    type: types.LOGIN_USER_FAIL,
  });
};

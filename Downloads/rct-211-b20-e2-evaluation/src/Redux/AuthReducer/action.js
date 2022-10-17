//Write the ActionCreator functions here

import * as types from "./actionTypes";
import axios from "axios"
const loginRequest = () => {
  return {
    type: types.LOGIN_REQUEST,
  };
};

const loginSuccess = (payload) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload,
  };
};

const loginFailure = () => {
  return {
    type: types.LOGIN_FAILURE,
  };
};

const UserLogin = (payload) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  return axios
    .post("https://reqres.in/api/login", payload)
    .then((res) => {
      console.log(res.data.token);

      return dispatch(loginSuccess(res.data.token));
    })
    .catch((err) => {
      dispatch(loginFailure());
    });
};

export { loginFailure, loginSuccess, loginRequest, UserLogin };

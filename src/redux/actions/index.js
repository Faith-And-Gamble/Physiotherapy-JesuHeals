import postApi from "../../service_methods/post_method";
import {
  API_REQUEST,
  ON_COMPLETE,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
} from "../action_types";

export const apiRequest = () => ({
  type: API_REQUEST,
  payload: true,
});

export const onComplete = () => ({
  type: ON_COMPLETE,
  payload: false,
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const LoginFailure = (payload) => ({
  type: LOGIN_FAIL,
  payload,
});

export const login = (url, payload) => (dispatch) => {
  dispatch(apiRequest());
  const {username} = payload;
  const msg = `Welcome back ${username}`;
  setTimeout(() => {
    postApi(url, payload, msg)
      .then((res) => {
        // console.log(res.data);
        dispatch(loginSuccess(res.data));
      })
      .catch((err) => dispatch(LoginFailure(err)));
  }, 0);
};

export const signUpSuccess = (payload) => ({
  type: SIGNUP_SUCCESS,
  payload,
});

export const signUpFailure = (payload) => ({
  type: SIGNUP_FAIL,
  payload,
});

export const signUp = (url, payload) => (dispatch) => {
  dispatch(apiRequest());
  //const msg = "Welcome to Jesus Heals Physiotherapy";
  console.log(payload)
  postApi(url, payload)
    .then((res) => {
      console.log(res)
      dispatch(signUpSuccess(res.data));
    })
    .catch((err) => dispatch(signUpFailure(err)));
};

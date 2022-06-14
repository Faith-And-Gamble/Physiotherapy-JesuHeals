import {
    API_REQUEST,
    ON_COMPLETE,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
  } from "../action_types";
  
  const initialState = {
    isLoading: false,
    isLoggedIn: false,
    userData: [],
  };
  
  const tasks = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case API_REQUEST:
        return {
          ...state,
          isLoading: payload,
        };
      case ON_COMPLETE:
        return {
          ...state,
          isLoading: payload,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          userData: payload,
          isLoading: false,
          isLoggedIn: true,
        };
      case LOGIN_FAIL:
        return {
          ...state,
          isLoading: false,
        };
      case SIGNUP_SUCCESS:
        return {
          ...state,
          userData: payload,
          isLoading: false,
          isLoggedIn: true,
        };
      case SIGNUP_FAIL:
        return {
          ...state,
          isLoading: false,
        };
      default:
        return state;
    }
  };
  
  export default tasks;
  
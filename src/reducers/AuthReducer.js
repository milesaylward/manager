/*
Reducers cannot return undefiined
INITIAL_STATE is defined to ensure
that onLoad program runs correctly

{ ...state, email: action.payload }
this line copies the state object
then it returns it overwriting the previous
email value with the current one
*/
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

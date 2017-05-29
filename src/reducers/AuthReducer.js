/*
Reducers cannot return undefiined
INITIAL_STATE is defined to ensure
that onLoad program runs correctly
*/
import { EMAIL_CHANGED } from '../actions/types';

const INITIAL_STATE = { email: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return;
    default:
      return state;
  }
};

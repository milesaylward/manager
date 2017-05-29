import { EMAIL_CHANGED } from './types';

export const EmailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

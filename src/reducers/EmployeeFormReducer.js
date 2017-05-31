import {
  EMPLOYEE_INFO_CHANGE,
  CANCEL_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_UPDATE_SUCESS,
  EMPLOYEE_DELETE_SUCESS
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_INFO_CHANGE:
    //action.payload will be passed in as an object { prop: 'name', value: 'John' }
      return { ...state, [action.payload.prop]: action.payload.value };
    case CANCEL_UPDATE:
      return INITIAL_STATE;
    case EMPLOYEE_CREATE:
      return INITIAL_STATE;
    case EMPLOYEE_UPDATE_SUCESS:
      return INITIAL_STATE;
    case EMPLOYEE_DELETE_SUCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};

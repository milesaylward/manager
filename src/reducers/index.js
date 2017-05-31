import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeesReducer';


export default combineReducers({
  auth: AuthReducer,
  EmployeeForm: EmployeeFormReducer,
  employees: EmployeeReducer
});

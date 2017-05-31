import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_INFO_CHANGE,
  CANCEL_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_UPDATE_SUCESS,
  EMPLOYEE_DELETE_SUCESS
} from './types';


export const EmployeeInfoChange = ({ prop, value }) => {
  return {
    type: EMPLOYEE_INFO_CHANGE,
    payload: { prop, value }
  };
};

export const CancelUpdate = ({ name, phone, shift }) => {
  return {
    type: CANCEL_UPDATE,
    payload: { name, phone, shift }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
        Actions.EmployeeList({ type: 'reset' });
     });
  };
};

export const fetchEmployees = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    //on value snap allows for instant updating of employees when any are updated or new are added
      .on('value', snapshot => {
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const UpdateEmployee = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_UPDATE_SUCESS });
        Actions.EmployeeList({ type: 'reset' });
      });
  };
};

export const DeleteEmployee = ({ uid }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        dispatch({ type: EMPLOYEE_DELETE_SUCESS });
        Actions.EmployeeList({ type: 'reset' });
      });
  };
};

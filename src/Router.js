import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EditEmployee from './components/EditEmployee';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key='auth'>
        <Scene key='login' component={LoginForm} title='Login' initial />
      </Scene>
      <Scene key='main'>
        <Scene
          rightTitle='Add'
          onRight={() => Actions.EmployeeCreate()}
          key='EmployeeList'
          component={EmployeeList}
          title='Employees'
          initial
        />
        <Scene key='EmployeeCreate' component={EmployeeCreate} title='Create New Employee' />
        <Scene key='EditEmployee' component={EditEmployee} title='Edit Employee' />
          </Scene>
    </Router>
  );
};

export default RouterComponent;

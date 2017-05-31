import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { EmployeeInfoChange, UpdateEmployee, DeleteEmployee, CancelUpdate } from '../actions';
import { Card, CardItem, Button, Confirm } from './common';

class EditEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      showModal: false
    });
  }


  componentWillMount() {
    /*
    this is a little hacky seemed a bit more simple
    than another action creator simply for displaying an employee
    lodash feeds data to the employeeInfoChange
    action creator for each { key: value pair } in the employee prop
    */
    _.each(this.props.employee, (value, prop) => {
      this.props.EmployeeInfoChange({ prop, value });
    });
  }

  componentWillUnmount() {
    const { name, phone, shift } = this.props;

    this.props.CancelUpdate({ name, phone, shift });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.UpdateEmployee({ name, phone, shift, uid: this.props.employee.uid });
  }
  onTextPress() {
    const { phone, shift } = this.props;

    Communications.text(phone, `You'll be working on ${shift}`);
  }
  onFirePress() {
    this.setState({ showModal: true });
    console.log(this.props);
  }
  onConfirmAccept() {
    const { uid } = this.props.employee;

    this.props.DeleteEmployee({ uid });
  }
  onConfirmDecline() {
    this.setState({ showModal: false });
  }

  render() {
      return (
        <Card>
          <EmployeeForm />
          <CardItem>

            <Button onPress={this.onButtonPress.bind(this)}>
              Update Employee
            </Button>
          </CardItem>

          <CardItem>
            <Button onPress={this.onTextPress.bind(this)}>
              Text Schedule
            </Button>
          </CardItem>

          <CardItem>
            <Button onPress={this.onFirePress.bind(this)}>
              Fire Employee
            </Button>
          </CardItem>

          <Confirm
            visible={this.state.showModal}
            onAccept={this.onConfirmAccept.bind(this)}
            onDecline={this.onConfirmDecline.bind(this)}
          >
            Are you sure you want to fire {this.props.employee.name}?
          </Confirm>
        </Card>
      );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.EmployeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  EmployeeInfoChange,
  UpdateEmployee,
  DeleteEmployee,
  CancelUpdate
 })(EditEmployee);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { EmployeeInfoChange, employeeCreate } from '../actions';
import { Card, CardItem, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {

  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardItem>
          <Button
            onPress={this.onButtonPress.bind(this)}
          >
            Save
          </Button>
        </CardItem>
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
  employeeCreate
})(EmployeeCreate);

import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { EmployeeInfoChange } from '../actions';
import { CardItem, Input } from './common';

class EmployeeForm extends Component {

  renderPickerOptions() {
    const days = [
      'Monday', 'Tuesday', 'Wednesday',
      'Thursday', 'Friday', 'Saturday', 'Sunday'
    ];
    return days.map((day) => <Picker.Item key={day} label={day} value={day} />);
  }

  render() {
    return (
      <View>
        <CardItem>
          <Input
            label='Name'
            placeholder='John Doe'
            value={this.props.name}
            onChangeText={value => this.props.EmployeeInfoChange({ prop: 'name', value })}
          />
        </CardItem>

        <CardItem>
          <Input
            label='Phone'
            placeholder='555-555-5555'
            value={this.props.phone}
            onChangeText={value => this.props.EmployeeInfoChange({ prop: 'phone', value })}
          />
        </CardItem>

        <CardItem style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>
            Pick a shift
          </Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={value => this.props.EmployeeInfoChange({ prop: 'shift', value })}
          >
            {this.renderPickerOptions()}
          </Picker>
        </CardItem>
      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20,
    paddingTop: 10
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.EmployeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { EmployeeInfoChange })(EmployeeForm);

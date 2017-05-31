import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { fetchEmployees } from '../actions';
import EmployeeListItem from './EmployeeListItem';

class EmployeeList extends Component {
  componentWillMount() {
      this.props.fetchEmployees();

      this.createDataScource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    //nextProps are the next set of props this Component will recieve
    this.createDataScource(nextProps);
  }

  createDataScource({ employees }) {
    //helper method to ensure the data is built whenever componentWillMount
    //Or when the data is updated by adding new employees
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
    return <EmployeeListItem employee={employee} />;
  }

      render() {
        return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  //lodash returns our object as an array
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });

  return { employees };
};

export default connect(mapStateToProps, { fetchEmployees })(EmployeeList);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardItem, Input, Button } from './common';
import { EmailChanged, PasswordChanged, LoginUser } from '../actions';

class LoginForm extends Component {

  onEmailChange(text) {
    this.props.EmailChanged(text);
  }

  onPasswordChange(text) {
    this.props.PasswordChanged(text);
  }
  onButtonPress() {
    const { email, password } = this.props;

    this.props.LoginUser({ email, password });
  }

  render() {
    return (
      <Card>
        <CardItem>
          <Input
            label='email'
            placeholder='user@gmail.com'
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardItem>

        <CardItem>
          <Input
            label='password'
            placeholder='password'
            secureTextEntry
            onChangeText={this.onPasswordChange.bind(this)}
          />
        </CardItem>

        <CardItem>
          <Button
            onPress={this.onButtonPress.bind(this)}
          >
            Sign-up/Log-in
          </Button>
        </CardItem>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { email, password } = state.auth;

  return {
    email,
    password
  };
};

export default connect(mapStateToProps, {
  EmailChanged,
  PasswordChanged,
  LoginUser
})(LoginForm);

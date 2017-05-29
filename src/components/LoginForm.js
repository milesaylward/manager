import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardItem, Input, Button, Spinner } from './common';
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
  renderButton() {
    if (this.props.loading) {
      return <Spinner size='large' />;
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Sign-up/Log-in
      </Button>
    );
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
            value={this.props.password}
          />
        </CardItem>

        <Text style={styles.errorTextStyle}>
          {this.props.error.message}
        </Text>

        <CardItem>
          {this.renderButton()}
        </CardItem>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  EmailChanged,
  PasswordChanged,
  LoginUser,

})(LoginForm);

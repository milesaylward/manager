import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardItem, Input, Button } from './common';
import { EmailChanged } from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.EmailChanged(text);
  }

  render() {
    return (
      <Card>
        <CardItem>
          <Input
            label='email'
            placeholder='user@gmail.com'
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardItem>

        <CardItem>
          <Input
            label='password'
            placeholder='password'
            secureTextEntry
          />
        </CardItem>

        <CardItem>
          <Button>
            Sign-up/Log-in
          </Button>
        </CardItem>
      </Card>
    );
  }
}

export default connect(null, EmailChanged)(LoginForm);

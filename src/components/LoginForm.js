import React, { Component } from 'react';
import { Card, CardItem, Input, Button } from './common';

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Input
            label='email'
            placeholder='user@gmail.com'
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

export default LoginForm;

import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyDFygdeJhbeCJcJFbSooSzq1NM68f1ggdc',
    authDomain: 'manager-d5072.firebaseapp.com',
    databaseURL: 'https://manager-d5072.firebaseio.com',
    projectId: 'manager-d5072',
    storageBucket: 'manager-d5072.appspot.com',
    messagingSenderId: '67493784012'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;

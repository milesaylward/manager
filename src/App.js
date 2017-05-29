import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
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

  /*
  Redux Thunk is used to handle asynchronous
  action creators. In this app it's handling the
  requests to firebase
  */

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;

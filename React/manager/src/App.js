import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk'
import reducers from './reducers';
import Router from './Router';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyA1Hn357cFPRnHL4RmujP5jvqxcvP2wKrA',
      authDomain: 'manager-dd1ba.firebaseapp.com',
      databaseURL: 'https://manager-dd1ba.firebaseio.com',
      projectId: 'manager-dd1ba',
      storageBucket: '',
      messagingSenderId: '86884892867'
    };
    firebase.initializeApp(config);
  }

  render() {
    // second argument is for initial state (usually for server side rendering)
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;

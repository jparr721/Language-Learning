import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyARbYy3Z9WPqjtdI6tK-lCODkYLh_jylzo',
      authDomain: 'auth-75e2e.firebaseapp.com',
      databaseURL: 'https://auth-75e2e.firebaseio.com',
      projectId: 'auth-75e2e',
      storageBucket: 'auth-75e2e.appspot.com',
      messagingSenderId: '95605605214'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch(this.state.loggedIn) {
      case true:
        return (
           <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
         )
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Login" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;

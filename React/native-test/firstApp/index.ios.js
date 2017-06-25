import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';
import Home from './app/components/Home/Home';
import Food from './app/components/Food/Food';


export default class firstApp extends Component {
  render() {
    return (
      <View>
        <Home/>
        <Food/>
      </View>
    );
  }
}


AppRegistry.registerComponent('firstApp', () => firstApp);

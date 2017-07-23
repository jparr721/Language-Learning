import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import { Search } from './components/Search';

class App extends Component {
  render() {
    return(
      <View>
        <Header headerText={'Git Search-Inator'} />
        <Search />
      </View>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

class Search extends Component {
  state = { results: [], text: 'Search...' };

  loadUser() {

  }
  render() {
    return (
      <TextInput
        style={styles.searchBar}
        returnKeyType='Search'
        onChangeText={(text) => this.setState({text})}
        value={this.state.text} />
    )
  }

}

const styles = StyleSheet.create({
  searchBar: {
    borderRadius: 1,
    width: 40,
    height: 20,
    borderColor: 'gray',
    borderWidth: 1,
  }
})

export default Search;

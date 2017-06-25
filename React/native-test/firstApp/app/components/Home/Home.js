import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'Brad',
            showName: true,
            message: this.props.message
        }
    }

    static defaultProps = {
        message: 'Hi There'
    }

  render() {
      let name = this.state.showName ? this.state.name : 'No name';
    return (
      <View style={Styles.container}>
        <Text>{this.state.message}</Text>
        <Text>{name}</Text>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
});

AppRegistry.registerComponent('Home', () => Home);

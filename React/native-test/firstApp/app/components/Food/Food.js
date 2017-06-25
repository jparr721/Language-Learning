import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';

export default class Food extends Component{
    render() {
        return (
            <View>
                <Text style={styles.text}>Food Component</Text>
                <View style={styles.container}>
                    <View style={styles.v1}>
                        <Text></Text>

                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: 'blue'
    },
    text: {
        color: 'red'
    }
});

AppRegistry.registerComponent('Food', () => Food);
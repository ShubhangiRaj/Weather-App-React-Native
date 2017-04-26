/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

export default class Forecast extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> 
                    {this.props.main}
                </Text>
                <Text style={styles.text}>
                    {this.props.description}
                </Text>
                <Text style={styles.text}>
                    {this.props.temp}
                </Text>
                <Text style={styles.text}> 
                    {this.props.country}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        margin: 10,
        justifyContent: 'flex-start'
    },
    text:{
        fontSize:16,
        textAlign: 'center',
        color:'#212121',
        margin: 2
    },
});


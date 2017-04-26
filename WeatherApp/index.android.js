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

import Weather from './components/Weather';

export default class WeatherApp extends Component {
    render() {
        return (
            <View>
                <Weather />
            </View>
        );
    }
}

AppRegistry.registerComponent('WeatherApp', () => WeatherApp);

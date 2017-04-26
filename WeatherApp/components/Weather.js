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
    TextInput,
    Dimensions,
    ScrollView
} from 'react-native';

import Forecast from '../components/Forecast';

export default class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            forecast: {
                main: '',
                description: '',
                temp: '',
                country: ''
            }
        };
    }

    // we will pass this callback to the <TextInput>
    handeTextChange(event){
        const city = event.nativeEvent.text // declare city variable to make it available for fetch
        this.setState ({
            city:city
        });

        // Fecth API to get data from the OpenWeaherMap API 
        fetch('http://api.openweathermap.org/data/2.5/weather/?q='+ city + "&units=metric" + "&APPID=a5cc950df1a1ee711cf9a6e2e4962ba4")
            .then((response) => response.json())
            .then((responseJSON) => {
                this.setState({
                    forecast: {
                        main: "Weather: " + responseJSON.weather[0].main,
                        description: "Outside: " + responseJSON.weather[0].description,
                        temp: "Temprature: " + responseJSON.main.temp + " C",
                        country: "Country: " + responseJSON.sys.country
                    }
                });
            })
            .catch((error) => {
                console.warn(error);
            });
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.welcome}>
                       Find latest weather in {this.state.city}
                    </Text>
                    <TextInput placeholder="Enter city name" underlineColorAndroid='rgba(0,0,0,0)' style={styles.input} onSubmitEditing={this.handeTextChange.bind(this)}></TextInput>
                    <Forecast country={this.state.forecast.country} main={this.state.forecast.main} description={this.state.forecast.description} temp={this.state.forecast.temp}/>
                </View>
            </ScrollView>
        );
    }
}

const {height} = Dimensions.get('screen');

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#F5FCFF",
        height
    },
    welcome:{
        fontSize: 20,
        textAlign: 'center',
        color: '#025268',
        marginBottom: 20
    },
    input:{
        fontSize:16,
        borderWidth: 1,
        borderColor: '#424242',
        height: 50,
        width: 200,
        textAlign: 'center'
    }
});


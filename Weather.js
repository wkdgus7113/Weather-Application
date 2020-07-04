import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
    Rain: {
        colors: ['#00C6FB', "#005BEA"],
        title: "Raining",
        subtitle: "It's raining outside!",
        icon: 'ios-rainy'
    },
    Clear: {
        colors: ['#FFE253', "#FF7300"],
        title: "Sunny",
        subtitle: "It's Sunny Day!",
        icon: 'ios-sunny'
    },
    Thunderstorm: {
        colors: ['#00ECBC', "#007ADF"],
        title: "Thunderstrom",
        subtitle: "Wathch out! Thunder is coming...",
        icon: "ios-thunderstorm"
    },
    Clouds: {
        colors: ['#D7D2CC', "#304352"],
        title: "Clouds",
        subtitle: "Today is cloudy~",
        icon: 'ios-cloudy'
    },
    Snow: {
        colors: ['#7DE2FC', "#B9B6E5"],
        title: "Snow",
        subtitle: "Do you want to build a snowman~?",
        icon: 'ios-snow'
    },
    Drizzle: {
        colors: ['#89F7FE', "#66A6FF"],
        title: "Drizzle",
        subtitle: "It is drizzle",
        icon: 'md-rainy'
    },
    Haze: {
        colors: ['#89F7FE', "#66A6FF"],
        title: "Hazle",
        subtitle: "It is hazle",
        icon: 'ios-cloudy'
    },
    Mist: {
        colors: ['#D7D2CC', "#304352"],
        title: "Mist",
        subtitle: "It is mist!",
        icon: 'ios-cloudy'
    }
}

function Weather( { weatherName, temperature } ) {
    return (
        <LinearGradient
            colors={weatherCases[weatherName].colors}
            style={styles.container}
        >
            <View style={styles.upper}>
                <Ionicons color="white" name={weatherCases[weatherName].icon} size={150} />
                <Text style={styles.temperature}>{temperature}°</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    )
}

Weather.prototype = {
    temperature: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
}

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    temperature: {
        fontSize: 40,
        color: 'white',
        marginTop: 10,
        justifyContent: 'flex-end',
        paddingLeft: 25
    },
    title: {
        fontSize: 35,
        color: 'white',
        fontWeight: "100"
    },
    subtitle: {
        fontSize: 20,
        color: 'white',
        marginBottom: 40
    }
});
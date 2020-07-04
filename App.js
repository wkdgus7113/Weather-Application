import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, StatusBar } from 'react-native';
import Weather from "./Weather";

const API_KEY = "f53577e465f9dcccb0dde804f6cafe8a";

export default class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.getWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error:error
        });
      }
    );
  }

  getWeather = (lat, long) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        temperature: json.main.temp,
        name: json.weather[0].main,
        isLoaded: true
      });
    })
  }
  
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {this.state.isLoaded ? (
            <Weather
              weatherName="Haze"
              temperature={Math.floor(this.state.temperature - 273.15)}
            />
          ) : (
            <View style={styles.loading}>
              <ActivityIndicator size={50}/>
              <Text style={styles.loadingText}>Information Loading...</Text>
              {this.state.error ? <Text style={styles.errorText}>{this.state.error}</Text> : null}
            </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loading: {
    flex:1,
    backgroundColor:'#FDF6AA',
    justifyContent:'center',  //y축 중앙 정렬
    alignItems: 'center'      //x축 중앙 정렬
  },
  loadingText: {
    fontSize: 20,
    paddingTop: 50
  },
  errorText: {
    color: 'red',
    paddingTop: 20
  }
});

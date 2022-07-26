import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Header, Left, Right } from 'native-base';
const logo = require('../assets/logo.png');
import * as Location from 'expo-location';
import axios from 'axios';

export default function HeadPage({}) {
  console.disableYellowBox = true;
  const [weather, setWeather] = useState({
    temp: '0',
    condition: '',
  });
  const [ready, setReady] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      getLocation();
      setReady(false);
    }, 1000);
  }, []);

  const getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const locationData = await Location.getCurrentPositionAsync();
      const latitude = locationData['coords']['latitude'];
      const longitude = locationData['coords']['longitude'];
      const API_KEY = 'cfc258c75e1da2149c33daffd07a911d';
      const result = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );

      const temp = result.data.main.temp;
      const condition = result.data.weather[0].main;

      console.log(temp);
      console.log(condition);

      setWeather({
        temp,
        condition,
      });
    } catch (error) {
      Alert.alert('위치를 찾을 수가 없습니다.', '앱을 껏다 켜볼까요?');
    }
  };
  return (
    <Header style={styles.header}>
      <Left>
        <Image source={logo} style={styles.logoImage} />
      </Left>
      <Right>
        <Text style={styles.weather}>
          오늘의 날씨: {weather.temp + '°C   ' + weather.condition}{' '}
        </Text>
      </Right>
    </Header>
  );
}

const styles = StyleSheet.create({
  logoImage: { width: 100, resizeMode: 'contain', marginLeft: 10 },
  weather: {
    alignSelf: 'flex-end',
    paddingRight: 20,
  },
  header: {
    backgroundColor: 'white',
  },
  condition: {
    width: '90%',
    height: 200,
    marginTop: 20,
  },
  box: {
    width: '90%',
    height: 150,
    marginLeft: 13,
    marginRight: 13,
    padding: 20,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: 'pink',
    fontSize: 20,
  },
  listContainer: {
    borderWidth: 1,
    marginTop: 10,
    height: 300,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    borderColor: 'pink',
  },
  textst: {
    fontSize: 15,
    color: 'grey',
    marginLeft: 10,
    marginBottom: 3,
  },
});

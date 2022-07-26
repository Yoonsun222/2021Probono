import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {
  Container,
  Header,
  Content,
  Left,
  Icon,
  Form,
  Right,
  Button,
  Item,
} from 'native-base';
const logo = require('../assets/logo.png');
import * as Location from 'expo-location';
import axios from 'axios';
import TodoList from '../List/TodoList.jsx';
import HeadPage from './HeadPage';

export default function MainPage({ navigation }) {
  console.disableYellowBox = true;

  return (
    <Container style={{ backgroundColor: '#f2f2f2' }}>
      <HeadPage></HeadPage>
      <View
        style={{
          borderWidth: 2,
          borderRadius: 5,
          borderColor: 'pink',
          backgroundColor: 'white',
          width: '50%',
          marginTop: 5,
          alignSelf: 'center',
        }}
      >
        <Text style={{ fontSize: 30, alignSelf: 'center', color: 'grey' }}>
          어제 상태
        </Text>
      </View>
      <Content>
        <View
          style={{
            borderWidth: 1,
            borderColor: 'pink',
            marginLeft: 18,
            marginRight: 18,
            margin: 10,
            backgroundColor: 'white',
            borderRadius: 15,
            height: 260,
          }}
        >
          <Grid style={{ marginTop: 10 }}>
            <Left>
              <Text style={styles.textst}> 위험</Text>
              <View style={styles.box}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('No6');
                  }}
                >
                  <Text style={{ color: 'black', fontSize: 25, margin: 2 }}>
                    임노인 님
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    marginLeft: 5,
                    borderWidth: 1,
                    width: '90%',
                    borderColor: '#919191',
                  }}
                />
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('No10');
                  }}
                >
                  <Text style={{ color: 'black', fontSize: 25, margin: 4 }}>
                    차노인 님
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    marginLeft: 5,
                    borderWidth: 1,
                    width: '90%',
                    borderColor: '#919191',
                  }}
                />
              </View>
            </Left>
            <View
              style={{
                flexDirection: 'row',
                height: '99%',
                borderWidth: 0.5,
                borderColor: 'pink',
              }}
            />
            <Right>
              <Text
                style={
                  (styles.textst,
                  {
                    fontSize: 30,
                    marginBottom: 3,
                    color: 'grey',
                    marginRight: 100,
                  })
                }
              >
                주의
              </Text>
              <View style={styles.box}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('No2');
                  }}
                >
                  <Text style={{ color: 'black', fontSize: 25, margin: 4 }}>
                    나노인 님
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    marginLeft: 5,
                    borderWidth: 1,
                    width: '90%',
                    borderColor: '#919191',
                  }}
                />
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('No3');
                  }}
                >
                  <Text style={{ color: 'black', fontSize: 25, margin: 4 }}>
                    다노인 님
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    marginLeft: 5,
                    borderWidth: 1,
                    width: '90%',
                    borderColor: '#919191',
                  }}
                />
              </View>
            </Right>
          </Grid>
        </View>
      </Content>
      <View style={styles.listContainer}>
        <TodoList />
      </View>
    </Container>
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
    height: 200,
    marginLeft: 13,
    marginRight: 13,
    padding: 1,
    fontSize: 20,
    backgroundColor: 'white',
  },
  listContainer: {
    borderWidth: 1,
    marginTop: 1,
    marginBottom: 7,
    height: '40%',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    borderColor: 'pink',
  },
  textst: {
    fontSize: 30,
    color: 'gray',
    marginLeft: 5,
    marginBottom: 3,
  },
});

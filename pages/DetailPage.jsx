import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Picker,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

import {
  Container,
  Content,
  Text,
  Button,
  Item,
  Input,
  Icon,
  Form,
  Textarea,
  Left,
  Right,
} from 'native-base';

import * as firebase from 'firebase';
import 'firebase/firestore';
import HeadPage from './HeadPage';

const senior_photo = require('../assets/detail1.jpg');

export default function DetailPage({ navigation }) {
  console.disableYellowBox = true;
  const [data, setData] = useState([]);
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedValue1, setSelectedValue1] = useState('');
  const [selectedValue2, setSelectedValue2] = useState('');
  useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
    });
    readyData();
  }, []);
  const readyData = async () => {
    const data = await getData();
    setData(data);
  };

  console.log(data);

  return (
    <View>
      <HeadPage />
      <View style={{ marginTop: 10 }}>
        <Text style={{ color: 'gray', marginLeft: 10, fontSize: 30 }}>
          중점 관리 어르신
        </Text>
        <ScrollView
          style={{
            width: '95%',
            height: '30%',
            marginLeft: 8,
            marginTop: 5,
            borderWidth: 1,
            marginRight: 5,
            borderColor: 'pink',
            borderWidth: 2,
            borderRadius: 10,
            backgroundColor: 'white',
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('No1');
            }}
          >
            <Text style={{ color: 'black', fontSize: 25, margin: 4 }}>
              가노인 님
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('No5');
            }}
          >
            <View
              style={{
                marginLeft: 5,
                borderWidth: 1,
                width: '90%',
                borderColor: '#919191',
              }}
            />
            <Text style={{ color: 'black', fontSize: 25, margin: 4 }}>
              마노인 님
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('No11');
            }}
          >
            <View
              style={{
                marginLeft: 5,
                borderWidth: 1,
                width: '90%',
                borderColor: '#919191',
              }}
            />
            <Text style={{ color: 'black', fontSize: 25, margin: 4 }}>
              김노인 님
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
        </ScrollView>
      </View>
      <Grid style={{ marginTop: 15 }}>
        <Left>
          <Text style={{ color: 'gray', marginLeft: 10, fontSize: 30 }}>
            일반 관리 어르신
          </Text>
        </Left>
      </Grid>
      <View>
        <ScrollView
          style={{
            width: '95%',
            height: '40%',
            marginLeft: 8,
            marginTop: 5,
            borderWidth: 1,
            marginRight: 5,
            borderColor: 'pink',
            borderWidth: 2,
            borderRadius: 10,
            backgroundColor: 'white',
          }}
        >
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
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('No4');
            }}
          >
            <View
              style={{
                marginLeft: 5,
                borderWidth: 1,
                width: '90%',
                borderColor: '#919191',
              }}
            />
            <Text style={{ color: 'black', fontSize: 25, margin: 4 }}>
              라노인 님
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
              navigation.navigate('No7');
            }}
          >
            <Text style={{ color: 'black', fontSize: 25, margin: 2 }}>
              박노인 님
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
              navigation.navigate('No8');
            }}
          >
            <Text style={{ color: 'black', fontSize: 25, margin: 2 }}>
              이노인 님
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
              navigation.navigate('No9');
            }}
          >
            <Text style={{ color: 'black', fontSize: 25, margin: 4 }}>
              최노인 님
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
          <View
            style={{
              marginLeft: 5,
              borderWidth: 1,
              width: '90%',
              borderColor: '#919191',
            }}
          />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gotolist: {
    borderWidth: 1,
    borderColor: 'pink',
    width: '60%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
});

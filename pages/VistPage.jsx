import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Content, Text, Left, Right } from 'native-base';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { getData } from '../config/firebaseFunctions';
const senior_photo = require('../assets/detail1.jpg');
import List from '../pages/List';
const data = require('../data.json');

export default function VisitPage({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {}, []);
  const readyData = async () => {
    const data = await getData();
    setData(data);
  };

  console.log(data);

  return (
    <View>
      <ScrollView
        style={{
          marginLeft: 5,
          marginTop: 5,
          borderWidth: 1,
          marginRight: 5,
          borderColor: 'pink',
          borderWidth: 2,
          borderRadius: 10,
          backgroundColor: 'white',
        }}
      >
        <View style={{ marginTop: -20 }}>{data.title}</View>
      </ScrollView>
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

import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, ScrollView } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

import { Text, Left, Right } from 'native-base';

import * as firebase from 'firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import 'firebase/firestore';
/////
// import 'firebase/database';
///import { getOld } from '../config/firebaseFunctions';

////////
// const senior_photo = require('../assets/detail1.jpg');

export default function No1_detail({ navigation }) {
  console.disableYellowBox = true;
  const [data, setData] = useState([]);
  ///
  let today = new Date();
  //오늘 날짜
  let year = today.getFullYear();
  //올 해
  let month = today.getMonth();
  //이번 달
  let YM = year + '년' + (month + 1) + '월';
  // JS는 0~11월로 표시해서 +1을 해준다. (달력의 월을 표시해주기 위함)
  let first_date = new Date(year, month, 1).getDate();
  // 이번달 첫째날 구하기
  let last_date = new Date(year, month + 1, 0).getDate();
  // 이번달 마지막날 구하기 (다음달의 0번째 일은 이번달의 마지막날과 같다.)
  let first_day =
    (new Date(year, month, 1).getDay() + 35 - today.getDate()) % 7;
  // 1일의 요일의 값 구하기(js는 요일을 숫자로 돌려준다.)
  let i = 1;
  for (first_date; first_date <= last_date; first_date++) {
    let dd = 'n' + (first_day + first_date - 1);
    // document.getElementById('dd').textContent = i;
    i++;
  }

  ///
  ///
  // document.querySelector('#name').textContent = '나';
  ///
  return (
    <ScrollView>
      <View
        style={{
          color: 'gray',
          backgroundColor: 'white',
          borderColor: 'pink',
          borderWidth: 2,
          borderRadius: 5,
          width: '50%',
          marginTop: 10,
          marginLeft: 5,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            color: 'gray',
            marginLeft: 6,
          }}
        >
          가노인 님
        </Text>
      </View>
      <View style={styles.container}>
        <Row style={styles.cell2}>
          <Left>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('No1_detail9');
              }}
            >
              <Text> ◀ </Text>
            </TouchableOpacity>
          </Left>
          <Text style={{ fontSize: 17 }}>2021년10월</Text>
          <Right>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('No1_detail');
              }}
            >
              <Text> ▶ </Text>
            </TouchableOpacity>
          </Right>
        </Row>
        <Grid style={{ marginTop: 10 }}>
          <Col size={18}>
            <Row style={styles.cell}>
              <Text id="name" style={{ fontSize: 12 }}></Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 12, color: 'red' }}>
                3{'\n'}
                {'\n'}
                <Text style={{ fontSize: 12 }}>
                  전기 : 6{'\n'}
                  <Text style={{ fontSize: 12 }}>
                    전화 : 1{'\n'}
                    <Text style={{ fontSize: 12 }}>주의{'\n'}</Text>
                  </Text>
                </Text>
              </Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 12, color: 'red' }}>
                10{'\n'}
                {'\n'}
                <Text style={{ fontSize: 12 }}>
                  전기 : 5{'\n'}
                  <Text style={{ fontSize: 12 }}>
                    전화 : 1{'\n'}
                    <Text style={{ fontSize: 12 }}>주의{'\n'}</Text>
                  </Text>
                </Text>
              </Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 12, color: 'red' }}>
                17{'\n'}
                {'\n'}
                <Text style={{ fontSize: 12 }}>
                  전기 : {'\n'}
                  <Text style={{ fontSize: 12 }}>
                    전화 : {'\n'}
                    <Text style={{ fontSize: 12 }}>{'\n'}</Text>
                  </Text>
                </Text>
              </Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 12, color: 'red' }}>
                24{'\n'}
                {'\n'}
                <Text style={{ fontSize: 12 }}>
                  전기 : {'\n'}
                  <Text style={{ fontSize: 12 }}>
                    전화 : {'\n'}
                    <Text style={{ fontSize: 12 }}>{'\n'}</Text>
                  </Text>
                </Text>
              </Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 12, color: 'red' }}>
                31{'\n'}
                {'\n'}
                <Text style={{ fontSize: 12 }}>
                  전기 : {'\n'}
                  <Text style={{ fontSize: 12 }}>
                    전화 : {'\n'}
                    <Text style={{ fontSize: 12 }}>{'\n'}</Text>
                  </Text>
                </Text>
              </Text>
            </Row>
          </Col>
          <Col size={18}>
            <Row style={styles.cell}>
              <Text id="name" style={{ fontSize: 12 }}></Text>
            </Row>

            <Row style={styles.cell}>
              <Text style={{ fontSize: 12 }}>
                4{'\n'}
                {'\n'}
                <Text style={{ fontSize: 12 }}>
                  전기 : 0{'\n'}
                  <Text style={{ fontSize: 12 }}>
                    전화 : 0{'\n'}
                    <Text style={{ fontSize: 12 }}>위험{'\n'}</Text>
                  </Text>
                </Text>
              </Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 12 }}>
                11{'\n'}
                {'\n'}
                <Text style={{ fontSize: 12 }}>
                  전기 : 0{'\n'}
                  <Text style={{ fontSize: 12 }}>
                    전화 : 1{'\n'}
                    <Text style={{ fontSize: 12 }}>주의{'\n'}</Text>
                  </Text>
                </Text>
              </Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 12 }}>
                18{'\n'}
                {'\n'}
                <Text style={{ fontSize: 12 }}>
                  전기 : {'\n'}
                  <Text style={{ fontSize: 12 }}>
                    전화 : {'\n'}
                    <Text style={{ fontSize: 12 }}>{'\n'}</Text>
                  </Text>
                </Text>
              </Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 12 }}>
                25{'\n'}
                {'\n'}
                <Text style={{ fontSize: 12 }}>
                  전기 : {'\n'}
                  <Text style={{ fontSize: 12 }}>
                    전화 : {'\n'}
                    <Text style={{ fontSize: 12 }}>{'\n'}</Text>
                  </Text>
                </Text>
              </Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 12 }}></Text>
            </Row>
          </Col>
          <Col size={18}>
            <Row style={styles.cell}>
              <Text id="name" style={{ fontSize: 12 }}></Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 12 }}>
                5{'\n'}
                {'\n'}
                <Text style={{ fontSize: 12 }}>
                  전기 : 4{'\n'}
                  <Text style={{ fontSize: 12 }}>
                    전화 : 2{'\n'}
                    <Text style={{ fontSize: 12 }}>양호{'\n'}</Text>
                  </Text>
                </Text>
              </Text>
            </Row>

            <Row style={styles.cell}>
              <Text style={{ fontSize: 12 }}>
                12{'\n'}
                {'\n'}
                <Text style={{ fontSize: 12 }}>
                  전기 : 2{'\n'}
                  <Text style={{ fontSize: 12 }}>
                    전화 : 1{'\n'}
                    <Text style={{ fontSize: 12 }}>주의{'\n'}</Text>
                  </Text>
                </Text>
              </Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 12 }}>
                19{'\n'}
                {'\n'}
                <Text style={{ fontSize: 12 }}>
                  전기 : {'\n'}
                  <Text style={{ fontSize: 12 }}>
                    전화 : {'\n'}
                    <Text style={{ fontSize: 12 }}>{'\n'}</Text>
                  </Text>
                </Text>
              </Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 12 }}>
                26{'\n'}
                {'\n'}
                <Text style={{ fontSize: 12 }}>
                  전기 : {'\n'}
                  <Text style={{ fontSize: 12 }}>
                    전화 : {'\n'}
                    <Text style={{ fontSize: 12 }}>{'\n'}</Text>
                  </Text>
                </Text>
              </Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 12 }}></Text>
            </Row>
          </Col>
          <Col size={18}>
            <Row style={styles.cell}>
              <Text id="name" style={{ fontSize: 12 }}></Text>
            </Row>

            <Row style={styles.cell}>
              <Text style={{ fontSize: 12 }}>
                6{'\n'}
                {'\n'}
                <Text style={{ fontSize: 12 }}>
                  전기 : 0{'\n'}
                  <Text style={{ fontSize: 12 }}>
                    전화 : 0{'\n'}
                    <Text style={{ fontSize: 12 }}>위험{'\n'}</Text>
                  </Text>
                </Text>
              </Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 12 }}>
                12{'\n'}
                {'\n'}
                <Text style={{ fontSize: 12 }}>
                  전기 : 4{'\n'}
                  <Text style={{ fontSize: 12 }}>
                    전화 : 4{'\n'}
                    <Text style={{ fontSize: 12 }}>양호{'\n'}</Text>
                  </Text>
                </Text>
              </Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 12 }}>
                20{'\n'}
                {'\n'}
                <Text style={{ fontSize: 12 }}>
                  전기 : {'\n'}
                  <Text style={{ fontSize: 12 }}>
                    전화 : {'\n'}
                    <Text style={{ fontSize: 12 }}>{'\n'}</Text>
                  </Text>
                </Text>
              </Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 12 }}>
                27{'\n'}
                {'\n'}
                <Text style={{ fontSize: 12 }}>
                  전기 : {'\n'}
                  <Text style={{ fontSize: 12 }}>
                    전화 : {'\n'}
                    <Text style={{ fontSize: 12 }}>{'\n'}</Text>
                  </Text>
                </Text>
              </Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 12 }}></Text>
            </Row>
          </Col>
          <Col size={18}>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 12 }}></Text>
            </Row>

            <Row style={styles.cell}>
              <Text style={{ fontSize: 12 }}>
                7{'\n'}
                {'\n'}
                <Text style={{ fontSize: 12 }}>
                  전기 : 21{'\n'}
                  <Text style={{ fontSize: 12 }}>
                    전화 : 1{'\n'}
                    <Text style={{ fontSize: 12 }}>양호{'\n'}</Text>
                  </Text>
                </Text>
              </Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 12 }}>
                14{'\n'}
                {'\n'}
                <Text style={{ fontSize: 12 }}>
                  전기 : 9{'\n'}
                  <Text style={{ fontSize: 12 }}>
                    전화 : 1{'\n'}
                    <Text style={{ fontSize: 12 }}>주의{'\n'}</Text>
                  </Text>
                </Text>
              </Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 12 }}>
                21{'\n'}
                {'\n'}
                <Text style={{ fontSize: 12 }}>
                  전기 : {'\n'}
                  <Text style={{ fontSize: 12 }}>
                    전화 : {'\n'}
                    <Text style={{ fontSize: 12 }}>{'\n'}</Text>
                  </Text>
                </Text>
              </Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 12 }}>
                28{'\n'}
                {'\n'}
                <Text style={{ fontSize: 12 }}>
                  전기 : {'\n'}
                  <Text style={{ fontSize: 12 }}>
                    전화 : {'\n'}
                    <Text style={{ fontSize: 12 }}>{'\n'}</Text>
                  </Text>
                </Text>
              </Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 12 }}></Text>
            </Row>
          </Col>
          <Col size={18}>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 12 }}>
                1{'\n'}
                {'\n'}
                <Text style={{ fontSize: 12 }}>
                  전기 : 4{'\n'}
                  <Text style={{ fontSize: 12 }}>
                    전화 : 1{'\n'}
                    <Text style={{ fontSize: 12 }}>양호{'\n'}</Text>
                  </Text>
                </Text>
              </Text>
            </Row>

            <Row style={styles.cell}>
              <Text style={{ fontSize: 12 }}>
                8{'\n'}
                {'\n'}
                <Text style={{ fontSize: 12 }}>
                  전기 : 8{'\n'}
                  <Text style={{ fontSize: 12 }}>
                    전화 : 2{'\n'}
                    <Text style={{ fontSize: 12 }}>양호{'\n'}</Text>
                  </Text>
                </Text>
              </Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 12 }}>
                15{'\n'}
                {'\n'}
                <Text style={{ fontSize: 12 }}>
                  전기 : 6{'\n'}
                  <Text style={{ fontSize: 12 }}>
                    전화 : 4{'\n'}
                    <Text style={{ fontSize: 12 }}>양호{'\n'}</Text>
                  </Text>
                </Text>
              </Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 12 }}>
                22{'\n'}
                {'\n'}
                <Text style={{ fontSize: 12 }}>
                  전기 : {'\n'}
                  <Text style={{ fontSize: 12 }}>
                    전화 : {'\n'}
                    <Text style={{ fontSize: 12 }}>{'\n'}</Text>
                  </Text>
                </Text>
              </Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 12 }}>
                29{'\n'}
                {'\n'}
                <Text style={{ fontSize: 12 }}>
                  전기 : {'\n'}
                  <Text style={{ fontSize: 12 }}>
                    전화 : {'\n'}
                    <Text style={{ fontSize: 12 }}>{'\n'}</Text>
                  </Text>
                </Text>
              </Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 12 }}></Text>
            </Row>
          </Col>

          <Col size={18}>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 12, color: 'blue' }}>
                2{'\n'}
                {'\n'}
                <Text style={{ fontSize: 12 }}>
                  전기 : 8{'\n'}
                  <Text style={{ fontSize: 12 }}>
                    전화 : 2{'\n'}
                    <Text style={{ fontSize: 12 }}>양호{'\n'}</Text>
                  </Text>
                </Text>
              </Text>
            </Row>

            <Row style={styles.cell}>
              <Text style={{ fontSize: 12, color: 'blue' }}>
                9{'\n'}
                {'\n'}
                <Text style={{ fontSize: 12 }}>
                  전기 : 5{'\n'}
                  <Text style={{ fontSize: 12 }}>
                    전화 : 4{'\n'}
                    <Text style={{ fontSize: 12 }}>양호{'\n'}</Text>
                  </Text>
                </Text>
              </Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 12, color: 'blue' }}>
                16{'\n'}
                {'\n'}
                <Text style={{ fontSize: 12 }}>
                  전기 : 4{'\n'}
                  <Text style={{ fontSize: 12 }}>
                    전화 : 3{'\n'}
                    <Text style={{ fontSize: 12 }}>양호{'\n'}</Text>
                  </Text>
                </Text>
              </Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 12, color: 'blue' }}>
                23{'\n'}
                {'\n'}
                <Text style={{ fontSize: 12 }}>
                  전기 : {'\n'}
                  <Text style={{ fontSize: 12 }}>
                    전화 : {'\n'}
                    <Text style={{ fontSize: 12 }}>{'\n'}</Text>
                  </Text>
                </Text>
              </Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 12, color: 'blue' }}>
                30{'\n'}
                {'\n'}
                <Text style={{ fontSize: 12 }}>
                  전기 : {'\n'}
                  <Text style={{ fontSize: 12 }}>
                    전화 : {'\n'}
                    <Text style={{ fontSize: 12 }}>{'\n'}</Text>
                  </Text>
                </Text>
              </Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 12 }}></Text>
            </Row>
          </Col>
        </Grid>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: '97%',
    height: 750,
    padding: 1,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    resizeMode: 'contain',
    borderColor: 'pink',
  },
  cell2: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    height: 50,
    width: '97%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  cell: {
    borderWidth: 1,
    borderColor: '#ddd',
    height: 110,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  suntext: {
    color: 'red',
    fontSize: 10,
  },
  image: {
    marginTop: 10,
    width: '50%',
    height: '40%',
    resizeMode: 'contain',
    borderWidth: 1,
    alignSelf: 'center',
  },

  cellSub: {
    borderWidth: 1,
    borderColor: '#ddd',
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

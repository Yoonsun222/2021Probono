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

import VisitPage from '../pages/VistPage';
import Condition from '../pages/Condition';

const senior_photo = require('../assets/detail1.jpg');

export default function No9({ navigation }) {
  console.disableYellowBox = true;
  const [data, setData] = useState([]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={senior_photo} style={styles.image} />
        <Grid style={{ marginTop: 10 }}>
          <Col size={18}>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 15 }}>이름</Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 15 }}>구분</Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 15 }}>성별</Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 15 }}>생년월일</Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 15 }}>휴대전화</Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 15 }}>주소</Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 15 }}>자택전화</Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 15 }}>비상연락처1</Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 15 }}>비상연락처2</Text>
            </Row>
          </Col>
          <Col size={45}>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 15 }}> 최노인</Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 15 }}>중점관리</Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 15 }}>남</Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 15 }}>1939.09.09</Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 15 }}>010-0009-0009</Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 15 }}>
                인천광역시 연수구 컨벤시아대로
              </Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 15 }}>-</Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 15 }}>010-0000-0009</Text>
            </Row>
            <Row style={styles.cell}>
              <Text style={{ fontSize: 15 }}>-</Text>
            </Row>
          </Col>
        </Grid>
      </View>
      <View style={{ marginTop: 15 }}>
        <Grid>
          <Left>
            <Text style={{ color: 'black', marginLeft: 10, fontSize: 20 }}>
              상태확인
            </Text>
          </Left>
          <Right>
            <TouchableOpacity
              style={styles.gotolist}
              onPress={() => {
                navigation.navigate('No1_detail');
              }}
            >
              <Text style={{ color: 'black', fontSize: 15 }}>더보기</Text>
            </TouchableOpacity>
          </Right>
        </Grid>
      </View>

      <Condition />
      <Grid style={{ marginTop: 15 }}>
        <Left>
          <Text style={{ color: 'black', marginLeft: 10, fontSize: 20 }}>
            방문일지
          </Text>
        </Left>
        <Right>
          <TouchableOpacity
            style={styles.gotolist}
            onPress={() => {
              navigation.navigate('VistedPage');
            }}
          >
            <Text style={{ color: 'black', fontSize: 15 }}>방문일지 작성</Text>
          </TouchableOpacity>
        </Right>
      </Grid>
      <VisitPage />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    width: '97%',
    height: 400,
    padding: 1,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    resizeMode: 'contain',
    borderColor: 'pink',
  },
  cell: {
    borderWidth: 1,
    borderColor: '#ddd',
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
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

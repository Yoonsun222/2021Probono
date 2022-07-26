import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

import { Text, Left, Right } from 'native-base';

import * as firebase from 'firebase';
import 'firebase/firestore';

export default function Codition({}) {
  console.disableYellowBox = true;

  return (
    <View style={styles.container}>
      <Grid style={{ marginTop: 10 }}>
        <Col size={10}>
          <Row style={styles.cell}>
            <Text style={{ fontSize: 15 }}></Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={{ fontSize: 15 }}>전화건수</Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={{ fontSize: 15 }}>전기변동량</Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={{ fontSize: 15 }}>상태</Text>
          </Row>
        </Col>
        <Col size={10}>
          <Row style={styles.cell}>
            <Text style={{ fontSize: 15 }}> 2일전</Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={{ fontSize: 15 }}></Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={{ fontSize: 15 }}></Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={{ fontSize: 15 }}></Text>
          </Row>
        </Col>
        <Col size={10}>
          <Row style={styles.cell}>
            <Text style={{ fontSize: 15 }}> 1일전</Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={{ fontSize: 15 }}></Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={{ fontSize: 15 }}></Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={{ fontSize: 15 }}></Text>
          </Row>
        </Col>
        <Col size={10}>
          <Row style={styles.cell}>
            <Text style={{ fontSize: 15 }}> 오늘</Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={{ fontSize: 15 }}></Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={{ fontSize: 15 }}></Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={{ fontSize: 15 }}></Text>
          </Row>
        </Col>
      </Grid>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    width: '97%',
    height: 100,
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

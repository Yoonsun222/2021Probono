import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default function Table() {
  return (
    <View style={styles.container}>
      <Grid>
        <Col size={27}>
          <Row style={styles.cell}>
            <Text>이름</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>휴대전화</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>비상연락처1</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>주소</Text>
          </Row>
        </Col>
        <Col size={45}>
        <Row style={styles.cell}>
            <Text>홍길동</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>010-1234-5678</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>010-5678-1234</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>작전동</Text>
          </Row>
        </Col>
        <Col size={27}>
        <Row style={styles.cell}>
            <Text>성별</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>자택전화</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>비상연락처2</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>4</Text>
          </Row>
        </Col>
        <Col size={45}>
        <Row style={styles.cell}>
            <Text>남</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>032-xxx-xxxx</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>010-xxxx-xxxx</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>8</Text>
          </Row>
        </Col>
      </Grid>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 150,
    padding: 16,
    paddingBottom: 10,
    backgroundColor: '#fff',
    // borderWidth:1,
  },
  cell: {
    borderWidth: 1,
    borderColor: '#ddd',
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  },
});
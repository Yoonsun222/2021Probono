import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default function MyHomeTable1() {
  return (
    <View style={styles.container}>
      <Grid>
        <Col size={35}>
          <Row style={styles.cell}>
            <Text style={{ fontSize: 13 }}>이름</Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={{ fontSize: 13 }}>생년월일</Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={{ fontSize: 13 }}>비상연락처1</Text>
          </Row>
        </Col>
        <Col size={45}>
          <Row style={styles.cell}>
            <Text style={{ fontSize: 12 }}>독일인</Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={{ fontSize: 12 }}>1990.01.01</Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={{ fontSize: 12 }}>010-5678-1234</Text>
          </Row>
        </Col>
        <Col size={40}>
          <Row style={styles.cell}>
            <Text style={{ fontSize: 13 }}>성별</Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={{ fontSize: 13 }}>휴대전화</Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={{ fontSize: 13 }}>비상연락처2</Text>
          </Row>
        </Col>
        <Col size={45}>
          <Row style={styles.cell}>
            <Text style={{ fontSize: 12 }}>여</Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={{ fontSize: 12 }}>010-1234-5678</Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={{ fontSize: 12 }}>010-xxxx-xxxx</Text>
          </Row>
        </Col>
      </Grid>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 150,
    paddingBottom: 10,
    backgroundColor: '#fff',
    // borderWidth:1,
  },
  cell: {
    borderWidth: 1,
    borderColor: '#ddd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

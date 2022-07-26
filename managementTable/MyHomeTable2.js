import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default function MyHomeTable2() {
  return (
    <View style={styles.container}>
      <Grid>
        <Col size={10}>
          <Row style={styles.cellSub}>
            <Text style={{ fontSize: 13 }}>주소</Text>
          </Row>
          <Row style={styles.cellSub}>
            <Text style={{ fontSize: 13 }}>이메일</Text>
          </Row>
        </Col>
        <Col size={30}>
          <Row style={styles.cellSub}>
            <Text style={{ fontSize: 13 }}>
              인천광역시 연수구 아카데미로 119
            </Text>
          </Row>
          <Row style={styles.cellSub}>
            <Text style={{ fontSize: 13 }}>German@inu.ac.kr</Text>
          </Row>
        </Col>
      </Grid>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: 80,
    backgroundColor: '#fff',
    // borderWidth:1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
  },

  cellMain: {
    borderWidth: 1,
    borderColor: '#ddd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#808080',
  },

  cellSub: {
    borderWidth: 1,
    borderColor: '#ddd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

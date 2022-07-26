import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default function Table2() {
  return (
    <View style={styles.container}>
      <Grid>
        <Col size={30}>
          <Row style={styles.cellMain}>
            <Text>현재 상태</Text>
          </Row>
          <Row style={styles.cellSub}>
            <Text>양호</Text>
          </Row>
        </Col>
        <Col size={30}>
        <Row style={styles.cellMain}>
            <Text>전화</Text>
          </Row>
          <Row style={styles.cellSub}>
            <Text></Text>
          </Row>
        </Col>
        <Col size={30}>
        <Row style={styles.cellMain}>
            <Text>전력</Text>
          </Row>
          <Row style={styles.cellSub}>
            <Text></Text>
          </Row>
        </Col>
      </Grid>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '96%',
    height: 80,
    backgroundColor: '#fff',
    // borderWidth:1,
    marginLeft:5,
    marginRight:5
  },
  
  cellMain:{
    borderWidth: 1,
    borderColor: '#ddd',
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#808080"
  },

  cellSub: {
    borderWidth: 1,
    borderColor: '#ddd',
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  },
});
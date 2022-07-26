import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default function VisitLogTable() {
    return (
      <View style={styles.container}>
        <Grid>
          <Col size={30}>
            <Row style={styles.cellMain}>
              <Text>방문 날짜</Text>
            </Row>
            <Row style={styles.cellSub}>
              {/* <Text>양호</Text> */}
            </Row>
            <Row style={styles.cellSub}>
              {/* <Text>양호</Text> */}
            </Row>
            <Row style={styles.cellSub}>
              {/* <Text>양호</Text> */}
            </Row>
          </Col>
          <Col size={30}>
          <Row style={styles.cellMain}>
              <Text>방문 일지</Text>
            </Row>
            <Row style={styles.cellSub}>
              {/* <Text></Text> */}
            </Row>
            <Row style={styles.cellSub}>
              {/* <Text>양호</Text> */}
            </Row>
            <Row style={styles.cellSub}>
              {/* <Text>양호</Text> */}
            </Row>
          </Col>
        </Grid>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      width: '96%',
      height: 120,
      backgroundColor: '#fff',
      // borderWidth:1,
      marginLeft:5,
      marginRight:5,
      marginTop:10
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
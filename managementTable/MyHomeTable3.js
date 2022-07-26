import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default function MyHomeTable3() {
    return (
      <View style={styles.container}>
        <Grid>
          <Col size={15}>
            <Row style={styles.cellMain}>
              <Text>월</Text>
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
          <Col size={15}>
          <Row style={styles.cellMain}>
              <Text>화</Text>
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
         <Col size={15}>
          <Row style={styles.cellMain}>
              <Text>수</Text>
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
         <Col size={15}>
          <Row style={styles.cellMain}>
              <Text>목</Text>
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
         <Col size={15}>
          <Row style={styles.cellMain}>
              <Text>금</Text>
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
        </Grid>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      width: '96%',
      height: 300,
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
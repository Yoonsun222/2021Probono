import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Right, Grid, Button } from 'native-base';
import MyHomeTable1 from '../managementTable/MyHomeTable1';
import MyHomeTable2 from '../managementTable/MyHomeTable2';
import MyHomeTable3 from '../managementTable/MyHomeTable3';
import HeadPage from './HeadPage';

const photo = require('../assets/mypage.jpg');

export default function myHome({ navigation, route }) {
  console.disableYellowBox = true;
  //return 구문 밖에서는 슬래시 두개 방식으로 주석

  useEffect(() => {
    navigation.setOptions({
      title: '내 정보',
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <HeadPage></HeadPage>
      <View style={styles.container1}>
        <Image source={photo} style={styles.image} />
        <View style={styles.mainContainer}>
          <MyHomeTable1 />
        </View>
        <View>
          <MyHomeTable2 />
        </View>
      </View>
      <Grid>
        <Right>
          <Button style={styles.trinfo}>
            <Text
              style={{
                marginLeft: 5,
                fontSize: 15,
                color: 'white',
                alignSelf: 'center',
              }}
            >
              정보 변경 요청
            </Text>
          </Button>
          <Button style={styles.trinfo}>
            <Text
              style={{
                marginLeft: 20,
                fontSize: 15,
                color: 'white',
                textAlign: 'center',
              }}
            >
              로그아웃
            </Text>
          </Button>
        </Right>
      </Grid>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
  },
  container1: {
    backgroundColor: 'white',
    marginTop: 20,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFD8D8',
  },

  image: {
    marginTop: 20,
    width: '50%',
    resizeMode: 'contain',
    borderWidth: 1,
    alignSelf: 'center',
  },

  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    // borderWidth:1,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },

  humanImage: {
    width: 100,
    height: 140,
    resizeMode: 'contain',
    // borderWidth:1,
    marginTop: 15,
    marginLeft: 10,
  },
  trinfo: {
    textAlign: 'center',
    alignSelf: 'center',
    width: 100,
    height: 40,
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: '#FFB2D9',
  },
});

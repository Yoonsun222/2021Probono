import React, { useState, useEffect } from 'react';
import TodoList from '../List/TodoList.jsx';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  Container,
  Content,
  Button,
  Item,
  Input,
  Icon,
  Form,
  Textarea,
} from 'native-base';
import HeadPage from './HeadPage';
import CalendarPage from '../components/CalendarPage';

export default function SchedulePage({ navigation }) {
  console.disableYellowBox = true;
  useEffect(() => {
    navigation.setOptions({
      title: '스케줄',
      Headers: false,
    });
  }, []);

  return (
    <ScrollView style={styles.contianer}>
      <HeadPage></HeadPage>
      <View style={styles.forCalendar}>
        <TouchableOpacity
          style={styles.gotoCalendar}
          onPress={() => {
            navigation.navigate('CalendarPage');
          }}
        >
          <Text>달력 보기</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.listContainer}>
        <TodoList />
      </View>
      <View
        style={{
          borderWidth: 1,
          marginTop: 20,
          marginLeft: 20,
          marginRight: 20,
          height: 400,
        }}
      >
        <CalendarPage />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },

  bar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
    height: 50,
    alignItems: 'center',
    backgroundColor: 'pink',
  },

  text: {
    color: 'white',
    fontSize: 20,
  },

  testText: {
    alignSelf: 'center',
  },

  forCalendar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  listContainer: {
    borderWidth: 1,
    marginTop: 10,
    height: 300,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    borderColor: 'pink',
  },

  gotoCalendar: {
    borderWidth: 1,
    width: 70,
    height: 30,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginRight: 20,
  },
});

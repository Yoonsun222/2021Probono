import React, { useEffect } from 'react';

import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainPage from '../pages/MainPage';
import MyPage from '../pages/MyPage';
import SchedulePage from '../pages/SchedulePage';
import DetailPage from '../pages/DetailPage';
import { Ionicons, Entypo } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

const TabNavigator = ({ navigation, route }) => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          //현재 이 앱을 구동하고 있는 디바이스가 뭔지 Platform.OS 을 통해 확인 할 수 있음
          let iconName = Platform.OS === 'ios' ? 'ios-' : 'md-';

          if (route.name === 'MainPage') {
            iconName += 'home';
          } else if (route.name === 'DetailPage') {
            iconName += 'people';
          } else if (route.name === 'SchedulePage') {
            iconName += 'calendar';
          } else if (route.name === 'MyPage') {
            iconName += 'person';
          }
          return (
            <Ionicons
              name={iconName}
              color={focused ? 'hotpink' : 'grey'}
              size={26}
            />
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: '#fff',
          borderTopColor: '#eee',
          height: 40,
          fontSize: 10,
        },
        // activeTintColor: 'tomato',
        // inactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen
        name="MainPage"
        component={MainPage}
        options={{ headerShown: false }}
      />
      <Tabs.Screen
        name="DetailPage"
        component={DetailPage}
        options={{ headerShown: false }}
      />
      <Tabs.Screen
        name="SchedulePage"
        component={SchedulePage}
        options={{ headerShown: false }}
      />
      <Tabs.Screen
        name="MyPage"
        component={MyPage}
        options={{ headerShown: false }}
      />
    </Tabs.Navigator>
  );
};

export default TabNavigator;

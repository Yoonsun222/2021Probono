import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInPage from '../pages/SignInPage';
import TabNavigator from './TabNavigator';
import CalendarPage from '../components/CalendarPage';
import VistedPage from '../pages/VistedPage';
import List from '../pages/List';

import No1 from '../old/No1';
import No1_detail from '../old/No1_detail';

import No1_detail9 from '../old/No1_detail9';
import No2 from '../old/No2';
import No3 from '../old/No3';
import No4 from '../old/No4';
import No5 from '../old/No5';
import No6 from '../old/No6';
import No7 from '../old/No7';
import No8 from '../old/No8';
import No9 from '../old/No9';
import No10 from '../old/No10';
import No11 from '../old/No11';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignInPage" component={SignInPage} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />

      <Stack.Screen name="CalendarPage" component={CalendarPage} />
      <Stack.Screen name="VistedPage" component={VistedPage} />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="No1" component={No1} />
      <Stack.Screen name="No2" component={No2} />
      <Stack.Screen name="No3" component={No3} />
      <Stack.Screen name="No4" component={No4} />
      <Stack.Screen name="No5" component={No5} />
      <Stack.Screen name="No6" component={No6} />
      <Stack.Screen name="No7" component={No7} />
      <Stack.Screen name="No8" component={No8} />
      <Stack.Screen name="No9" component={No9} />
      <Stack.Screen name="No10" component={No10} />
      <Stack.Screen name="No11" component={No11} />
      <Stack.Screen name="No1_detail" component={No1_detail} />
      <Stack.Screen name="No1_detail9" component={No1_detail9} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

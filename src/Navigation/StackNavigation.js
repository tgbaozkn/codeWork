import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Jobs from '../Pages/Jobs';
import Detail from '../Pages/Detail';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        statusBarColor: '#EF5350',
        navigationBarColor: '#EF5350',
      }}>
      <Stack.Screen
        name="Jobs"
        component={Jobs}
        options={{headerTintColor: '#FF6C8B'}}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{headerTintColor: '#FF7D61'}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;

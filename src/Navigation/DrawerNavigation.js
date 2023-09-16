import React from 'react';
import FavoritedJobs from '../Pages/FavoritedJobs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './StackNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerTintColor: '#EF5350',
          drawerActiveTintColor: '#EF5350',
        }}>
        <Drawer.Screen
          name="Jobs"
          component={StackNavigation}
          options={{headerShown: false}}
        />
        <Drawer.Screen name="Favorited" component={FavoritedJobs} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;

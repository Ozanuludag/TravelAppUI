import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Details from './components/Details';
import Home from './components/Home';
import Liked from './components/Liked';
import Profile from './components/Profile';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import colors from './assets/colors/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Liked') {
            iconName = 'heart';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={32} color={color} />;
        },
      })}
      tabBarOptions={{
        style: styles.tabBar,
        activeTintColor: colors.orange,
        inactiveTintColor: colors.gray,
        showLabel: false,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Liked" component={Liked} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

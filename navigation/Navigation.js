import React from 'react';
import { Platform } from 'react-native';
import {  createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AddScreen from '../screens/AddScreen';
import AutocompleteScreen from '../components/Autocomplete'

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Search: AutocompleteScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
        ? 'ios-home'
        : 'md-home'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Expressions',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-book' : 'md-book'}
    />
  ),
};



const AddStack = createStackNavigator({
  Add: AddScreen,
});

AddStack.navigationOptions = {
  tabBarLabel: 'Ajout',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ?  `ios-add-circle${focused ? '' : '-outline'}`
          : 'md-add-circle'
        }
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'A propos',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ?  `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
        }
    />
  ),
};


export default createAppContainer (
     createBottomTabNavigator({
        HomeStack,
        LinksStack,
        AddStack,
        SettingsStack
      })
);

import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import AutocompleteScreen from '../screens/AutocompleteScreen'
import HomeScreen from '../screens/HomeScreen';
const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: HomeScreen
  },

  Autocomplete: {
    screen: AutocompleteScreen,
    navigationOptions: {
      title: 'Rechercher',
      headerShown: false
    }
  }
});



export default createAppContainer(SearchStackNavigator);

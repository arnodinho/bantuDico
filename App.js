import React from 'react';
import { Platform, StatusBar, StyleSheet, View} from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import MainNavigator from './navigation/Navigation';

import Store from './Store/Reducers/targetReducer'
import { Provider } from 'react-redux'


export default class App extends React.Component {
  //Provider. Ce component n'a qu'une seule et unique fonction, il distribue votre store à toute votre application

  render() {
      return (
        <MainNavigator />
      );
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

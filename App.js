import React from 'react';
import { Platform, StatusBar, StyleSheet, View} from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import MainNavigator from './navigation/Navigation';

import Store from './Store/configureStore'
import { Provider } from 'react-redux'


export default class App extends React.Component {
  //Provider. Ce component n'a qu'une seule et unique fonction, il distribue votre store à toute votre application
  render() {
      return (
        <Provider store={Store}>
            <MainNavigator />
       </Provider>

      );
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

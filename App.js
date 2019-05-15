import React from 'react';
import { Platform, StatusBar, StyleSheet, View} from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import MainNavigator from './navigation/Navigation';
export default class App extends React.Component {


  render() {

      return (
        <View style={styles.container}>
          <MainNavigator />
        </View>
      );
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

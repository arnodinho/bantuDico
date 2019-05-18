import React from 'react';
import { Platform, StatusBar, StyleSheet, View} from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import MainNavigator from './navigation/Navigation';
import { Provider } from 'react-redux';
import Store from './Store/configureStore';

export default class App extends React.Component {

  render() {

      return (
        //Provider: Ce component n'a qu'une seule et unique fonction, il distribue votre store à toute votre application.
      <Provider store={Store}>
            <View style={styles.container}>
              <MainNavigator />
            </View>
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

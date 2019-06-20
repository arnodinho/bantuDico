import React from 'react';
import { ScrollView, StyleSheet,Platform, View,Text} from 'react-native';
import StandardButton from '../components/StandardButton'
import Lingala from '../components/Lingala'
import Sango from '../components/Sango'
import Touchable from 'react-native-platform-touchable';
import { Ionicons } from '@expo/vector-icons';
export default class LinksScreen extends React.Component {
  // Lorsque l'on crée un component custom, on doit obligatoirement réimplémenter la méthode render
  // et retourner (return) les éléments graphiques
  constructor(props) {
        super(props)
        this.state = {
           lingala:true,
           sango:false
         }
  }

  static navigationOptions = {
    title: 'Expressions courantes',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.expressionsContainer}>
          <View style={styles.resulButtons}>
              <View style={{ flex:1, alignItems:'flex-end',marginRight:5 }} >
                  <StandardButton title="Sango"/>
              </View>
              <View style={{ flex:1, alignItems:'flex-start',marginLeft:5 }} >
                  <StandardButton title="Lingala"/>
              </View>
          </View>
          <View style={styles.resulLangage}>
              <View style={{ flex:1, alignItems:'center' }} >
                  <Text style={styles.tabBarInfoText}>Français</Text>
              </View>
              <View style={{ flex:1, alignItems:'center' }} >
                  <Text style={styles.tabBarInfoText}>Lingala</Text>
              </View>
          </View>

          <Sango/>

          </View>

      </ScrollView>
    );
  }
    _handlePressSlack = () => {
        WebBrowser.openBrowserAsync('https://slack.expo.io');
    };

    _handlePressDocs = () => {
        WebBrowser.openBrowserAsync('http://docs.expo.io');
    };

    _handlePressForums = () => {
        WebBrowser.openBrowserAsync('http://forums.expo.io');
    };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
      ...Platform.select({
          ios: {
              shadowColor: 'black',
              shadowOffset: { height: -3 },
              shadowOpacity: 0.1,
              shadowRadius: 3,
          },
          android: {
              elevation: 20,
          },
      }),

      backgroundColor: '#d0d6d2',
      borderColor: '#214c98',
      borderWidth: 7,
      marginLeft: 5,
      marginRight: 5,
      marginTop:15,
      marginBottom: 15,

  },
  expressionsContainer: {
    paddingBottom: 15,
    flex:1,
    marginBottom: 15,
  },
    resulLangage:{
        flex:1,
        flexDirection: 'row',
        marginBottom: 10,
    },
    resulButtons:{
        flex:1,
        flexDirection: 'row',
        marginBottom:10,
    },
    tabBarInfoText: {
        marginTop: 1,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 17,
        color: '#061646',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

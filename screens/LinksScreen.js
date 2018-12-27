import React from 'react';
import { ScrollView, StyleSheet,Platform, View,Text} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import StandardButton from '../components/StandardButton'

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Expressions courantes',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
          <View style={styles.resulButtons}>
              <View style={{ flex:1, alignItems:'flex-end',marginRight:5 }} >
                  <StandardButton/>
              </View>
              <View style={{ flex:1, alignItems:'flex-start',marginLeft:5 }} >
                  <StandardButton/>
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
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <ExpoLinksView />
      </ScrollView>
    );
  }
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
    resulLangage:{
        flex:1,
        flexDirection: 'row',
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

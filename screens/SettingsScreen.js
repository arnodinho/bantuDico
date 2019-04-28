import React from 'react';
import { ScrollView, StyleSheet,Platform, View,Text} from 'react-native';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'A propos',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
            <ScrollView style={styles.container}>
              <View style={styles.main}>
                  <Text style={styles.tabBarInfoText}>
                  Ce site est destiné à la promotion des langues Lingala et
                  Sango. Par cet outil,  nous souhaitons rendre  disponible à
                   tous et  gratuitement la connaissance de ces belles langues,
                   très souvent méconnues  auprès de la jeune  génération.
                 </Text>

                 <Text style={styles.tabBarInfoText}>
                    Nous souhaions de tout coeur que ce site contribuera à
                    la promotion des langues bantoues  et de lAfrique centrale.
                  </Text>
                </View>
                <View style={styles.credits}>
                  <Text style={styles.tabBarInfoTitle}>
                  Conception et realisation
                  </Text>
                  <Text style={styles.tabBarInfo}>
                  Arnaud YANGA ESSO
                  </Text>

                  <Text style={styles.tabBarInfoTitle}>
                  Contact
                  </Text>
                  <Text style={styles.tabBarInfo}>
                  bantu-dico@gmail.com
                  </Text>
              </View>
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
    tabBarInfoText: {
        marginTop: 1,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 20,
        color: '#061646',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    tabBarInfo: {
        marginTop: 1,
        fontSize: 20,
        color: '#061646',
        marginBottom: 9,
    },
    tabBarInfoTitle: {
        marginTop: 5,
        marginRight: 9,
        fontSize: 17,
        color: '#061646',
        fontWeight: 'bold',
    },
    main: {
        marginRight: 2,
        marginLeft:2,
        marginTop:20,
        marginBottom: 30,
    },
    credits: {
        marginLeft:2,
        marginTop:30,
    },
});

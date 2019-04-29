import React from 'react';
import { ScrollView, StyleSheet,Platform, View,Text} from 'react-native';
import StandardButton from '../components/StandardButton'
import Touchable from 'react-native-platform-touchable';
import { Ionicons } from '@expo/vector-icons';
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
          <View>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}

              <Touchable style={styles.option}>
                  <View style={{ flexDirection: 'row' }}>
                      <View style={styles.optionTextContainer}>
                      <Text style={styles.optionText}>
                          mbote
                      </Text>
                      </View>
                      <View style={styles.optionTextContainer}>
                          <Text style={styles.optionText}>
                              Bonjour
                          </Text>
                      </View>
                  </View>
              </Touchable>

              <Touchable style={styles.option}>
                  <View style={{ flexDirection: 'row' }}>
                      <View style={styles.optionTextContainer}>
                      <Text style={styles.optionText}>
                          boyei bolamu
                      </Text>
                      </View>
                      <View style={styles.optionTextContainer}>
                          <Text style={styles.optionText}>
                            bienvenue
                          </Text>
                      </View>
                  </View>
              </Touchable>

              <Touchable style={styles.option}>
                  <View style={{ flexDirection: 'row' }}>
                      <View style={styles.optionTextContainer}>
                      <Text style={styles.optionText}>
                        boni nzoto ?
                      </Text>
                      </View>
                      <View style={styles.optionTextContainer}>
                          <Text style={styles.optionText}>
                            comment ça va ?
                          </Text>
                      </View>
                  </View>
              </Touchable>
              <Touchable style={styles.option}>
                  <View style={{ flexDirection: 'row' }}>
                      <View style={styles.optionTextContainer}>
                      <Text style={styles.optionText}>
                      toyambi bapaya
                      </Text>
                      </View>
                      <View style={styles.optionTextContainer}>
                          <Text style={styles.optionText}>
                          nous avons de la visite
                          </Text>
                      </View>
                  </View>
              </Touchable>
              <Touchable style={styles.option}>
                  <View style={{ flexDirection: 'row' }}>
                      <View style={styles.optionTextContainer}>
                      <Text style={styles.optionText}>
                     ozali malamu?
                      </Text>
                      </View>
                      <View style={styles.optionTextContainer}>
                          <Text style={styles.optionText}>
                          tu vas bien?
                          </Text>
                      </View>
                  </View>
              </Touchable>
              <Touchable style={styles.option}>
                  <View style={{ flexDirection: 'row' }}>
                      <View style={styles.optionTextContainer}>
                      <Text style={styles.optionText}>
                    sango nini?
                      </Text>
                      </View>
                      <View style={styles.optionTextContainer}>
                          <Text style={styles.optionText}>
                         quelles sont les nouvelles?
                          </Text>
                      </View>
                  </View>
              </Touchable>
              <Touchable style={styles.option}>
                  <View style={{ flexDirection: 'row' }}>
                      <View style={styles.optionTextContainer}>
                      <Text style={styles.optionText}>
                  sango te!
                      </Text>
                      </View>
                      <View style={styles.optionTextContainer}>
                          <Text style={styles.optionText}>
                         pas de nouvelles ! /  ça va !
                          </Text>
                      </View>
                  </View>
              </Touchable>
              <Touchable style={styles.option}>
                  <View style={{ flexDirection: 'row' }}>
                      <View style={styles.optionTextContainer}>
                      <Text style={styles.optionText}>
                      naza(li) malamu
                      </Text>
                      </View>
                      <View style={styles.optionTextContainer}>
                          <Text style={styles.optionText}>
                        je vais bien
                          </Text>
                      </View>
                  </View>
              </Touchable>
              <Touchable
                  background={Touchable.Ripple('#ccc', false)}
                  style={styles.option}
                  onPress={this._handlePressSlack}>
                  <View style={{ flexDirection: 'row' }}>
                      <View style={styles.optionIconContainer}>
                          <Ionicons name="ios-chatboxes" size={22} color="#ccc" />
                      </View>
                      <View style={styles.optionTextContainer}>
                          <Text style={styles.optionText}>
                              Join us on Slack
                          </Text>
                      </View>
                  </View>
              </Touchable>

              <Touchable
                  style={styles.option}
                  onPress={this._handlePressForums}>
                  <View style={{ flexDirection: 'row' }}>
                      <View style={styles.optionIconContainer}>
                          <Ionicons name="ios-chatboxes" size={22} color="#ccc" />
                      </View>
                      <View style={styles.optionTextContainer}>
                          <Text style={styles.optionText}>
                              Ask a question on the Expo forums
                          </Text>
                      </View>
                  </View>
              </Touchable>
              <Touchable
                  style={styles.option}

                  onPress={this._handlePressForums}>
                  <View style={{ flexDirection: 'row' }}>
                      <View style={styles.optionIconContainer}>
                          <Ionicons name="ios-chatboxes" size={22} color="#ccc" />
                      </View>
                      <View style={styles.optionTextContainer}>
                          <Text style={styles.optionText}>
                              Ask a questsdio n on the Expo forums
                          </Text>
                      </View>
                  </View>
              </Touchable>


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
    optionsTitleText: {
        fontSize: 16,
        marginLeft: 15,
        marginTop: 9,
        marginBottom: 12,
    },
    optionIconContainer: {
        marginRight: 9,
    },
    optionTextContainer:{
       flex: 1,
       justifyContent: 'center',

    },
    option: {
        backgroundColor: '#fdfdfd',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderBottomWidth: 2,
        borderBottomColor: '#EDEDED',
    },
    optionText: {
        margin: 2,
        fontSize: 15,
        marginTop: 1,
        textAlign: 'center'
    },
});

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
              <Touchable
                  style={styles.option}
                  background={Touchable.Ripple('#ccc', false)}
                  onPress={this._handlePressDocs}>
                  <View style={{ flexDirection: 'row' }}>
                      <View style={styles.optionIconContainer}>
                          <Ionicons name="ios-chatboxes" size={22} color="#ccc" />
                      </View>
                      <View style={styles.optionTextContainer}>
                          <Text style={styles.optionText}>
                              Read the Expo documentation
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
                  background={Touchable.Ripple('#ccc', false)}
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
                  background={Touchable.Ripple('#ccc', false)}
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
                  background={Touchable.Ripple('#ccc', false)}
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
                  background={Touchable.Ripple('#ccc', false)}
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
                  background={Touchable.Ripple('#ccc', false)}
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
                  background={Touchable.Ripple('#ccc', false)}
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
                  background={Touchable.Ripple('#ccc', false)}
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
                  background={Touchable.Ripple('#ccc', false)}
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
                  background={Touchable.Ripple('#ccc', false)}
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
                  background={Touchable.Ripple('#ccc', false)}
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
                  background={Touchable.Ripple('#ccc', false)}
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
                  background={Touchable.Ripple('#ccc', false)}
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
                  background={Touchable.Ripple('#ccc', false)}
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
    option: {
        backgroundColor: '#fdfdfd',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#EDEDED',
    },
    optionText: {
        fontSize: 15,
        marginTop: 1,
    },
});

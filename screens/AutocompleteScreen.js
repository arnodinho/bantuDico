import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Platform,
  View,
  Text,
  Share,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  TextInput,
  Image} from 'react-native';
import ShareButton from '../components/ShareButton';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import RNPickerSelect from 'react-native-picker-select';
import Touchable from 'react-native-platform-touchable';


export default class AutocompleteScreen extends React.Component {
  static navigationOptions = {
    title: 'A propos',
  };

  _displayImageArrow(){
      sourceImage = require('../assets/images/double-24.png')
      return ( <Image   source={sourceImage}/>)
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <View style={styles.container}>
        <View style={styles.searchModuleContainer}>


            <View style={styles.containerSearch}>
              {/* onSubmitEditing : validation text par le clavier*/}

                <View style={{ flex:3 }} >
                    <TextInput style={styles.textinput}/>
                    <View style={styles.searchSelect}>
                        <View style={styles.searchItem}>
                          <RNPickerSelect
                            style={{
                                ...pickerSelectStyles,
                                iconContainer: {
                                  top: 12,
                                  right: 15,
                                  }
                                }}
                             placeholder={{ }}
                              onValueChange={(itemValue, itemIndex) => this.setState({source: itemValue})}
                              items={[
                                  { label: 'Français', value: 'french' },
                                  { label: 'Lingala', value: 'lingala' },
                                  { label: 'Sango', value: 'sango' },

                              ]}
                              Icon={() => {
                                  return <Ionicons name="ios-arrow-down" size={24} color="#061646" />;
                                }}
                            />
                        </View>
                        <View style={styles.searchArrow}>
                            <View >{this._displayImageArrow()}</View>
                        </View>
                        <View style={styles.searchItem}>
                              <RNPickerSelect
                                style={{
                                    ...pickerSelectStyles,
                                    iconContainer: {
                                      top: 12,
                                      right: 15,
                                    }
                                  }}
                                 placeholder={{ }}
                                  onValueChange={(itemValue, itemIndex) => this.setState({target: itemValue})}
                                  items={[
                                      { label: 'Lingala', value: 'lingala' },
                                      { label: 'Sango', value: 'sango' },
                                      { label: 'Français', value: 'french' },
                                  ]}
                                  Icon={() => {
                                      return <Ionicons name="ios-arrow-down" size={24} color="#061646" />;
                                    }}
                                />

                        </View>
                    </View>
                </View>

                <TouchableOpacity
                  style={{  alignItems: 'center'}} onPress={this._handleSearch}>
                   <LinearGradient
                       colors={['#4c669f', '#3b5998', '#192f6a']}
                       style={{
                           paddingTop: 35,
                           paddingBottom: 35,
                           paddingLeft: 15,
                           paddingRight: 15,
                           alignItems: 'center',
                           borderRadius: 5 }}>
                       <Text
                           style={{
                               backgroundColor: 'transparent',
                               fontSize: 15,
                               color: '#fff',
                           }}>
                           Chercher
                       </Text>
                   </LinearGradient>
               </TouchableOpacity >

            </View>
        </View>
          <View style={styles.resultModuleContainer}>

            <Touchable style={styles.option}>
                <View style={{ flexDirection: 'row' }}>
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
                          Bonjour
                      </Text>
                  </View>
                </View>
            </Touchable>
            <Touchable style={styles.option}>
                <View style={{ flexDirection: 'row' }}>
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
                          Bonjour
                      </Text>
                  </View>
                </View>
            </Touchable>

            <Touchable style={styles.option}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={styles.optionTextContainer}>
                      <Text style={styles.optionText}>
                          rester
                      </Text>
                  </View>
                </View>
            </Touchable>

            <Touchable style={styles.option}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={styles.optionTextContainer}>
                      <Text style={styles.optionText}>
                          rester
                      </Text>
                  </View>
                </View>
            </Touchable>
          </View>
    </View>
    );
  }
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 14,
    paddingVertical: 12,
    paddingHorizontal: 10,

    borderRadius: 10,
    color: '#061646',
    fontWeight: 'bold',
    backgroundColor: '#E4E4E4',

    paddingRight: 30, // to ensure the text is never behind the icon
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d0d6d2',
    borderColor: '#214c98',
    borderWidth: 7,
    marginLeft: 5,
    marginRight: 5,

    marginBottom: 15,
  },
  searchModuleContainer: { // container parent du containerSearch
      flex: 3,
      backgroundColor: '#c9c7a9'
  },
  resultModuleContainer: {
      marginTop: 5,
    flex: 6,
    backgroundColor: '#eee'
  },
  resultsModuleContainer: {
      flex: 5,
      backgroundColor: '#eee',
  },
  containerSearch: { //container du bloc recherche et bouton
      flex: 5,
      flexDirection: 'row',
      marginRight: 5,
      backgroundColor: '#eee',
  },

  containerTitle: {
      height: 85,
      backgroundColor: '#eee',
      alignItems: 'center',
      justifyContent: 'center'
  },

  infoTitle: {
      marginTop: 1,
      justifyContent: "center",
      alignItems: "center",
      fontSize: 22,
      color: '#061646',
      textAlign: 'center',
      fontWeight: 'bold',
      marginBottom: 5
  },
  infoText: {
      marginTop: 1,
      justifyContent: "center",
      alignItems: "center",
      fontSize: 17,
      color: '#061646',
      textAlign: 'center',
      fontWeight: 'bold',
  },
  infoTextResult:{
    marginTop: 5,
    marginBottom: 5,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 17,
    color: '#061646',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  searchSelect:{
      backgroundColor: '#eee',
      flexDirection: 'row',
      marginTop: 15,
      marginLeft: 10,
      marginRight: 10
  },
  searchButton:{
      flex:1,
      height: 65,
  },
  searchItem:{
      alignItems: 'center',
      justifyContent: "center",
      flex: 4
  },
  searchArrow:{
      flex: 2,
      alignItems: 'center',
      justifyContent: "center",
  },



  textinput: {
      marginLeft: 5,
      marginRight: 5,
      height: 50,
      borderColor: '#214c98',
      borderWidth: 2,
      paddingLeft: 5,
      color:'white',
      backgroundColor: 'white',
      borderRadius:5,
      color: '#061646',
      fontSize: 20,
  },

  buttonInput: {
  backgroundColor: "#ee315d",
  width: 100,
  borderColor: "transparent",
  borderWidth: 0,
  borderRadius: 5

  },
  item_text:{
      textAlign: 'center',
      justifyContent: 'center',
  },
  loading_container: {
    position: 'absolute', // La définition de la position  absolute  va nous permettre de faire passer le chargement par-dessus notre FlatList.
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  optionsTitleText: {
      fontSize: 26,
      marginLeft: 15,
      marginTop: 9,
      marginBottom: 12,
  },
  optionSection: {
      backgroundColor: '#fdfdfd',
      paddingHorizontal: 15,
      paddingVertical: 15,
      borderBottomWidth: 2,
      borderBottomColor: '#EDEDED',
      paddingBottom:2,
      backgroundColor: '#EDEDED',
      fontSize: 30,
      fontWeight: 'bold',
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
      paddingBottom:2,
      height: 60
  },
  optionText: {
      margin: 2,
      fontSize: 15,
      marginTop: 1,
      textAlign: 'left',
      fontSize: 20,
  },
  optionTextSection: {
    margin: 2,
    marginTop: 1,
    marginBottom: 1,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  }

});

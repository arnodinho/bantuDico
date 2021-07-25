// Components/AutocompleteItem.js

import React from 'react'
import { StyleSheet, View, Keyboard, Text,TouchableOpacity } from 'react-native'
import Touchable from 'react-native-platform-touchable';
import { withNavigation } from 'react-navigation';


class AutocompleteItem extends React.Component {
  //Les props sont fixées par le component parent (definition)
  //et ne peuvent pas être modifiées par le component qui les reçoit.
  // Les props sont accessibles en lecture uniquement dans la classe fille.
  constructor(props) {
    // Il y a deux actions qui peuvent pousser un component à se re-rendre :
    // - Un changement dans son state (avec  setState()  )
    // - Un changement dans ses props
    super(props)
         this.source = this.props.source
         this.target = this.props.target
         this.definition = this.props.definition
  }



  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            Keyboard.dismiss()
              this.props.navigation.push(
                "Home", {text:this.definition.word, source: this.source, target: this.target}
              )
            }
          }
          style={styles.option}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.optionTextContainer}>
                  <Text style={styles.optionText}>
                      {this.definition.word}
                  </Text>
              </View>
            </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 105,
    flexDirection: 'row'
  },
  button: {
    flex: 1,
    justifyContent: 'center',  //vertical align
    alignItems: 'center',  // horizontal align
    alignSelf: 'stretch', //width 100%
    marginTop:5,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 10,
  },
  definitionTitle: {
    textAlign: 'center',
     backgroundColor: 'transparent',
     fontSize: 35,
     color: '#fff',
  },
  definitionType: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
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
      height: 55
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
})

// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop

export default withNavigation(AutocompleteItem);

// Components/searchItem.js

import React from 'react'
import { StyleSheet, View, Text,TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo';

class SearchItem extends React.Component {
  //Les props sont fixées par le component parent (definition)
  //et ne peuvent pas être modifiées par le component qui les reçoit.
  // Les props sont accessibles en lecture uniquement dans la classe fille.
  constructor(props) {
    super(props)
         this.source = this.props.source
         this.definition = this.props.definition
  }



  _handleTranslationWord() {
      return 'french' === this.source ? this.definition.target.word : this.definition.source.word
  }

  _handleTranslationType() {
      return 'french' === this.source ? this.definition.target.type : this.definition.source.type
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity  style={{ flex:1, alignItems: 'center'}}>
            <LinearGradient
                colors={['#4c669f', '#3b5998', '#192f6a']}
                style={styles.button}>

                  <Text style={styles.definitionTitle} numberOfLines={1}>
                      {this._handleTranslationWord()}
                  </Text>
                  <Text  style={styles.definitionType}>
                    -   {this._handleTranslationType()} -
                  </Text>

            </LinearGradient>
        </TouchableOpacity >
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 135,
    flexDirection: 'row'
  },
  button: {
    flex: 1,
    justifyContent: 'center',  //vertical align
    alignItems: 'center',  // horizontal align
    alignSelf: 'stretch', //width 100%
    marginTop:5,
    paddingLeft: 5,
    paddingRight: 5,
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
  }
})

export default SearchItem

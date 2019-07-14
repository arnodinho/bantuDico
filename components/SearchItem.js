// Components/searchItem.js

import React from 'react'
import { StyleSheet, View, Text,TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux'

class SearchItem extends React.Component {
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
         this.displayTranslation = this.props.displayTranslation
  }

  _handleTranslationWord() {
      return 'french' === this.source ? this.definition.target.word : this.definition.source.word
  }

  _handleTranslationType() {
      return 'french' === this.source ? this.definition.target.type : this.definition.source.type
  }
  _displayDetail(id){
      this.displayTranslation(id)
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity
          style={{ flex:1, alignItems: 'center'}}
           onPress={() => this._displayDetail(this.definition.id) }
          >
            <LinearGradient
                colors={['#4c669f', '#3b5998', '#192f6a']}
                style={styles.button}>

                  <Text style={styles.definitionTitle} numberOfLines={1}>
                      {this._handleTranslationWord()}
                  </Text>
                  <Text  style={styles.definitionType}>
                    - {this._handleTranslationType()} -
                  </Text>

            </LinearGradient>
        </TouchableOpacity >
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 115,
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

// const mapStateToProps = (state) => {
//   return state
// }

export default SearchItem
// export default connect(mapStateToProps)(SearchItem)

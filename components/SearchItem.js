// Components/searchItem.js

import React from 'react'
import { StyleSheet, View, Text,TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo';

class SearchItem extends React.Component {
  render() {
    const definition = this.props.definition
    console.log("Affichage de la liste des definitions")
    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity  style={{ flex:1, alignItems: 'center'}}>
            <LinearGradient
                colors={['#4c669f', '#3b5998', '#192f6a']}
                style={styles.button}>

                  <Text style={styles.definitionTitle} numberOfLines={1}>
                      {definition.target.word}
                  </Text>
                  <Text  style={styles.definitionType}>
                    - {definition.target.type} -
                  </Text>

            </LinearGradient>
        </TouchableOpacity >
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 150,
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

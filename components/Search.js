// Components/Search.js
import React from 'react'
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Picker,
  Image,
  TouchableOpacity,
  Text,
  FlatList  } from 'react-native'

import SearchItem from './SearchItem'
import {searchTraduction} from '../API/bantuDico'
import { LinearGradient } from 'expo';
class Search extends React.Component {
    // Lorsque l'on crée un component custom, on doit obligatoirement réimplémenter la méthode render
    // et retourner (return) les éléments graphiques
    constructor(props) {
      super(props)
         this.searchedText = "" // Initialisation de notre donnée searchedText en dehors du state
      // On va donc initialiser notre state avec un tableau de definitions vide
      //pour modifier une donnée du state, on passe toujours par  setState
         this.state = { definitions: [] }
         this._handleSearch = this._handleSearch.bind(this)
    }
    _handleSearch(){
       if (this.searchedText.length > 0) { // Seulement si le texte recherché n'est pas vide
          //setState  récupère les modifications de vos données et indique
          // à React que le component a besoin d'être re-rendu avec ces  nouvelles données.
          searchTraduction(this.searchedText).then(data =>{
            //on ne gère dans le state que des données qui, une fois modifiées, peuvent affecter le rendu de notre component.
            this.setState({definitions: data})
          });
      }

    }
    _searchTextInputChanged(text) {
      console.log(text)
      this.searchedText = text // Modification du texte recherché à chaque saisie de texte, sans passer par le setState comme avant
    }
    render() {
        return (
            <View style={styles.container}>
              <View style={styles.searchModuleContainer}>

                  <View style={styles.containerTitle}>
                      <Text style={styles.infoText}>Le Dictionnaire pratique</Text>
                      <Text style={styles.infoTitle}>Français - Lingala - Sango</Text>
                  </View>

                  <View style={styles.containerSearch}>

                      <View style={{ flex:3 }} >
                          <TextInput style={styles.textinput}
                             placeholder='Barre de recherche'
                             onChangeText = {(text)=>this._searchTextInputChanged(text)}
                             />
                          <View style={styles.searchSelect}>
                              <View style={styles.searchItem}>
                                  <Picker
                                      selectedValue="Français"
                                      style={{  height: 50, width: 130 }}>
                                      <Picker.Item label="Français" value="java" />
                                      <Picker.Item label="JavaScript" value="js" />
                                  </Picker>
                              </View>
                              <View style={styles.searchArrow}>
                                  <View >{this._displayImageArrow()}</View>
                              </View>
                              <View style={styles.searchItem}>
                                  <Picker
                                      selectedValue="Lingala"
                                      style={{ height: 50, width: 130 }}>
                                      <Picker.Item label="Lingala" value="java" />
                                      <Picker.Item label="JavaScript" value="js" />
                                  </Picker>
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

              <View style={styles.resultsModuleContainer}>
                <Text style={styles.infoTextResult}>
                  Cette definition comporte plusieurs traductions en Lingala
                </Text>
                <FlatList
                    data={this.state.definitions}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <SearchItem definition={item}/>}
                />
              </View>
          </View>
        )
    }
    //une fois dans le component FilmItem, on peut récupérer
    //  definition  via  this.props.definition, mais on ne peut pas le modifier
    _displayImageArrow(){
        sourceImage = require('../assets/images/double-24.png')
        return ( <Image   source={sourceImage}/>)
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 9,
      backgroundColor: '#eee',
    },
    searchModuleContainer: {
        flex: 1,
          marginTop:15,
    },
    resultsModuleContainer: {
        flex: 2,
        backgroundColor: '#eee',
    },
    containerSearch: {
        flex: 2,
        flexDirection: 'row',
        marginRight: 5,
    },

    containerTitle: {
        marginTop:10,
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
        flex: 1,
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
        color:'black'
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
    }

})
//on exporte nos éléments pour pouvoir les utiliser ailleurs.
export default Search

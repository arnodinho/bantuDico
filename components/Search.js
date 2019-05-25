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
  FlatList,
  Keyboard,
  ActivityIndicator  } from 'react-native'

import SearchItem from './SearchItem'
import Result from './Result'
import {searchTraduction,randomId} from '../API/bantuDico'
import { LinearGradient } from 'expo';
import { createStackNavigator } from 'react-navigation'
import { connect } from 'react-redux'

class Search extends React.Component {
    // Lorsque l'on crée un component custom, on doit obligatoirement réimplémenter la méthode render
    // et retourner (return) les éléments graphiques
    constructor(props) {
      super(props)
         this.searchedText = "" // Initialisation de notre donnée searchedText en dehors du state
      // On va donc initialiser notre state avec un tableau de definitions vide
      //pour modifier une donnée du state, on passe toujours par  setState
         this.state = {
            definitions: [],
            source:"french",
            target:"sango" ,
            isLoading: false, // Par défaut à false car il n'y a pas de chargement tant qu'on ne lance pas de recherche
            detail: false,
            id: 2
          }
         this._handleSearch = this._handleSearch.bind(this)
         this._displayTranslation =  this._displayTranslation.bind(this)

    }
    _handleSearch(){
      console.log("handle search")
       if (this.searchedText.length > 0) { // Seulement si le texte recherché n'est pas vide
          //setState  récupère les modifications de vos données et indique
          // à React que le component a besoin d'être re-rendu avec ces  nouvelles données.
          this.setState({ isLoading: true,  detail: false }) // Lancement du chargement

          searchTraduction(this.searchedText,this.state.source,this.state.target).then(data =>{
            //on ne gère dans le state que des données qui, une fois modifiées, peuvent affecter le rendu de notre component.
            this.setState({
              definitions: data,
               isLoading: false // Arrêt du chargement
             })
          });
      }

    }

    _displayLoading() {
      if (this.state.isLoading) {
        return (
          <View style={styles.loading_container}>
            <ActivityIndicator size='large' />
            {/* Le component ActivityIndicator possède une propriété size pour définir la taille du visuel de chargement : small ou large. Par défaut size vaut small, on met donc large pour que le chargement soit bien visible */}
          </View>
        )
      }
    }
    _searchTextInputChanged(text) {
      console.log(text)
      this.searchedText = text // Modification du texte recherché à chaque saisie de texte, sans passer par le setState comme avant
    }

    _displayTranslation(idTranslation) {
      console.log("id de la transslation -- "+idTranslation)
      console.log("on est dans _displayTranslation")
      this.setState({
        detail: true,
        definitions: [],
        id: idTranslation
       })
    }
    _manageDisplay()
    {
      console.log('detail translation state '+this.state.detail)
      console.log('definition length '+this.state.definitions.length)
      if (this.state.detail) {
            console.log("gestion de l'affichage result")
        return (
          <Result id ={this.state.id} target ={this.state.target}/>
        )
      } else if(this.state.definitions.length > 0) {
        return (
          <View style={styles.resultsModuleContainer}>
            <Text style={styles.infoTextResult}>
              Cette definition comporte plusieurs traductions en Lingala
            </Text>
            <FlatList
                data={this.state.definitions}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <SearchItem
                                          definition={item}
                                          source={this.state.source}
                                          target={this.state.target}
                                          displayTranslation = {this._displayTranslation}
                                          />
                }
            />
          </View>
        )
      }else{
        //gestion de l'affichage random
        console.log("gestion de l'affichage random")
        return (
          <Text>random aleatoire connecte</Text>
           // <Result id ={randomId()} target ='sango'/>
        )
      }
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
                               onSubmitEditing={() => this._handleSearch()}
                             />
                          <View style={styles.searchSelect}>
                              <View style={styles.searchItem}>
                                  <Picker
                                      selectedValue={this.state.source}
                                      style={{  height: 50, width: 130 }}
                                      onValueChange={(itemValue, itemIndex) => this.setState({source: itemValue})}
                                      >
                                      <Picker.Item label="Français" value="french" />
                                      <Picker.Item label="Sango" value="sango" />
                                      <Picker.Item label="Lingala" value="lingala" />
                                  </Picker>
                              </View>
                              <View style={styles.searchArrow}>
                                  <View >{this._displayImageArrow()}</View>
                              </View>
                              <View style={styles.searchItem}>
                                  <Picker
                                      selectedValue={this.state.target}
                                      style={{ height: 50, width: 130 }}
                                      onValueChange={(itemTarget, itemIndex) => this.setState({target: itemTarget})}
                                      >
                                      <Picker.Item label="Français" value="french" />
                                      <Picker.Item label="Sango" value="sango" />
                                      <Picker.Item label="Lingala" value="lingala" />
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

              {this._manageDisplay()}
              {this._displayLoading()}
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
    },
    loading_container: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 100,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    }

})
//on exporte nos éléments pour pouvoir les utiliser ailleurs.
// export default Search

const mapStateToProps = (state) => {
  return state
}

// export default SearchItem
export default connect(mapStateToProps)(Search)

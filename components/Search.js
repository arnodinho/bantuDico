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
  ActivityIndicator } from 'react-native'

import RNPickerSelect from 'react-native-picker-select';
import SearchItem from './SearchItem'
import Result from './Result'
import {searchTraduction,randomId,randomTranslation} from '../API/bantuDico'
import { LinearGradient } from 'expo-linear-gradient';
import { createStackNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons';


class Search extends React.Component {
    // Lorsque l'on crée un component custom, on doit obligatoirement réimplémenter la méthode render
    // et retourner (return) les éléments graphiques
    constructor(props) {
      super(props)
         this.searchedText = "" // Initialisation de notre donnée searchedText en dehors du state. exemple de modification d'un props sans changer l'etat du component
      // On va donc initialiser notre state avec un tableau de definitions vide
      //pour modifier une donnée du state, on passe toujours par  setState
      //Dans le state, on ne gère que des données qui, une fois modifiées, peuvent affecter le rendu de notre component.
         this.state = {
            definitions: [],
            source:"french",
            target:"lingala" ,
            isLoading: false, // Par défaut à false car il n'y a pas de chargement tant qu'on ne lance pas de recherche
            detail: false,
            multipleResults: false,
            id: 2
          }
         this._handleSearch = this._handleSearch.bind(this)
         this._displayTranslation =  this._displayTranslation.bind(this)
         this._toggleLanguage = this._toggleLanguage.bind(this)
         this.resultElement = React.createRef()
    }

    componentDidMount() {}

    _toggleLanguage() {
        const action = { type: "TOGGLE_LANGUAGE", value: this.state.target }
        this.props.dispatch(action)
    }
    _handleSearch(){
       if (this.searchedText.length > 0) { // Seulement si le texte recherché n'est pas vide

         // Hide that keyboard!
         Keyboard.dismiss()


          //setState   récupère les modifications de vos données et indique
          // à React que le component a besoin d'être re-rendu avec ces  nouvelles données.
          this.setState({ isLoading: true,  detail: false }) // Lancement du chargement

          searchTraduction(this.searchedText,this.state.source,this.state.target).then(data =>{
            // Dès lors que vous utilisez la fonction connect
            // sur un component, Redux va mapper la fonction  dispatch  à votre component.
            if (this.state.multipleResults == true && data.length == 1) {
                var def = data.pop()
                var dataId = def.id

                if (def.id === undefined) {

                  dataId = 0
                }
                this.setState({
                   detail: true,
                   id: dataId,
                   isLoading: false,
                 })
            }else
            if(data.length > 1) {
            //on ne gère dans le state que des données qui, une fois modifiées, peuvent affecter le rendu de notre component.
            this.setState({
              definitions: data,
               isLoading: false, // Arrêt du chargement
               multipleResults:true
             })
           }else {
             this.setState({
               definitions: data,
                isLoading: false, // Arrêt du chargement
                multipleResults:false
              })
              if(data.length == 1) {
                var def = data.pop()
                var dataId = def.id
                //dans le cas d'une errur on renvoi l'id 0
                if (def.id == 'undefined') {
                  dataId = 0
                }
               this.resultElement.current.changeId(dataId)
              }
           }
          });
      }

    }
    componentDidUpdate() {}
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
      this.searchedText = text // Modification du texte recherché à chaque saisie de texte, sans passer par le setState comme avant
    }

    _displayTranslation(idTranslation) {
      this.setState({
        detail: true,
        definitions: [],
        id: idTranslation,
        multipleResults:false
       })
    }

    _displayRandomTranslation(){}

    _manageDisplay()
    {
      if (this.state.detail) {

        return (
          <Result id ={this.state.id} target ={this.state.target}/>
        )
      } else if (this.state.definitions.length == 1 && this.state.multipleResults == false ) {
        // var translate = this.state.definitions.pop()

        return (
          <Result id ={translate.id} target ={this.state.target} ref={this.resultElement}/>
        )
      } else if(this.state.definitions.length > 1) {
        console.log("plusieurs resultats "+this.state.multipleResults)
        return (
          <View style={styles.resultsModuleContainer}>
            <Text style={styles.infoTextResult}>
              Cette définition comporte plusieurs traductions en {this.state.target}
            </Text>
              {/*Index de la FlatList - la propriété key du keyExtractor doit être une chaîne de caractères*/}
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

        return (
           <Result id ={randomId()} target ={this.state.target} random = {true} />
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
                    {/* onSubmitEditing : validation text par le clavier*/}

                      <View style={{ flex:3 }} >
                          <TextInput style={styles.textinput}
                             placeholder='Barre de recherche'
                             onChangeText = {(text)=>this._searchTextInputChanged(text)}
                               onSubmitEditing={() => this._handleSearch()}
                             />
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
      flex: 9,
      backgroundColor: '#eee',
    },
    searchModuleContainer: { // container parent du containerSearch
        flex: 3,
        marginTop:15,
        backgroundColor: '#eee',
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
    }

})
//on exporte nos éléments pour pouvoir les utiliser ailleurs.
 export default Search

// si on spécifie  mapStateToProps  dans la fonction  connect  , automatiquement, le component est abonné aux changements du store Redux.
// const mapStateToProps = (state) => {
  // on vient, à l'instant, de mapper le state de notre application dans les props du component Search.
   //À présent, dans les props du component Search, vous avez accès au state de l'application et donc au language.

// Quand vous mappez le state de l'application à un component, vous devez spécifier les informations qui vous intéressent et ne pas retourner tout le state

//   return {target: state.target}
// }

// Le store Redux est connecté à notre component Search.
// export default connect(mapStateToProps)(Search)

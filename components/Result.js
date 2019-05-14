// Components/Result.js
import React from 'react'
import { View, StyleSheet,Text, Platform, Image, ActivityIndicator} from 'react-native'
import { MonoText } from '../components/StyledText';
import RandomButton from '../components/RandomButton'
import {getTranslationById} from '../API/bantuDico'
class Result extends React.Component {

      constructor(props) {
        super(props)
        this.state = {
          translation: undefined,
          isLoading: true // A l'ouverture de la vue, on affiche le chargement, le temps de récupérer le détail de la translation
        }
      }

      componentDidMount() {
        getTranslationById(this.props.id, this.props.target).then(data => {
          this.setState({
            translation: data,
            isLoading: false
          })
        })
    }

    _displayLoading() {
       // Si isLoading vaut true, on affiche le chargement à l'écran
      if (this.state.isLoading) {
        return (
          <View style={styles.loading_container}>
            <ActivityIndicator size='large' />
          </View>
        )
      }
    }
    _displayTranslation() {
      console.log(this.state.translation)
      if (this.state.translation != undefined) {

        return (
          <View style={styles.wrapperContainer}>
              <View style={styles.resultContainer}>
                  <View style={styles.resultShare}>
                      <View style={{ flex:5, alignItems:'center' }}></View>
                      <View style={{ flex:1 , alignItems:'center' }}>
                          {this._displayImageShare()}
                      </View>
                      <View style={{ flex:1, alignItems:'flex-start' }}>
                          <Text  style={{ fontSize: 15, color: '#061646'}}>{this.state.translation.likes}</Text>
                      </View>
                  </View>

                  <View style={styles.resulLangage}>
                      <View style={{ flex:1, alignItems:'center' }} >
                          <Text style={styles.tabBarInfoText}>Français</Text>
                      </View>
                      <View style={{ flex:1, alignItems:'center' }} >
                          <Text style={styles.tabBarInfoText}>{this.state.translation.target.name}</Text>
                      </View>
                  </View>

                  <View style={styles.resultDefinition}>
                      <View style={{ flex:3, alignItems:'center' ,justifyContent: "center"}} >
                          <Text style={styles.textDefinition}>{this.state.translation.source.word}</Text>


                      </View>
                      <View style={{ flex:1, justifyContent: "center"}} >
                          <Text style={styles.textDefinition}>{this._displayImageTraduction()}</Text>
                      </View>
                      <View style={{ flex:3, alignItems:'center' ,justifyContent: "center"}} >
                          <Text style={styles.textDefinition}>{this.state.translation.target.word}</Text>

                      </View>
                  </View>

                  <View style={styles.resultExample}>
                      <Text style={styles.textExemple}>{this.state.translation.description_source}</Text>
                      <Text style={styles.textExemple}>{this.state.translation.description_target}</Text>
                  </View>

              </View>
              <RandomButton/>
          </View>

        )
      }
    }


    // Lorsque l'on crée un component custom, on doit obligatoirement réimplémenter la méthode render
    // et retourner (return) les éléments graphiques
    render() {
        return (
            <View style={styles.wrapperContainer}>
              {this._displayLoading()}
              {this._displayTranslation()}
            </View>
        )
    }

    _displayImageShare(){
        sourceImage = require('../assets/images/like-sm-24.png')
        return ( <Image style={{ width:24 }}  source={sourceImage}/>)
    }
    _displayImageTraduction(){
        sourceImage = require('../assets/images/transfer.png')
        return ( <Image  source={sourceImage}/>)
    }
}

const styles = StyleSheet.create({
    wrapperContainer: {
        flex:2,
        marginTop:10
    },
    resultContainer:{
        flex:4,
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
        alignItems: 'center',
        backgroundColor: '#d0d6d2',
        borderColor: '#214c98',
        borderWidth: 7,
        marginLeft: 5,
        marginRight: 5,
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
    textDefinition: {
        marginTop: 1,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 30,
        color: '#061646',
        textAlign: 'center',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        flexWrap: 'wrap', //  flexWrap: 'wrap'  permet à notre texte de passer à la ligne si celui-ci est trop long
    },
    textExemple:{
        flex:1,
        fontSize: 15,
        color: '#061646',
        textAlign:'center',
        alignItems: "center",
        marginRight:2,
        marginLeft:2,


    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    resultShare:{
        flex:1,
        marginTop:1,
        flexDirection: 'row',


    },
    resulLangage:{
        flex:1,
        flexDirection: 'row',
    },
    resultDefinition:{
        flex:3,
        flexDirection: 'row',

    },
    resultExample:{
        flex:2,
        flexDirection: 'row',
        textAlign:'center',
        alignItems: "center",
    },
    loading_container: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    },
})
//on exporte nos éléments pour pouvoir les utiliser ailleurs.
export default Result

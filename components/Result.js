// Components/Result.js
import React from 'react'
import { View, StyleSheet,Text, Platform, Image, ActivityIndicator,TouchableOpacity} from 'react-native'
import { MonoText } from '../components/StyledText';
import RandomButton from '../components/RandomButton'
import {getTranslationById,randomId,randomTranslation} from '../API/bantuDico'
import { LinearGradient } from 'expo-linear-gradient';

// Import the react-native-sound module
var Sound = require('react-native-sound');
const baseUrl = 'https://bantu-dico.com'
class Result extends React.Component {
 // Si, dans votre application, les props d'un component change, celui-ci passe
 // automatiquement dans le cycle de vie updating et se re-rend.
      constructor(props) {
        super(props)
        this.songSource = null
        this.songTarget = null
        this.state = {
          translation: undefined,
          isLoading: true, // A l'ouverture de la vue, on affiche le chargement, le temps de récupérer le détail de la translation
          id : this.props.id,
          isAudio: false
        }
        this._getTranslation = this._getTranslation.bind(this)
        this._handleRandom   = this._handleRandom.bind(this)
        this._setErrorMesg   = this._setErrorMesg.bind(this)
        this._manageDisplayAudio = this._manageDisplayAudio.bind(this)
        this._displayAudio = this._displayAudio.bind(this)
      }

      componentDidMount() {

        if (this.state.id == 0) {
          console.log("on affiche error message")
          this._setErrorMesg()
        }else if (true == this.props.random) {
          this._handleRandom()
        }else {
            this._getTranslation(this.state.id, this.props.target)
        }
      }

    componentDidUpdate() {

    }
    _setErrorMesg() {
        this.setState({
          translation: 'error',
          isLoading:true
        })
    }

    changeId = (id) => {
      if (id == undefined) {
        this._setErrorMesg()
      }else {
        this._getTranslation(id, this.props.target)
      }

    }
      _handleRandom(){
          trad = randomTranslation(this.props.target)
          this.setState({
            translation: trad,
            isLoading: false
          })
      }

    _getTranslation(id, target){
      getTranslationById(id, target).then(data => {
        let audio = false
         if ( typeof data.target.url !== 'undefined' && typeof data.target.url !== 'undefined') {
           if (data.target.url.length !== 0) {
             audio = true
             this.songSource = new Sound (baseUrl+data.source.url)
             this.songTarget = new Sound (baseUrl+data.target.url)
           }
         }

        this.setState({
          translation: data,
          isLoading: false,
          isAudio: audio
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

    playSoundSource = () => {
      try {
        this.songSource.play((success) => {
              console.log('Sound source is playing '+success)
        })
      }catch(e) {
        console.log(`cannot play the sound source file` , e)
      }
    }

    playSoundTarget = () => {
      try {
        this.songTarget.play((success) => {
              console.log('Sound target is playing '+success)
            })
      }catch(e) {
        console.log(`cannot play the sound target file` , e)
      }
    }
    _manageDisplayAudio () {
      console.log('state audio '+this.state.isAudio)
      if (this.state.isAudio) {
        return (
            <View style={styles.resultShare}>
                <TouchableOpacity style={{ flex:3,justifyContent: "center", alignItems:'center' }} onPress={this.playSoundSource}>
                    {this._displayAudio()}
                </TouchableOpacity>

                <TouchableOpacity style={{ flex:3, justifyContent: "center",alignItems:'center' }} onPress={this.playSoundTarget}>
                    {this._displayAudio()}
                </TouchableOpacity>
            </View>
        )
      }else {
        return  (<View></View>)
      }

    }

    _displayTranslation() {
      if (this.state.translation === 'error') {
        return(
          <View style={styles.wrapperContainer}>
              <View style={styles.resultContainer}>
                  <View style={styles.resultDefinition}>
                      <View style={{ flex:3, alignItems:'center' ,justifyContent: "center"}} >
                          <Text style={styles.textDefinition}>Mot non trouvé</Text>
                            {this._displayImageTranslationNotFound()}
                      </View>
                  </View>
              </View>
              {/*onPress={() => this.handleRoute.bind('x')} in this case handleRoute doesn't called as soon as render happen*/}
              <TouchableOpacity  style={{ flex:1, alignItems: 'center'}}  onPress={this._handleRandom}>
                  <LinearGradient
                      colors={['#4c669f', '#3b5998', '#192f6a']}
                      style={{
                          marginTop:5,
                          paddingTop: 15,
                          paddingBottom: 15,
                          paddingLeft: 55,
                          paddingRight: 55,
                          alignItems: 'center',
                          borderRadius: 5 }}>
                      <Text
                          style={{
                              backgroundColor: 'transparent',
                              fontSize: 15,
                              color: '#fff',
                          }}>
                          Aléatoire
                      </Text>
                  </LinearGradient>
              </TouchableOpacity >

          </View>
        )
      }
      else if (this.state.translation != undefined && this.state.translation != 'error' ) {
        return (
          <View style={styles.wrapperContainer}>
              <View style={styles.resultContainer}>
                  <View style={styles.resulLangage}>
                      <View style={{ flex:1, alignItems:'center', justifyContent: 'center'}} >
                          <Text style={styles.tabBarInfoText}>Français</Text>
                      </View>
                      <View style={{ flex:1, alignItems:'center', justifyContent: 'center' }} >
                          <Text style={styles.tabBarInfoText}>{this.state.translation.target.name}</Text>
                      </View>
                  </View>

                  <View style={styles.resultDefinition}>
                      <View style={{ flex:3, alignItems:'center' ,justifyContent: "center"}} >
                          <Text style={styles.textDefinition}>{this.state.translation.source.word.toUpperCase()}</Text>
                      </View>
                      <View style={{ flex:1, justifyContent: "center"}} >
                          {this._displayImageTraduction()}
                      </View>
                      <View style={{ flex:3, alignItems:'center' ,justifyContent: "center"}} >
                          <Text style={styles.textDefinition}>{this.state.translation.target.word.toUpperCase()}</Text>

                      </View>
                  </View>

                  {this._manageDisplayAudio()}

                  <View style={styles.resultExample}>
                      <Text style={styles.textExemple}>{this.state.translation.description_source}</Text>
                      <Text style={styles.textExemple}>{this.state.translation.description_target}</Text>
                  </View>

              </View>
              {/*onPress={() => this.handleRoute.bind('x')} in this case handleRoute doesn't called as soon as render happen*/}
              <TouchableOpacity  style={{  alignItems: 'center',marginBottom:5}}  onPress={this._handleRandom}>
                  <LinearGradient
                      colors={['#4c669f', '#3b5998', '#192f6a']}
                      style={{
                          marginTop:5,
                          paddingTop: 15,
                          paddingBottom: 15,
                          paddingLeft: 55,
                          paddingRight: 55,
                          alignItems: 'center',
                          borderRadius: 5 }}>
                      <Text style={{ backgroundColor: 'transparent',fontSize: 15,color: '#fff'}}>
                          Aléatoire
                      </Text>

                  </LinearGradient>
              </TouchableOpacity >
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

    _displayAudio(){
        sourceImage = require('../assets/images/volume-32.png')
        return ( <Image style={{ width:32 }}  source={sourceImage}/>)
    }
    _displayImageTraduction(){
        sourceImage = require('../assets/images/transfer.png')
        return ( <Image  source={sourceImage}/>)
    }

    _displayImageTranslationNotFound(){
        sourceImage = require('../assets/images/frown.png')
        return ( <Image  source={sourceImage}/>)
    }
}

const styles = StyleSheet.create({
    wrapperContainer: {
        flex:5,
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
        fontSize: 28,
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
        flexDirection: 'row'
    },
    resulLangage:{
        flex:1,
        flexDirection: 'row'
    },
    resultDefinition:{
        flex:3,
        flexDirection: 'row',

    },
    resultExample:{
        flex:2,
        flexDirection: 'row',
        textAlign:'center',
        alignItems: "center"
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

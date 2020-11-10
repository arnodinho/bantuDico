import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Platform,
  View,Text,
  TextInput,
  Keyboard,
  TouchableOpacity,
  Picker} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class AddScreen extends React.Component {
  static navigationOptions = {
    title: 'Ajout de traduction',
  };

  constructor(props) {
    super(props)
       this.sourceText = ""
       this.targetText = "" // Initialisation de notre donnée searchedText en dehors du state. exemple de modification d'un props sans changer l'etat du component
       this.state = {
          target:"lingala",
          isLoading: false, // Par défaut à false car il n'y a pas de chargement tant qu'on ne lance pas de recherche
        }
    }

  _textSourceChanged (text) {
    this.sourceText = text // Modification du texte recherché à chaque saisie de texte, sans passer par le setState comme avant
    console.log('input')
  }

  _textTargetChanged (text) {
    this.targetText = text // Modification du texte recherché à chaque saisie de texte, sans passer par le setState comme avant
    console.log('target')
  }

  _addTraduction() {
    console.log("call api")
    if (this.sourceText == 0 || this.targetText == 0) {
      console.log('show alert')
    }

    // Hide that keyboard!
    Keyboard.dismiss()
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
            <View style={styles.container}>

              <View style={styles.main}>
                  <Text style={styles.tabBarInfoTitle}>
                  Proposez une nouvelle traduction
                 </Text>
                 <Text style={styles.infoText}>
                   Vous pouvez vous aussi apporter votre contribution en proposant une nouvelle traduction.
                  </Text>
                  <Text style={styles.infoText2}>
                    Une fois validée par nos équipes elle sera disponible sur l'application.
                   </Text>
                </View>

                <View style={styles.containerTradution}>
                  <View style={styles.traduction}>
                    <View style={{ flex: 1, justifyContent: "center",alignItems: "flex-start"}}>
                      <Text style={styles.infoTraduction}>
                      Français :
                       </Text>
                    </View>
                    <View style={{ flex: 2 , marginRight:10, justifyContent: "center"}}>
                     <TextInput
                       style={styles.textinput}
                       placeholder='Taper votre mot en français'
                       onChangeText = {(text)=>this._textSourceChanged(text)}/>
                    </View>
                  </View>

                  <View style={styles.traduction}>
                    <View style={{ flex: 1 }}>
                      <View>
                          <Picker
                            style={{  height: 50, width: 120 }}
                            selectedValue={this.state.target}
                            onValueChange={(itemTarget, itemIndex) => this.setState({target: itemTarget})}

                            >
                              <Picker.Item label="Sango" value="sango" />
                              <Picker.Item label="Lingala" value="lingala" />
                          </Picker>
                      </View>

                    </View>
                    <View style={{ flex: 2 , marginRight:10, justifyContent: "center"}}>
                     <TextInput
                       style={styles.textinput}
                       placeholder='Traduction'
                       onChangeText = {(text)=>this._textTargetChanged(text)}
                       onSubmitEditing={() => this._addTraduction()}/>
                    </View>
                  </View>

                  <TouchableOpacity  style={{  alignItems: 'center',marginTop:25}} onPress={() => this._addTraduction()}>
                      <LinearGradient
                          colors={['#4c669f', '#3b5998', '#192f6a']}
                          style={{
                              marginTop:5,
                              paddingTop: 15,
                              paddingBottom: 15,
                              paddingLeft: 95,
                              paddingRight: 95,
                              alignItems: 'center',
                              borderRadius: 5 }}>
                          <Text style={{ backgroundColor: 'transparent',fontSize: 15,color: '#fff'}}>
                              Ajouter
                          </Text>

                      </LinearGradient>
                  </TouchableOpacity >
              </View>
            </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,

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

      backgroundColor: '#d0d6d2',
      borderColor: '#214c98',
      borderWidth: 7,
      marginLeft: 5,
      marginRight: 5,
      marginTop:15,
      marginBottom: 15,
  },
  traduction: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5
  },
    infoText: {
        marginTop: 1,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 16,
        color: '#061646',
        textAlign: 'center',
    },
    infoText2: {
        marginTop: 3,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 16,
        color: '#061646',
        textAlign: 'center',
        marginBottom: 9,
    },
    infoTraduction: {

      fontSize: 16,
      color: '#061646',
      fontWeight: 'bold',
      marginLeft: 6
    },
    tabBarInfo: {
        marginTop: 1,
        fontSize: 14,
        color: '#061646',

    },
    tabBarInfoTitle: {
        marginTop: 5,
        marginBottom: 9,
        fontSize: 20,
        color: '#061646',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    main: {
        marginRight: 5,
        marginLeft:5,
        flex: 2,
    },
    containerTradution:{

      flex:6,
      marginTop:25,
      marginRight: 5,
      marginLeft:5,
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
        fontSize: 15,
    },
});

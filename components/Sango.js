import React from 'react';
import { ScrollView, StyleSheet,Platform, View,Text} from 'react-native';
import Touchable from 'react-native-platform-touchable';

class Sango extends React.Component {
  render() {
    return (
        <View>

                {/* Go ahead and delete ExpoLinksView and replace it with your
                   * content, we just wanted to provide you with some helpful links */}
                   <Touchable style={styles.optionSection}>
                       <View style={{ flexDirection: 'row' }}>
                           <View style={styles.optionTextContainer}>
                               <Text style={styles.optionTextSection}>
                           Présentations
                               </Text>
                           </View>
                       </View>
                   </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                            <View style={styles.optionTextContainer}>
                                <Text style={styles.optionText}>
                                    Bonjour
                                </Text>
                            </View>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                                Balaô
                              </Text>
                              </View>

                          </View>
                      </Touchable>

                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                            <View style={styles.optionTextContainer}>
                                <Text style={styles.optionText}>
                                  Salut !
                                </Text>
                            </View>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                                Balaô
                              </Text>
                              </View>

                          </View>
                      </Touchable>

                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                            <View style={styles.optionTextContainer}>
                                <Text style={styles.optionText}>
                                  Au revoir
                                </Text>
                            </View>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                              Gué nzôni
                              </Text>
                              </View>

                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                            Comment ça va ?
                              </Text>
                              </View>
                              <View style={styles.optionTextContainer}>
                                  <Text style={styles.optionText}>
                                  Töngana nye ?
                                  </Text>
                              </View>
                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                            <View style={styles.optionTextContainer}>
                                <Text style={styles.optionText}>
                                Je vais bien
                                </Text>
                            </View>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                             Mbï yeke sêngê
                              </Text>
                              </View>

                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                            <View style={styles.optionTextContainer}>
                                <Text style={styles.optionText}>
                              Quel est ton nom ?
                                </Text>
                            </View>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                            Ïrï tî mo nye ?
                              </Text>
                              </View>

                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                            <View style={styles.optionTextContainer}>
                                <Text style={styles.optionText}>
                               Mon nom est ...
                                </Text>
                            </View>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                            Ïrï tî mbï ...
                              </Text>
                              </View>

                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                            <View style={styles.optionTextContainer}>
                                <Text style={styles.optionText}>
                               Le prénom
                                </Text>
                            </View>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                          ïrï tî nzapä
                              </Text>
                              </View>

                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                            <View style={styles.optionTextContainer}>
                                <Text style={styles.optionText}>
                                 Le nom de famille
                                </Text>
                            </View>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                        ïrï tî ködörö
                              </Text>
                              </View>
                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                            <View style={styles.optionTextContainer}>
                                <Text style={styles.optionText}>
                          Bonne nuit
                                </Text>
                            </View>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                        Nzoni lakwi
                              </Text>
                              </View>

                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                            <View style={styles.optionTextContainer}>
                                <Text style={styles.optionText}>
                              Bonne fêtes
                                </Text>
                            </View>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                          Nzoni matanga
                              </Text>
                              </View>

                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                            <View style={styles.optionTextContainer}>
                                <Text style={styles.optionText}>
                              Joyeux anniversaire
                                </Text>
                            </View>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                        Nzoni matanga ti dungö
                              </Text>
                              </View>

                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                            <View style={styles.optionTextContainer}>
                                <Text style={styles.optionText}>
                            Merci (beaucoup)
                                </Text>
                            </View>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                        Singîla (mingi)
                              </Text>
                              </View>

                          </View>
                      </Touchable>

                      <Touchable style={styles.optionSection}>
                          <View style={{ flexDirection: 'row' }}>
                              <View style={styles.optionTextContainer}>
                                  <Text style={styles.optionTextSection}>
                              Le couple
                                  </Text>
                              </View>
                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                            <View style={styles.optionTextContainer}>
                                <Text style={styles.optionText}>
                            Mon amour
                                </Text>
                            </View>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                          kamba ti bê ti mbi
                              </Text>
                              </View>

                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                            <View style={styles.optionTextContainer}>
                                <Text style={styles.optionText}>
                    Je t'aime
                                </Text>
                            </View>
                              <View style={styles.optionTextContainer}>

                              <Text style={styles.optionText}>
                        Mbi yé mö
                              </Text>
                              </View>

                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                            <View style={styles.optionTextContainer}>
                                <Text style={styles.optionText}>
                        Mon mari, mon copain
                                </Text>
                            </View>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                      Koli ti mbi
                              </Text>
                              </View>

                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                            <View style={styles.optionTextContainer}>
                                <Text style={styles.optionText}>
                          tu es très beau (belle, jolie)
                                </Text>
                            </View>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                          mô yèkè pendèrè mingi
                              </Text>
                              </View>

                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                            <View style={styles.optionTextContainer}>
                                <Text style={styles.optionText}>
                            c’est fini entre toi et moi
                                </Text>
                            </View>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                          Ti mbi na mô a hûnzi awè
                              </Text>
                              </View>

                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                            <View style={styles.optionTextContainer}>
                                <Text style={styles.optionText}>
                          Ma femme, ma copine
                                </Text>
                            </View>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                        Wali ti mbi
                              </Text>
                              </View>

                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                            <View style={styles.optionTextContainer}>
                                <Text style={styles.optionText}>
                           Tu me plais
                                </Text>
                            </View>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                        mô nzèrè la lè ti mbi
                              </Text>
                              </View>

                          </View>
                      </Touchable>
                      <Touchable style={styles.optionSection}>
                          <View style={{ flexDirection: 'row' }}>
                              <View style={styles.optionTextContainer}>
                                  <Text style={styles.optionTextSection}>
                              La nourriture
                                  </Text>
                              </View>
                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                      Bon-appetit
                              </Text>
                              </View>
                              <View style={styles.optionTextContainer}>
                                  <Text style={styles.optionText}>
                                    kobè a nzèrè na yanga ti ala
                                  </Text>
                              </View>
                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                      le petit-déjeuner
                              </Text>
                              </View>
                              <View style={styles.optionTextContainer}>
                                  <Text style={styles.optionText}>
                            kôbe tî ndäpêlêlê
                                  </Text>
                              </View>
                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                    le déjeuner
                              </Text>
                              </View>
                              <View style={styles.optionTextContainer}>
                                  <Text style={styles.optionText}>
                            kôbe tî bêkombïte
                                  </Text>
                              </View>
                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                    le dîner, souper
                              </Text>
                              </View>
                              <View style={styles.optionTextContainer}>
                                  <Text style={styles.optionText}>
                          kôbe tî lâkûi
                                  </Text>
                              </View>
                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                    la faim, affamé
                              </Text>
                              </View>
                              <View style={styles.optionTextContainer}>
                                  <Text style={styles.optionText}>
                        nzara, zo tî nzara
                                  </Text>
                              </View>
                          </View>
                      </Touchable>
                      <Touchable style={styles.optionSection}>
                          <View style={{ flexDirection: 'row' }}>
                              <View style={styles.optionTextContainer}>
                                  <Text style={styles.optionTextSection}>
                              La santé
                                  </Text>
                              </View>
                          </View>
                      </Touchable>

                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                      J’ai besoin de voir un médecin
                              </Text>
                              </View>
                              <View style={styles.optionTextContainer}>
                                  <Text style={styles.optionText}>
                        Mbi yé ti ba wa nganga
                                  </Text>
                              </View>
                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                  Je suis malade
                              </Text>
                              </View>
                              <View style={styles.optionTextContainer}>
                                  <Text style={styles.optionText}>
                      Tere ti mbi a sô
                                  </Text>
                              </View>
                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                      Où est l’hôpital ?
                              </Text>
                              </View>
                              <View style={styles.optionTextContainer}>
                                  <Text style={styles.optionText}>
                        Da nganga ni a yéké na ndo wa ?
                                  </Text>
                              </View>
                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                      Appelez un médecin !
                              </Text>
                              </View>
                              <View style={styles.optionTextContainer}>
                                  <Text style={styles.optionText}>
                        iri wa nganga !
                                  </Text>
                              </View>
                          </View>
                      </Touchable>
        </View>
    )
}

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
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
  expressionsContainer: {
    paddingBottom: 15,
    flex:1,
    marginBottom: 15,
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
    optionsTitleText: {
        fontSize: 16,
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
        paddingBottom:2
    },
    optionText: {
        margin: 2,
        fontSize: 15,
        marginTop: 1,
        textAlign: 'center'
    },
    optionTextSection: {
      margin: 2,
      marginTop: 1,
      marginBottom: 1,
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
    }
})

//on exporte nos éléments pour pouvoir les utiliser ailleurs.
export default Sango

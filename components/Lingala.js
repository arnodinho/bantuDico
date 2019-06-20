import React from 'react';
import { ScrollView, StyleSheet,Platform, View,Text} from 'react-native';
import Touchable from 'react-native-platform-touchable';

class Lingala extends React.Component {
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
                                  mbote
                              </Text>
                              </View>

                          </View>
                      </Touchable>

                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                            <View style={styles.optionTextContainer}>
                                <Text style={styles.optionText}>
                                  bienvenue
                                </Text>
                            </View>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                                  boyei bolamu
                              </Text>
                              </View>

                          </View>
                      </Touchable>

                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                            <View style={styles.optionTextContainer}>
                                <Text style={styles.optionText}>
                                  comment ça va ?
                                </Text>
                            </View>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                                boni nzoto ?
                              </Text>
                              </View>

                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                              toyambi bapaya
                              </Text>
                              </View>
                              <View style={styles.optionTextContainer}>
                                  <Text style={styles.optionText}>
                                  nous avons de la visite
                                  </Text>
                              </View>
                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                            <View style={styles.optionTextContainer}>
                                <Text style={styles.optionText}>
                                tu vas bien?
                                </Text>
                            </View>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                             ozali malamu?
                              </Text>
                              </View>

                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                            <View style={styles.optionTextContainer}>
                                <Text style={styles.optionText}>
                               quelles sont les nouvelles?
                                </Text>
                            </View>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                            sango nini?
                              </Text>
                              </View>

                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                            <View style={styles.optionTextContainer}>
                                <Text style={styles.optionText}>
                               pas de nouvelles ! / ça va !
                                </Text>
                            </View>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                            sango te!
                              </Text>
                              </View>

                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                            <View style={styles.optionTextContainer}>
                                <Text style={styles.optionText}>
                               je vais bien
                                </Text>
                            </View>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                            naza(li) malamu
                              </Text>
                              </View>

                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                            <View style={styles.optionTextContainer}>
                                <Text style={styles.optionText}>
                                 je ne vais pas bien
                                </Text>
                            </View>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                          naza(li) malamu te
                              </Text>
                              </View>
                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                            <View style={styles.optionTextContainer}>
                                <Text style={styles.optionText}>
                               viens on s’en va, allons-nous en
                                </Text>
                            </View>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                            yaka tokende
                              </Text>
                              </View>

                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                            <View style={styles.optionTextContainer}>
                                <Text style={styles.optionText}>
                                je vous dis au revoir
                                </Text>
                            </View>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                            natiki bino
                              </Text>
                              </View>

                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                            <View style={styles.optionTextContainer}>
                                <Text style={styles.optionText}>
                               bon retour, bonne route
                                </Text>
                            </View>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                          bokende bolamu
                              </Text>
                              </View>

                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                            <View style={styles.optionTextContainer}>
                                <Text style={styles.optionText}>
                              bonne journée !
                                </Text>
                            </View>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                          mokolo molamu !
                              </Text>
                              </View>

                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                            <View style={styles.optionTextContainer}>
                                <Text style={styles.optionText}>
                            joyeux anniversaire
                                </Text>
                            </View>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                        mbotama elamu
                              </Text>
                              </View>

                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                            <View style={styles.optionTextContainer}>
                                <Text style={styles.optionText}>
                              bonne nuit
                                </Text>
                            </View>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                          butu elamu
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
                            c’est mon (ma) compagnon (compagne)
                                </Text>
                            </View>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                          azalaka molongani na ngai
                              </Text>
                              </View>

                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                            <View style={styles.optionTextContainer}>
                                <Text style={styles.optionText}>
                      mon amour, mon(ma) chéri(e)
                                </Text>
                            </View>
                              <View style={styles.optionTextContainer}>

                              <Text style={styles.optionText}>
                          bolingo na ngai
                              </Text>
                              </View>

                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                            <View style={styles.optionTextContainer}>
                                <Text style={styles.optionText}>
                          prends soin de ton amoureux(se)
                                </Text>
                            </View>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                        lengela bolingo na yo
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
                          ozali kitoko mingi
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
                          ya nga na yo esili
                              </Text>
                              </View>

                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                            <View style={styles.optionTextContainer}>
                                <Text style={styles.optionText}>
                            tu me plais
                                </Text>
                            </View>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                        nasepelaka na yo
                              </Text>
                              </View>

                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                            <View style={styles.optionTextContainer}>
                                <Text style={styles.optionText}>
                           je t’aime
                                </Text>
                            </View>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                          na lingi yo
                              </Text>
                              </View>

                          </View>
                      </Touchable>
                      <Touchable style={styles.optionSection}>
                          <View style={{ flexDirection: 'row' }}>
                              <View style={styles.optionTextContainer}>
                                  <Text style={styles.optionTextSection}>
                              Le commerce
                                  </Text>
                              </View>
                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                        C’est combien ?
                              </Text>
                              </View>
                              <View style={styles.optionTextContainer}>
                                  <Text style={styles.optionText}>
                             Talo boni ?
                                  </Text>
                              </View>
                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                        C’est très bon marché
                              </Text>
                              </View>
                              <View style={styles.optionTextContainer}>
                                  <Text style={styles.optionText}>
                             Ezali ya motoya te
                                  </Text>
                              </View>
                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                        Pouvez-vous baisser le prix ?
                              </Text>
                              </View>
                              <View style={styles.optionTextContainer}>
                                  <Text style={styles.optionText}>
                             Talo boni ?
                                  </Text>
                              </View>
                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                      C’est trop cher !
                              </Text>
                              </View>
                              <View style={styles.optionTextContainer}>
                                  <Text style={styles.optionText}>
                             Ezali ntalo mingi !
                                  </Text>
                              </View>
                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                      Je ne fais que regarder
                              </Text>
                              </View>
                              <View style={styles.optionTextContainer}>
                                  <Text style={styles.optionText}>
                            Nazali ekeka
                                  </Text>
                              </View>
                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                      Argent
                              </Text>
                              </View>
                              <View style={styles.optionTextContainer}>
                                  <Text style={styles.optionText}>
                          Mbongo
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
                    Je ne me sens pas très bien
                              </Text>
                              </View>
                              <View style={styles.optionTextContainer}>
                                  <Text style={styles.optionText}>
                        Nalembi
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
                        Esengali ete munganga
                                  </Text>
                              </View>
                          </View>
                      </Touchable>
                      <Touchable style={styles.option}>
                          <View style={{ flexDirection: 'row' }}>
                              <View style={styles.optionTextContainer}>
                              <Text style={styles.optionText}>
                    J’ai mal ici
                              </Text>
                              </View>
                              <View style={styles.optionTextContainer}>
                                  <Text style={styles.optionText}>
                        Nazoyoka libumu mpasi
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
                        Lopitalo ezali wapi ?
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
                        Benga monganga !
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
export default Lingala

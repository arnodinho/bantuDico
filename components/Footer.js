// Components/Footer.js
import React from 'react'
import { View, StyleSheet,Text, Platform} from 'react-native'
import { MonoText } from '../components/StyledText';
import RandomButton from '../components/RandomButton'

class Footer extends React.Component {
    // Lorsque l'on crée un component custom, on doit obligatoirement réimplémenter la méthode render
    // et retourner (return) les éléments graphiques
    render() {
        return (
            <View style={styles.wrapperContainer}>
                <View style={styles.resultContainer}>

                    <Text style={styles.tabBarInfoText}>This is a tab</Text>

                    <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
                        <MonoText style={styles.codeHighlightText}>navigation/MainTabNasvigator.js</MonoText>
                    </View>
                </View>
                <RandomButton/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapperContainer: {
        flex:6,
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
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
})
//on exporte nos éléments pour pouvoir les utiliser ailleurs.
export default Footer





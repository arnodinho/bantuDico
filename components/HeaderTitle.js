// Components/HeaderTitle.js
import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

class HeaderTitle extends React.Component {
    // Lorsque l'on crée un component custom, on doit obligatoirement réimplémenter la méthode render
    // et retourner (return) les éléments graphiques
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.infoText}>Le Dictionnaire pratique</Text>
                <Text style={styles.infoText}>Français - Lingala - Sango</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
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
})

//on exporte nos éléments pour pouvoir les utiliser ailleurs.
export default HeaderTitle
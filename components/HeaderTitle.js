// Components/HeaderTitle.js
import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

class HeaderTitle extends React.Component {

    _displayImageHeader(){
        sourceImage = require('../assets/images/header-3.png')
        return ( <Image style={{height: 92}}  source={sourceImage}/>)
    }

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
        backgroundColor: '#98ddee',
        alignItems: 'center',
        justifyContent: 'center'
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
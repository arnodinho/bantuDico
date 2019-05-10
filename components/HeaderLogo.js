// Components/HeaderTitle.js
import React from 'react'
import { View, Image,StyleSheet } from 'react-native'

class HeaderLogo extends React.Component {

    _displayImageHeader(){
        sourceImage = require('../assets/images/header-3.png')
        return ( <Image style={{height: 92}}  source={sourceImage}/>)
    }

    render() {
        return (
            <View style={styles.containerHeaderLogo}>{this._displayImageHeader()}</View>
        )
    }
}


const styles = StyleSheet.create({

    containerHeaderLogo: {
        backgroundColor: '#eee',
        alignItems: 'center',
        flex: 1,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {  height: -3 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 1,
    },
})

//on exporte nos éléments pour pouvoir les utiliser ailleurs.
export default HeaderLogo
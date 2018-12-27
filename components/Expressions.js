// Components/Expressions.js
import React from 'react'
import { View, StyleSheet,Text, Platform,Image} from 'react-native'

class Expressions extends React.Component {

    render() {
        return (
            <View style={styles.wrapperContainer}>
                <View style={styles.resultContainer}>

                    <View style={styles.resultShare}>
                            <StandardButton/>
                            <StandardButton/>
                    </View>

                <View style={styles.resulLangage}>
                    <View style={{ flex:1, alignItems:'center' }} >
                        <Text style={styles.tabBarInfoText}>Français</Text>
                    </View>
                    <View style={{ flex:1, alignItems:'center' }} >
                        <Text style={styles.tabBarInfoText}>Lingala</Text>
                    </View>
                </View>

                <View style={styles.resultExample}>
                    <Text style={styles.textExemple}>il etait une fois l'ouest</Text>
                    <Text style={styles.textExemple}>il etait une fois le sud et je repars a la ligne</Text>
                </View>

                </View>
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

export default Expressions





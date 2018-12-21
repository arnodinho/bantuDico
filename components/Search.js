// Components/Search.js
import React from 'react'
import { View, TextInput, Button,StyleSheet,Picker,Image } from 'react-native'

class Search extends React.Component {
    // Lorsque l'on crée un component custom, on doit obligatoirement réimplémenter la méthode render
    // et retourner (return) les éléments graphiques
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.textinput} placeholder='Barre de recherche'/>


                <View style={styles.containerSearch}>
                    
                    <View style={styles.searchSelect}>
                        <View style={styles.searchItem}>
                            <Picker
                                selectedValue="Français"
                                style={{  height: 50, width: 130 }}>
                                <Picker.Item label="Français" value="java" />
                                <Picker.Item label="JavaScript" value="js" />
                            </Picker>
                        </View>
                        <View style={styles.searchArrow}>
                            <View >{this._displayImageArrow()}</View>
                        </View>
                        <View style={styles.searchItem}>
                            <Picker
                                selectedValue="Lingala"
                                style={{ height: 50, width: 130 }}>
                                <Picker.Item label="Lingala" value="java" />
                                <Picker.Item label="JavaScript" value="js" />
                            </Picker>
                        </View>
                    </View>

                    <Button buttonStyle={styles.buttonInput} title='GO' onPress={() => {}}/>

                </View>

            </View>
        )
    }
    _displayImageArrow(){
        sourceImage = require('../assets/images/double-24.png')
        return ( <Image   source={sourceImage}/>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#eeb156',
    },

    containerSearch: {
        flex: 1,
        flexDirection: 'row',
    },
    searchSelect:{
        flex:1,
        backgroundColor: '#52ebee',
        flexDirection: 'row',
    },
    searchButton:{
        flex:1,
        height: 65,
    },
    searchItem:{
        alignItems: 'center',
        justifyContent: "center",
        flex: 4
    },
    searchArrow:{
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
    },



    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5,
        color:'white'
    },

    buttonInput: {
    backgroundColor: "#ee315d",
    width: 100,
    height: 65,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5

    },


})
//on exporte nos éléments pour pouvoir les utiliser ailleurs.
export default Search
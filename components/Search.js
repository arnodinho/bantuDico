// Components/Search.js
import React from 'react'
import { View, TextInput, Button,StyleSheet,Picker,TouchableOpacity } from 'react-native'

class Search extends React.Component {
    // Lorsque l'on crée un component custom, on doit obligatoirement réimplémenter la méthode render
    // et retourner (return) les éléments graphiques
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.textinput} placeholder='Barre de recherche'/>

                <View style={styles.containerSearch}>
                    <View style={styles.searchSelect}>
                        <Picker
                            selectedValue="Français"
                            style={{  height: 50, width: 100 }}>
                            <Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                        </Picker>
                        <Picker
                            selectedValue="Lingala"
                            style={{ height: 50, width: 100 }}>
                            <Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                        </Picker>
                    </View>

                    <TouchableOpacity style={styles.searchButton}>
                        <Button style={styles.buttonInput} title='GO' onPress={() => {}}/>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#eee',
    },
    containerSearch: {
        flex: 1,
        flexDirection: 'row',
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
        height: 200,
        color:"#206c84"
    },
    searchSelect:{
        flex:3,
    },
    searchButton:{
        flex:1,
    }

})
//on exporte nos éléments pour pouvoir les utiliser ailleurs.
export default Search
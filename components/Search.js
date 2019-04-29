// Components/Search.js
import React from 'react'
import { View, TextInput, Button,StyleSheet,Picker,Image,TouchableOpacity,Text, FlatList  } from 'react-native'
import SearchButton from '../components/SearchButton'
class Search extends React.Component {
    // Lorsque l'on crée un component custom, on doit obligatoirement réimplémenter la méthode render
    // et retourner (return) les éléments graphiques
    render() {
        return (
            <View style={styles.wrapperContainer}>

                <View style={styles.containerTitle}>
                    <Text style={styles.infoText}>Le Dictionnaire pratique</Text>
                    <Text style={styles.infoText}>Français - Lingala - Sango</Text>
                </View>

                <View style={styles.containerSearch}>

                    <View style={{ flex:3 }} >
                        <TextInput style={styles.textinput} placeholder='Barre de recherche'/>
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
                    </View>

                    <SearchButton/>

                </View>
                <FlatList
                    data={[{key: 'a'}, {key: 'baby kemi'}]}
                    renderItem={({item}) => <Text>{item.key}</Text>}/>
            </View>
        )
    }
    _displayImageArrow(){
        sourceImage = require('../assets/images/double-24.png')
        return ( <Image   source={sourceImage}/>)
    }
}

const styles = StyleSheet.create({
    wrapperContainer: {
        flex: 3,
        backgroundColor: '#eee',

    },
    containerTitle: {
        marginTop:10,
        height: 85,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerSearch: {
        flex: 2,
        flexDirection: 'row',
        marginRight: 5,
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

    searchSelect:{
        backgroundColor: '#eee',
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
        borderColor: '#214c98',
        borderWidth: 2,
        paddingLeft: 5,
        color:'white',
        backgroundColor: 'white',
        borderRadius:5
    },

    buttonInput: {
    backgroundColor: "#ee315d",
    width: 100,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5

    },
    item_text:{
        textAlign: 'center',
        justifyContent: 'center',
    }

})
//on exporte nos éléments pour pouvoir les utiliser ailleurs.
export default Search

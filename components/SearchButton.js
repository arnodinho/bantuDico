import React from 'react';
import { Text, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo';
import {searchTraduction} from '../API/bantuDico'

class SearchButton extends React.Component {
    _handleSearch(){
      console.log("on rentre ici")
      searchTraduction("mobali").then(data => console.log(data));
    }

    render() {
        return (
             <TouchableOpacity
               style={{  alignItems: 'center'}} onPress={this._handleSearch}>
                <LinearGradient
                    colors={['#4c669f', '#3b5998', '#192f6a']}
                    style={{
                        paddingTop: 35,
                        paddingBottom: 35,
                        paddingLeft: 15,
                        paddingRight: 15,
                        alignItems: 'center',
                        borderRadius: 5 }}>
                    <Text
                        style={{
                            backgroundColor: 'transparent',
                            fontSize: 15,
                            color: '#fff',
                        }}>
                        Chercher
                    </Text>
                </LinearGradient>
            </TouchableOpacity >
        );
    }
}
export default SearchButton

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';

class StandardButton extends React.Component {
    render() {
        return (
            <TouchableOpacity  style={{ flex:1, alignItems: 'center'}}>
                <LinearGradient
                    colors={['#4c669f', '#3b5998', '#192f6a']}
                    style={{
                        marginTop:5,
                        paddingTop: 5,
                        paddingBottom: 5,
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
                        Aléatoire
                    </Text>
                </LinearGradient>
            </TouchableOpacity >
        );
    }
}
export default StandardButton

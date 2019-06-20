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
                        paddingTop: 15,
                        paddingBottom: 15,
                        paddingLeft: 35,
                        paddingRight: 35,
                        alignItems: 'center',
                        borderRadius: 5 }}>
                    <Text
                        style={{
                            backgroundColor: 'transparent',
                            fontSize: 15,
                            color: '#fff',
                        }}>
                        {this.props.title}
                    </Text>
                </LinearGradient>
            </TouchableOpacity >
        );
    }
}
export default StandardButton

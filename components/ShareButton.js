import React from 'react';
import { ScrollView, StyleSheet, View,Text, Share, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default class ShareButton extends React.Component {
  render() {
          return (
            <TouchableOpacity
              style={styles.share_touchable_floatingactionbutton}
              onPress={() => Share.share({
                    title: 'Bantu-dico',
                     message: 'Hello !  Je te recommande cette application : Le dictionnaire pratique Français - Lingala - Sango
                     disponible sur apps store https://apps.apple.com/us/app/bantu-dico/id1555116636'
                   })}>
              <Ionicons name={'md-share'} size={30} color={'#d0d6d2'}/>
            </TouchableOpacity>

          )
  }
}

const styles = StyleSheet.create({
    share_touchable_floatingactionbutton: {
        position: 'absolute',
        width: 50,
        height: 50,
        right: 30,
        bottom:15,
        elevation: 4,
        zIndex: 2,
        borderRadius: 30,
        backgroundColor: '#214c98',
        justifyContent: 'center',
        alignItems: 'center'
      },
      share_image: {
        width: 30,
      }
});

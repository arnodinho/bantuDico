import React from 'react';
import { ScrollView, StyleSheet,Platform, View,Text} from 'react-native';
import StandardButton from '../components/StandardButton'
import Lingala from '../components/Lingala'
import Sango from '../components/Sango'
import Touchable from 'react-native-platform-touchable';
import ShareButton from '../components/ShareButton';

export default class LinksScreen extends React.Component {
  // Lorsque l'on crée un component custom, on doit obligatoirement réimplémenter la méthode render
  // et retourner (return) les éléments graphiques
  constructor(props) {
        super(props)
        this.state = {
           lingala:true,
           sango:false,
         }
         this._handleClick = this._handleClick.bind(this)
        this._manageDisplay =   this._manageDisplay.bind(this)
  }

  static navigationOptions = {
    title: 'Expressions courantes',
  };

  _handleClick(choice) {
    console.log(choice)
    if (choice == 'Sango'){
      this.setState({
         lingala: false,
         sango: true,
       })
    }else {
      this.setState({
         lingala: true,
         sango: false,
       })
    }
  }
  _manageDisplay(){
    if (this.state.lingala) {
      return( <Lingala/> )
    } else {
      return( <Sango/> )
    }

  }
  render() {
    return (
      <View style={styles.container}>
            <View style={styles.resulButtons}>
                <View style={{ flex:1, alignItems:'flex-end',marginRight:5 }} >
                    <StandardButton title="Sango"  handleClick = {this._handleClick}/>
                </View>
                <View style={{ flex:1, alignItems:'flex-start',marginLeft:5 }} >
                    <StandardButton title="Lingala" handleClick = {this._handleClick}/>
                </View>
            </View >

            <View style={{  flex: 8}}>
                <ScrollView style={{  marginTop: 15}}>
                  {this._manageDisplay()}
                </ScrollView>
                <ShareButton/>
            </View>

      </View>
    );
  }
    _handlePressSlack = () => {
        WebBrowser.openBrowserAsync('https://slack.expo.io');
    };

    _handlePressDocs = () => {
        WebBrowser.openBrowserAsync('http://docs.expo.io');
    };

    _handlePressForums = () => {
        WebBrowser.openBrowserAsync('http://forums.expo.io');
    };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
      ...Platform.select({
          ios: {
              shadowColor: 'black',
              shadowOffset: { height: -3 },
              shadowOpacity: 0.1,
              shadowRadius: 3,
          },
          android: {
              elevation: 20,
          },
      }),

      backgroundColor: '#d0d6d2',
      borderColor: '#214c98',
      borderWidth: 7,
      marginLeft: 5,
      marginRight: 5,
      marginTop:15,
      marginBottom: 15,

  },
  expressionsContainer: {
    paddingBottom: 15,
    flex:1,
    marginBottom: 15,
  },

    tabBarInfoText: {
        marginTop: 1,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 17,
        color: '#061646',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    resulButtons:{
        flex:1,
        flexDirection: 'row',
        marginBottom:10,
    },
});

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity ,ImageBackground} from 'react-native';


const mainGrideTile =(props) => {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={props.onSelect}
        >
        <View>
          <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
          <Text style={styles.title} >{props.title}</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );

};

const styles = StyleSheet.create({
  container:{
    flex:1,
    height:230,
    width: "50%",
    borderRadius:15,
    shadowOpacity:0.6,
    shadowOffset:{width:0, height:2},
    shadowRadius:2,
    elevation:5,
    justifyContent:'center',
    alignItems:'baseline'
  },
  title:{
    fontFamily:"Revolvingdor",
    fontSize:22,
    color:"#5FD213",
  },
  bgImage:{
    width:'95%',
    height:'95%',
    padding:15,
    marginTop:30,
    marginLeft:25
  }
});

export default mainGrideTile
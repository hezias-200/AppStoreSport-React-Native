import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity ,ImageBackground} from 'react-native';


const mainGrideTile =(props) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={props.onSelect}
        >
        <View style={{...styles.container,backgroundColor:props.color}}>
          <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
          <Text style={styles.title} >{props.title}</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );

};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  },
  container:{
    flex:1,
    height: 200,
    width: 275,
    borderRadius:15,
    shadowColor:"black",
    shadowOpacity:0.6,
    shadowOffset:{width:0, height:2},
    shadowRadius:10,
    elevation:3,
    justifyContent:'center',
    alignItems:'baseline'
  },
  title:{
    fontFamily:"Revolvingdor",
    fontSize:22,
    margin:10
  },
  bgImage:{
    width:'100%',
    height:'100%'
  }
});

export default mainGrideTile
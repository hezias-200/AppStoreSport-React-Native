import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";


const productItem = (props) =>{
    return(
        <TouchableOpacity 
        onPress={props.onSelectProduct} 
        >
            <View style={styles.productItem}>
                    <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
                      <View style={styles.titleContainer}>
                        <Text style={styles.title} numberOfLines={1}>
                          {props.title}
                        </Text>
                        <Text style={styles.price}>
                        {props.price}
                        </Text>
                        </View>
                    </ImageBackground>
                </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    productItem: {
      flex: 1,
      height: 400,
      width: "100%",
      shadowColor: "black",
      shadowOpacity: 0.6,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 10,
      elevation: 3, // for android
      justifyContent: "flex-end",
      alignItems: "flex-end",
    },
    bgImage: {
      width:'100%',
      height:'100%',
      padding:15,
      marginTop:15,
      marginLeft:10,
      justifyContent: "flex-end",
      alignItems:'baseline',
    },
    // Add style to title:
    titleContainer: {
      backgroundColor: "rgba(0,0,0,0.5)", // black color, bit transparent (0.5)
      paddingVertical: 5,
      paddingHorizontal: 15,
   
      
      
    },
    title: {
      fontFamily: "Revolvingdor",
      fontSize: 20,
      color: "white",
      textAlign: "center",
    justifyContent:'center',

    },
    price:{
      color:"white",
      textAlign:"center",
      fontSize:20,
      fontWeight:"bold"
    }
  });

  export default productItem;
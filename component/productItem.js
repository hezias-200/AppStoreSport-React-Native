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
      height: 200,
      width: 275,
      backgroundColor: "#ccc",
      borderRadius: 10,
      overflow: "hidden",
    },
    productRow: {
      flexDirection:"row",
    },
    productHeader: {
      height: "100%",
    },
    bgImage: {
      width: "100%",
      height: "100%",
      justifyContent: "flex-end",
    },
    // Add style to title:
    titleContainer: {
      backgroundColor: "rgba(0,0,0,0.5)", // black color, bit transparent (0.5)
      paddingVertical: 5,
      paddingHorizontal: 12,
    },
    title: {
      fontFamily: "Revolvingdor",
      fontSize: 14,
      color: "white",
      textAlign: "center",
    },
    price:{
      color:"white",
      textAlign:"center"
    }
  });

  export default productItem;
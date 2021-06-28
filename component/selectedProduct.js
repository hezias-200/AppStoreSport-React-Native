import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../data/SportContext";
import {
    Text,
    StyleSheet,
    Image,
    Button,
    ScrollView, View, Alert
} from "react-native";
//import { Dropdown } from 'react-native-material-dropdown';

const selectedProduct = props => {
    const { products, setCart } = useContext(DataContext)
    const [chosenItem, setChosenItem] = useState(null)
    useEffect(() => {
        let tempProduct = products.find(product => props.navigation.getParam("productId") == product.productIds)
        setChosenItem(tempProduct)
    }, [])
    if (chosenItem) {
        return (
            <ScrollView style={styles.container}>
                <Image source={{ uri: chosenItem.imageUrl }} style={styles.bgImage} />
                <View style={styles.content} >
                    <Text style={styles.text}>{chosenItem.productName}</Text>
                    <Text> {chosenItem.description}</Text>
                    <Text> {chosenItem.size}</Text>
                </View>
                <View><Button title="Add to cart" onPress={() => { 
                    setCart(prevCart => [...prevCart, chosenItem]);
                    Alert.alert("The product been Added!")
                     }} /></View>
            </ScrollView>
        )
    } else
        return (<View><Text>Waiting</Text></View>)


};
const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#fff',
    },
    content: {
        padding: 15
    },
    bgImage: {
        width: "100%",
        height: 100,
    },
    // dropdownStyle: {
    //     flex: 0.5,
    //     backgroundColor: 'grey',
    //     tintColor: '#000000',
    //     activityTintColor: 'red'
    // },
    text: {
        fontSize: 14,
        textAlign: "left",
        color: "black",
        marginBottom: 10,
        fontWeight: "bold"
    }
});

export default selectedProduct
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
//import DropdownMenu from 'react-native-dropdown-menu';


const selectedProduct = props => {
    const { products, setCart } = useContext(DataContext)
    const [chosenItem, setChosenItem] = useState(null)
    const [chosenSize, setSize] = useState(null)
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
                    <Text></Text>
                    <Text style={styles.description}> {chosenItem.description}</Text>
                    <Text></Text>
                    <Text></Text>
                </View>
                <View>
                    <Text style={styles.price}> {chosenItem.price}$</Text>
                    <Text></Text>
                    <Button
                        color={"black"}
                        title="Add to cart" onPress={() => {
                            setCart(prevCart => [...prevCart, chosenItem]);
                            Alert.alert("The product been Added!")
                        }} /></View>
                <Text></Text>
                <Text style={styles.reviewTxt}>REVIEW:</Text>
                <Text></Text>
                <View >
                    {chosenItem.review.map(item => (<Text style={styles.reviewBox}>{item}</Text>))}

                </View>
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
        height: 350,
    },
    //  dropdown: {
    //      flex: 0.5,
    //      backgroundColor: 'grey',
    //      fontSize:14
    //  },
    text: {
        fontSize: 22,
        textAlign: "left",
        color: "black",
        marginBottom: 10,
        fontWeight: "bold"
    },
    description: {
        fontSize: 14,
        textAlign: "left",
    },
    price: {
        fontSize: 20,
        fontWeight: "bold",

    },
    reviewBox: {
        borderColor: "black",
        borderWidth: 1,
        fontSize: 14
    },
    reviewTxt: {
        fontWeight: "bold",
        fontSize: 14
    }

});

export default selectedProduct

/*  <Dropdown data={
  list of menu items
this.chosenItem.size}/> */
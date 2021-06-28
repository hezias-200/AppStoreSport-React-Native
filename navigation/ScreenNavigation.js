import { createAppContainer } from "react-navigation";
import React from 'react'
import { createStackNavigator } from "react-navigation-stack";
import { View } from 'react-native'
import MainScreen from "../screens/MainScreen";
import categoryScreen from "../screens/categoryScreen";
import productScreen from "../screens/productScreen";
import cartScreen from "../screens/cartScreen";
import paymentScreen from "../screens/paymentScreen";
import thankyou from "../screens/thankYou";
import Colors from '../constants/Colors';
import selectedProduct from "../component/selectedProduct";
import Icon from 'react-native-vector-icons/AntDesign';
import { NavigationActions } from "react-navigation";

const makeHeader = ({ navigation }) => ({
    headerRight: () => <View style={{ flexDirection: 'row', padding: 10 }}>
        <Icon name="home" onPress={() => navigation.navigate("main")} size={30} color="black" style={{ marginRight: 10 }} />
        <Icon name="shoppingcart"  onPress={() => navigation.navigate("cartScreen")} size={30} color="black" />
    </View>
})

const ScreenNavigator = createStackNavigator(
    {
        main: {
            screen: MainScreen,
            navigationOptions:makeHeader
        },
            categoryScreen: {
                screen: categoryScreen,
                navigationOptions: makeHeader

            },
            productScreen: {
                screen: selectedProduct,
                navigationOptions: makeHeader
            },
            cartScreen: {
                screen: cartScreen,
                navigationOptions: makeHeader
            },
            paymentScreen: {
                screen: paymentScreen,
                navigationOptions: makeHeader
            },
            thankyou: thankyou,
        },
    
    {

        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Colors.Primary
            },
            headerTintColor: 'white',

        }
    }
);


export default createAppContainer(ScreenNavigator);

//shopping_cart - השם של האיקון לעגלת קניות
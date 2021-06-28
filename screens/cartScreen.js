import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TextInput, Alert } from 'react-native';
import { DataContext } from '../data/SportContext';
const cartScreen = props => {
  const { cart, setCart, coupons } = useContext(DataContext)
  const [unicCart, setUnicCart] = useState([])
  const [counter, setCounter] = useState({})
  const [sumPrice, setSumPrice] = useState(0)
  const [discountAllow, setDiscountAllow] = useState(true)


  const [couponInput, setCouponInput] = useState('')

  const discount = () => {
    if(!discountAllow){
      Alert.alert("you already used your coupon!")
      return
    }
    setDiscountAllow(false)
    switch (couponInput) {
      case '000':
            setSumPrice(price=>price-price*0.1)
        break;
        case '111':
          setSumPrice(price=>price-price*0.2)
        break;
        case '222':
          setSumPrice(price=>price-price*0.3)
          break;
      default:
          Alert.alert("the coupon is invalid!")
    }
  }
  const totalPriceInCart = () => {
    let tempSumPrice = 0;
    cart.map(item => {
      tempSumPrice += item.price
    })
    setSumPrice(tempSumPrice)
  }
  const deleteItem = (itemName) => {
    if (counter[itemName] > 0) {
      counter[itemName]--
      setCounter(counter)
    }
    let tempCart = []
    let deleted = false
    for (let index = 0; index < cart.length; index++) {
      if (cart[index].productName == itemName && !deleted) {
        deleted = true
        continue
      }
      tempCart.push(cart[index])
    }
    setCart(tempCart)
  }


  useEffect(() => {
    let tempCounter = {}
    cart.forEach((item, index) => {
      if (tempCounter[item.productName])
        tempCounter[item.productName]++
      else
        tempCounter[item.productName] = 1
    })
    setCounter(tempCounter)
    let tempUnicCart = Array.from(new Set(cart.map(JSON.stringify))).map(JSON.parse);
    setUnicCart(tempUnicCart)
    totalPriceInCart()
  }, [cart])
  return (
    <ScrollView style={styles.container}>
      {unicCart.map(item =>
        <View style={{ flexDirection: 'row' }}>
          <Text>{item.productName.slice(0, 40)}  Count: {counter[item.productName]} price:{item.price}</Text>


          <Button onPress={() => deleteItem(item.productName)} title="X" />
        </View>)}
      <Text>Total Price :{sumPrice + '$'}</Text>
      <Button title="Payment" onPress={() => props.navigation.navigate("paymentScreen")} />
      <TextInput onChangeText={(txt) => setCouponInput(txt)} style={{ borderWidth: 1 }} />
      <Button title="discount" onPress={discount} />
    </ScrollView>
  );
}
cartScreen.navigationOptions = {
  jeaderTitle: "CART"
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
export default cartScreen
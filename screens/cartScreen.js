import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TextInput, Alert } from 'react-native';
import { DataContext } from '../data/SportContext';
const cartScreen = props => {
  const { cart, setCart, coupons, setSumCart } = useContext(DataContext)
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
  const chackCart =() =>{
    if(sumPrice > 0){
    props.navigation.navigate("paymentScreen")
    setSumCart(sumPrice)
  }
    else
      Alert.alert("the cart is ampty")
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
      <Text style={styles.cart}>MY CART</Text>
      <Text></Text>
      {unicCart.map(item =>
        <View style={styles.productditels}>
          <Text style={styles.product}>{item.productName.slice(0, 20)} </Text>
          <Text style={styles.product}> price:{item.price}$</Text>
          <Text style={styles.product}> Count: X {counter[item.productName]}</Text>
          <Button onPress={() => deleteItem(item.productName)} color={"#5AEB59"}title="X" />
        </View>)}
        <Text></Text>
      <Text style={styles.total}>Total Price :{sumPrice + '$'}</Text>
      <Text></Text>
      <View style={styles.discount}>
      <TextInput placeholder="Cupon" onChangeText={(txt) => setCouponInput(txt)} style={styles.cupon} />
      <Text></Text>
      <Button color={'#5AEB59'} fontWeight={'bold'} title="set Discount" onPress={discount} />
      </View>
      <Text></Text>
      <View style={styles.discount}>
         <Button color={'#5AEB59'} title="Payment" onPress={chackCart} />
      </View>
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
  },
  total:{
    fontSize:22,
    fontWeight:"bold",
  },
  discount:{
    flexDirection:'row',
    justifyContent:'center'
  },
  cupon:{
    width:100,
    borderWidth: 1,
    textAlign:"center"
    
  },
  cart:{
    borderWidth: 1,
    fontSize:22,
    fontWeight:"bold",
    textAlign:'center'
  },
  productditels:{
    flexDirection: 'row',
    borderWidth:1
  },
  product:{
    flexDirection:"column",
    borderWidth:1,
    fontSize:20
  }
});
export default cartScreen
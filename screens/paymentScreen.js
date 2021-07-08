import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { DataContext } from '../data/SportContext';

const paymentScreen = props => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const { sumCart } = useContext(DataContext)

  const [isValidMail, setIsValidMail] = useState(false);
  const [isValidPhone, setIsValidPhone] = useState(false);
  const [getEmail, setEmail] = useState("");
  const [getPhone, setPhone] = useState("");
  const [withDelivery, addDelivery] = useState(0);
  const [ischosen, setIschosen] = useState(false);
  const [getYear, setYear] = useState(0)
  const [validYear, setValidYear] = useState(false)
  const [getMonth, setMonth] = useState(0)
  const [validMonth, setValidMonth] = useState(false)



  //
  const emailRegex = /\S+@\S+\.\S+/;

  const onSubmit = data => {
    console.log(data);
    if (emailRegex.test(data.email)) {
      setEmail(data.email)
      setIsValidMail(true);
    }
    else {
      Alert.alert("wrong input try again")
    }
    if (isNaN(data.phone))
      Alert.alert("enter only Digits")
    else {
      setPhone(data.phone)
      setIsValidPhone(true)
    }

  };
  const cardInfo = () => {
    if (getMonth > 0 && getMonth < 13 && getYear > 21) {
      setValidMonth(true)
      setValidYear(true)
    }
    if (validMonth && validYear) {
      props.navigation.navigate({
        routeName: 'thankyou',
      });
      Alert.alert("last")

    }
  }

  let continuePay;
  if (isValidMail && isValidPhone) {
    continuePay = (
      <View>
        <Text></Text>
        <Text style={styles.text}>selcet a delivery:</Text>
        <TouchableOpacity onPress={() => addDelivery(sumCart + 5)}>
          <Text style={styles.delivery}>
            regular delivery: 5$</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => addDelivery(sumCart + 15)}>
          <Text style={styles.delivery}>express delivery: 15$</Text>
        </TouchableOpacity>
        <Text></Text>

        <Text style={styles.cart}> The Total With The Delivery is: {withDelivery}$</Text>

        <TextInput
          style={styles.TextInputStyle}
          placeholder="Card Number"
          keyboardType="numeric"
          maxLength={16}
          minLength={6}
        />
        <View style={styles.exp}>
          <TextInput style={styles.TextInputStyle}
            placeholder="Month"
            keyboardType="numeric"
            maxLength={2}
            onChangeText={txt => setMonth(Number(txt))}
          />
          <TextInput style={styles.TextInputStyle}
            placeholder="Year"
            keyboardType="numeric"
            maxLength={2}
            onChangeText={txt => setYear(Number(txt))}
          />
          <TextInput style={styles.TextInputStyle}
            placeholder="CVV"
            keyboardType="numeric"
            maxLength={3}
          />
        </View>
        <TextInput style={styles.TextInputStyle}
          placeholder="Card Holder Name"
        />
        <Button color={"#5AEB59"} title="pay" onPress={cardInfo} />
      </View >
    )
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Full Name</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.TextInputStyle}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="name"
        defaultValue=""
      />
      {errors.name && <Text>This is required.</Text>}
      <Text style={styles.text}  >Email</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={isValidMail ? styles.success : styles.error}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
        defaultValue=""
      />
      {errors.email && <Text>This is required.</Text>}
      <Text style={styles.text}>Phone</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.TextInputStyle}
            keyboardType="numeric"
            onChangeText={onChange}
            value={value}
            maxLength={10}
            minLength={9}
          />
        )}
        name="phone"
        defaultValue=""
      />
      {errors.phone && <Text>This is required.</Text>}

      <Text style={styles.text}>City</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.TextInputStyle}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="city"
        defaultValue=""
      />
      {errors.city && <Text>This is required.</Text>}
      <Text style={styles.text}>Address</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.TextInputStyle}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="address"
        defaultValue=""
      />
      {errors.address && <Text>This is required.</Text>}
      <Text style={styles.cart}> The Total is: {sumCart}$</Text>
      <Button color={"#5AEB59"} title="contiue" onPress={handleSubmit(onSubmit)} />
      {continuePay}

    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  TextInputStyle: {
    textAlign: 'center',
    height: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    backgroundColor: "#F2F3F4"
  },
  TextInput: {
    textAlign: 'center',
    height: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,

  },
  cart: {
    textAlign: "center",
    fontWeight: "bold",
    color: "black",
    fontSize: 20
  },
  delivery: {
    textAlign: "center",
    fontWeight: "bold",
    color: "grey",
    fontSize: 20,
    borderWidth: 1,
    borderColor: "black",
  },
  text: {
    textAlign: 'left',
    fontWeight: "bold",
    fontSize: 18,
  },
  success: {
    textAlign: 'center',
    height: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    color: "blue",
    backgroundColor: "#F2F3F4"
  },
  error: {
    textAlign: 'center',
    height: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    color: "red",
    backgroundColor: "#F2F3F4"
  },
  exp: {
    justifyContent: 'center',
    flexDirection: 'row',

  },
  chocen: {
    backgroundColor: "grey"
  },
  clear: {
    backgroundColor: "white"
  },
  btn: {
    backgroundColor: 'black',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    fontSize: 20,
    fontWeight: "bold"
  },
});

export default paymentScreen

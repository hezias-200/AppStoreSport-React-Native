import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';



const thankYou = () => {
 
  return (
    <View style={styles.container}>
    <Text>Thank you for thr order</Text>
    <Button
    title="TO Main Screen"
    onPress={()=>{
      props.navigation.replace("main")
    }}/>
  </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default thankYou





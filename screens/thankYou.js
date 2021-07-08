import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';



const thankYou = () => {

  return (
    <View style={styles.container}>
      <View>
        <Image source={{
          uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-us0.puzzlegarage.com%2Fimg%2Fpuzzle%2F9%2F1257_preview.v2.jpg&f=1&nofb=1'
        }} 
        fadeDuration={300}
        style={styles.img}/>
      </View>
      <Text>Thank you for thr order</Text>
      <Button
        title="GO TO THE Main Screen"
        onPress={() => {
          props.navigation.replace("main")
        }} />
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
  img: {
    width: 250,
    height: 250
  },
  txt:{
    fontSize:14,
    color:'#CAE76F'
  }
});

export default thankYou





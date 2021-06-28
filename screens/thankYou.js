import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const MainScreen = props => {
  return (
    <View style={styles.container}>
      <Text>thank you for thr order</Text>
      <Button
      title="TO Category"
      onPress={()=>{
          props.navigation.replace('main')
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

export default MainScreen
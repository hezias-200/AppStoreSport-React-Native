import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SportContext from './data/SportContext';
import AppLoading from 'expo-app-loading';
import  * as Font from 'expo-font';

import ScreenNavigation from './navigation/ScreenNavigation';

const fetchFonts = async() => {
  await Font.loadAsync({
    "Revolvingdor": require('./assets/fonts/Revolvingdor.otf')
  })
}
export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded){
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={()=>setFontLoaded(true)}
        onError={(err)=> console.log(err)}
      />
     
    );
  }
  return (<SportContext>
    <ScreenNavigation/>
  </SportContext>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

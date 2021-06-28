import React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import { CATEGORY } from '../data/dummy-data';



import MainGridTile from '../component/mainGridTile';
const MainScreen = props => {
  const renderGridItem = ({item}) => {
    return (
    <MainGridTile
        title={item.title}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'categoryScreen',
            params: {
              categoryId: item.id
            }
          });
        }}
        image={item.background}
      />
    );
  };
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={CATEGORY}
      renderItem={renderGridItem}
      numColumns={2}
     
    />
  )
}

MainScreen.navigationOptions = {
  headerTitle: 'Products Category',

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
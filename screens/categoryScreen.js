import React from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';

import { CATEGORY, PRODUCT } from '../data/dummy-data';
import ProductItem from '../component/productItem';

const categoryScreen = props => {

  const categoryId = props.navigation.getParam('categoryId');
 // const selectedCategory = CATEGORY.find(c => c.id === categoryId);
  
const renderProductItem =({item}) =>{
  return(
    <ProductItem 
     title={item.productName}
     price={item.price+'$'}
     onSelectProduct={() => {
         props.navigation.navigate({
         routeName:'productScreen',
         params:{ 
           productId: item.productIds,
          }
       });
     }}
     image={item.imageUrl}
     />
  );
};
  const displayProduct = PRODUCT.filter(
    (product) => product.categoryIds.indexOf(categoryId)>=0
  );
  return (
    <View style={styles.container}>
     <FlatList
      data = {displayProduct}
      keyExtractor={(item) => item.id}
      renderItem = {renderProductItem}
      style={{width:"100%"}}
      numColumns={2}
      />
    </View>
  );
}

categoryScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam('categoryId');
  const selectedId = CATEGORY.find(c => c.id === categoryId);
 
  return {
    headerTitle: selectedId.title,
    
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});

export default categoryScreen
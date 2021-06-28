import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { PRODUCT } from '../data/dummy-data';
import selectedProduct from '../component/selectedProduct';


const productScreen = props => {
  const {products} = useContext(DataContext)
    const [chosenItem,setChosenItem] = useState()
    useEffect(()=>{
        let tempProduct=products.find(product =>props.navigation.getParam("productId") == product.productIds)
        setChosenItem(tempProduct)
      },[])
  
  const renderProductItem = ({ item }) => {
    return (
      <selectedProduct
        title={item.productName}
       price={item.price}
       description={item.description}
        size={item.size}
        onSelectBuy={() => {
          props.navigation.navigate({
            routeName: 'productScreen',
            params:{
              productId: item.productIds
            }
          });
        }}
        image={item.imageUrl}
      />
    )
  };
  // const display = selectedArray.filter(
  //   (product) => product.productIds.indexOf(displayProduct)>=0
  // );
  // const display = PRODUCT.filter(
  //   (product) => product.productIds.indexOf(selected)>=0)

 console.log(selected);
  return (
    <View style={styles.container}>
     <FlatList
        data={{selected}}
        keyExtractor={(item) => item.id}
        renderItem={renderProductItem}
        style={{ width: "100%" }}
      />
    </View>
  )
}

/*
productScreen.navigationOptions = (navigationData) => {
  const displayProduct = navigationData.navigation.getParam("productId");
  const selectedProduct = PRODUCT.find((product) => product.productId === displayProduct);
  return {
    hederTitle: selectedProduct.title
  }
}
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default productScreen
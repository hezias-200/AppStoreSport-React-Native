import React,{createContext, useState} from 'react';
import { CATEGORY,PRODUCT } from './dummy-data';
export const DataContext = createContext() 

const SportContext = (props) => {
    const [categories,setCategories] = useState(CATEGORY)
    const [products,setProducts] = useState(PRODUCT)
    const [cart,setCart] = useState([])
    const [coupons,setCoupons] = useState(['000','111','222'])
    const [sumCart, setSumCart] = useState(0)
   
    return (
    <DataContext.Provider value={{categories:categories,products:products,cart:cart,setCart:setCart,coupons:coupons, sumCart:sumCart ,setSumCart:setSumCart}}>
     {props.children}
    </DataContext.Provider>
        )
};



export default SportContext
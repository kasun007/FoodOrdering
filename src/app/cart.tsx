import { View, Text } from "@/components/Themed";
import { CartContext,useCart } from "@/providers/CartProvider";
import { CartItem,Product } from "@/types";
import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { FlatList, Platform } from "react-native";
import {  } from "./types";

import CartListItem from "@/components/CartListItem";
 


const CartScreen = () => {

    const { items } =useCart();
    return (
        <View>
            <FlatList data={items} renderItem={({item})=><CartListItem cartItem={item} />}/>
             
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
       </View>
   );
};



export default CartScreen;
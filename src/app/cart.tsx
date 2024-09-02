import { View, Text } from "@/components/Themed";
import { CartContext,useCart } from "@/providers/CartProvider";
import { CartItem,Product } from "@/types";
import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { FlatList, Platform } from "react-native";
import {  } from "./types";

import CartListItem from "@/components/CartListItem";
import Button from "@/components/Button";
 


const CartScreen = () => {

    const {items,total} = useCart();
    return (
        <View>
            <FlatList data={items} renderItem={({item})=><CartListItem cartItem={item} />} contentContainerStyle ={{gap:10}}/>

            <Text style ={{marginTop:20,fontSize:20,fontWeight:500}}>Total : ${total}</Text>
            <Button text="Checkout" onPress={()=>{}}/>
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
       </View>
   );
};



export default CartScreen;
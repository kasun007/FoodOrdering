import { Stack, useLocalSearchParams } from "expo-router";
import { View } from "../../../components/Themed";
import { Text, Image, StyleSheet, Pressable } from "react-native";
import products from '@assets/data/products';
import { defaultPizzaImage } from "@/components/ProductListItem";
import { useState } from "react";
import  Button  from "@/components/Button";

const ProductDetailsScreen = () => {

  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id.toString() === id);
  const [selectedSize, setSelectedSize] = useState('M');
  const sizes = ['S', 'M', 'L', 'XL'];
  if (!product) {
    return <Text>Product not found</Text>;
  }

const addToCart = () => { 
  console.warn('Add to cart' );
}

  return (
    <View>
      <Stack.Screen options={{ title: product?.name }} />
      <Image source={{ uri: product.image || defaultPizzaImage }} style={styles.Image} />
      <Text> Select Size </Text>
      <View style={styles.sizes}>

        {sizes.map((size) => (
 
        <Pressable   onPress={()=>{setSelectedSize(size)}}               key={size} style={[styles.size,{backgroundColor:selectedSize == size ? 'gainsboro' :'white',},]}  >
          <Text key={size} style={[styles.sizeText,{backgroundColor:selectedSize == size ? 'gainsboro' :'white',},]}   >{size}  </Text>
        </Pressable>))}


        
      </View> 
    
    

      <Text style={styles.sizeText}>Price:{product.price} </Text>
      <Button text="Add to cart" onPress={ addToCart}/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    flex: 1,
    maxWidth: '100%',
  },
  Image: { width: '100%', aspectRatio: 1 },
  price: {fontSize: 18, fontWeight: 'bold',marginTop :'auto'  },
  sizes: { flexDirection: 'row', justifyContent: 'space-around', },
  size: { 
    backgroundColor: 'gainsboro',
    width: 50,
   
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50, // Add this line to round the background
  },
 
  sizeText: { fontSize: 20, fontWeight: '500', }

});
export default ProductDetailsScreen; 
import { Link, Stack, router, useLocalSearchParams } from "expo-router";
import { View } from "../../../components/Themed";
import { Text, Image, StyleSheet, Pressable } from "react-native";
import products from '@assets/data/products';
import { defaultPizzaImage } from "@/components/ProductListItem";
import { useState } from "react";
import Button from "@/components/Button";
import { useCart } from "@/providers/CartProvider";
import { PizzaSize } from "@/types";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const ProductDetailsScreen = () => {

  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id.toString() === id);
  const [selectedSize, setSelectedSize] = useState<PizzaSize>('M');
  const sizes: PizzaSize[] = ['S', 'M', 'L', 'XL'];
  const router = useRouter();
  const { addItem } = useCart();
 
  if (!product) {
    return <Text>Product not found</Text>;
  }

  const addToCart = () => {

    if (!product) {
      return;
    }
    addItem(product, selectedSize);
    router.push('/cart');

  }

  return (
    <View style={styles.container}>
      <Stack.Screen  options={{
        title: 'Menu', headerRight: () => (
          <Link href={`/(admin)/menu/create?id=${id}`} asChild>
            <Pressable>
              {({ pressed }) => (
                <FontAwesome
                  name="pencil"
                  size={25}
                  color={Colors.light.tint}
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          </Link>
        ),
      }} />
      <Stack.Screen options={{ title: product?.name }} />
      <Image source={{ uri: product.image || defaultPizzaImage }} style={styles.Image} />
      <Text style={styles.title}>Price:{product.name} </Text>
      <Text style={styles.price}>Price:{product.price} </Text>

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
  price: { fontSize: 18, fontWeight: 'bold', marginTop: 'auto' },
  sizes: { flexDirection: 'row', justifyContent: 'space-around', },
  title: { fontSize: 20, fontWeight: 'bold', },
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
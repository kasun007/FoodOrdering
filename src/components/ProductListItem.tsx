import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Colors from '../constants/Colors';

import { Link, useSegments } from 'expo-router';
import { Product } from '@/app/types';



export const defaultPizzaImage =
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';

type ProductListItemProps = {
  product: Product;
};

const ProductListItem = ({ product }: ProductListItemProps) => {
  const segments = useSegments();

  return (
    <Link href={`/menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image source={{ uri: product.image || defaultPizzaImage }} style={styles.image} />
        <Text style={styles.title} numberOfLines={3}>{product.name} </Text>
        <Text style={styles.price}>from ${product.price}</Text>

      </Pressable>
    </Link>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    flex: 1,
    maxWidth: '50%',
  },

  image: {
    width: '100%',
    aspectRatio: 1,
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold',
  },
});

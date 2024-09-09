
import { CartItem } from "@/types";
import { PropsWithChildren, createContext, useContext, useState } from "react";
import {randomUUID} from 'expo-crypto';
import { Tables } from "@/database.types";

type Product =Tables<'products'>;

type CartType = {
  items: CartItem[];
  addItem: (product: Product, size: CartItem['size']) => void;
  updateQuantity: (itemId: string, amount: -1 | 1) => void;
  total: number;
 

};
export const CartContext = createContext<CartType>({
  items: [],
  addItem: () => {},
  updateQuantity:() => {},
  total: 0,
 

});

function CartProvider({ children }: PropsWithChildren) {
  const [items, setItems] = useState<CartItem[]>([]);
  const addItem = (product: Product, size: CartItem['size']) => {
    // Check if the item already exists in the cart
    const existingItem = items.find((item) => item.product_id === product.id && item.size === size);
  
    // If the item exists, update its quantity
    if (existingItem) {
      updateQuantity(existingItem.id, 1);
      return;
    }
  
    // If the item does not exist, create a new cart item
    const newCartItem: CartItem = {
      id: randomUUID(),
      product,
      product_id: product.id,
      size,
      quantity: 1,
    };
  

  
    // Add the new cart item to the state
    setItems([...items, newCartItem]);
  };
  
  const total = items.reduce(
    (sum, item) => (sum += item.product.price * item.quantity),
    0
  );
  // Function to update the quantity of an item in the cart
const updateQuantity = (itemId: string, amount: -1 | 1) => {
  // Update the quantity of the item and remove it if the quantity is 0
  setItems(
    items
      .map((item) =>
        item.id !== itemId
          ? item
          : { ...item, quantity: item.quantity + amount }
      )
      .filter((item) => item.quantity > 0)
  );
};

  return (
    <CartContext.Provider value={{ items, addItem ,updateQuantity,total}}>
      {children}
    </CartContext.Provider>
  );
}

  export default CartProvider;

  export const useCart = () => {
    return useContext(CartContext);
  };
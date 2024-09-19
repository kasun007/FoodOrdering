import { FlatList } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
 
import { Stack } from 'expo-router';
import { Order } from '@/types';
import orders from '@assets/data/orders';
import OrderListItem from '@/components/OrderListItem';
import { useAdminOrderList } from '@/api/orders';

export default function OrdersScreen() {

  const { data: orders, isLoading, error } = useAdminOrderList({ archived: true });
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Stack.Screen options={{ title: 'Archive' }} />
      <FlatList
        data={orders}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        renderItem={({item}) => <OrderListItem order={item} />}
      />
    </GestureHandlerRootView>
  );
}
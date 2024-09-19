import { FlatList } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import orders from '../../../../../assets/data/orders';
import OrderListItem from '../../../../components/OrderListItem';
import { Stack } from 'expo-router';
import { Order } from '@/types';

export default function OrdersScreen() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Stack.Screen options={{ title: 'Orders' }} />
      <FlatList
        data={orders}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        renderItem={({item}) => <OrderListItem order={item} />}
      />
    </GestureHandlerRootView>
  );
}
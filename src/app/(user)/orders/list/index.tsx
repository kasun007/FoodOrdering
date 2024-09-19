import { FlatList } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import orders from '../../../../../assets/data/orders';
import OrderListItem from '../../../../components/OrderListItem';
import { Stack } from 'expo-router';
import { Order } from '@/types';
import { useMyOrderList } from '@/api/orders';
import { ActivityIndicator } from 'react-native';

export default function OrdersScreen() {

  const {data:orders,isLoading ,error} = useMyOrderList( ); 

  if(isLoading){
    return  <ActivityIndicator/>  ;
  }

  if(error) {
    return <div> Failed to Fetch</div>;
  }
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
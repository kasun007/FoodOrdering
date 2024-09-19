import { FlatList } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
 
import { Stack } from 'expo-router';
import { Order } from '@/types';
 
import OrderListItem from '@/components/OrderListItem';
import { useAdminOrderList } from '@/api/orders';
import { ActivityIndicator } from 'react-native';
import { useEffect } from 'react';
import { supabase } from '@/lib/superbase';
import { useQueryClient } from '@tanstack/react-query';

export default function OrdersScreen() {

  const { data: orders, isLoading, error } = useAdminOrderList({ archived: false });

  

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <div>Failed to Fetch</div>;
  }
 

  return ( 
    <GestureHandlerRootView style={{flex: 1}}>
      <Stack.Screen options={{ title: 'Active ' }} />
      <FlatList
        data={orders}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        renderItem={({item}) => <OrderListItem order={item} />}
      />  
    </GestureHandlerRootView>
  ); 
}
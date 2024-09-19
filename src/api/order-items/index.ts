 
import { supabase } from '@/lib/superbase';
import { InsertTables } from '@/types';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';

export const useInsertOrderItems = () => {
  return useMutation({
    async mutationFn(items: InsertTables<'order_items'>[]) {
      const { error, data: newProduct } = await supabase
        .from('order_items')
        .insert(items)
        .select();

      if (error) {
        console.error(error);
        throw new Error(error.message);
      }
      return newProduct;
    },


     
  });
};

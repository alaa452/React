import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import authAxiosInstance from '../api/authAxiosInstance';
import i18n from '../i18next';

function useAddToCart() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async(values)=>{
            return await authAxiosInstance.post('/Carts',{
                ProductId: values.productId,
                Count: values.count
            });
        },onSuccess:()=>{
            queryClient.invalidateQueries({queryKey: ['cart',i18n.language]});// Invalidate the cache for the 'cart' query with the current language, prompting a refetch of the cart data to reflect the updated state after adding an item to the cart.
        }
    });
}

export default useAddToCart
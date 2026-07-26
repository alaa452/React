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
            queryClient.invalidateQueries({queryKey: ['cart',i18n.language]});
        }
    });
}

export default useAddToCart
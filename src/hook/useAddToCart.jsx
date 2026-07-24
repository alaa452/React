import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import authAxiosInstance from '../api/authAxiosInstance';

function useAddToCart() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async(values)=>{
            return await authAxiosInstance.post('/Carts',{
               ذ ProductId: values.productId,
                Count: values.count
            });
        },onSuccess:()=>{
            queryClient.invalidateQueries({queryKey: ['cart','en']});
        }
    });
}

export default useAddToCart
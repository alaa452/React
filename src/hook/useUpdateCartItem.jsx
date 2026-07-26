import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import authAxiosInstance from '../api/authAxiosInstance';
import i18n from '../i18next';

function useUpdateCartItem() {
    const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async({productId, count})=>{
        await authAxiosInstance.patch(`/Carts/${productId}`, {
            count
        })
    },onSuccess:()=>{
        queryClient.invalidateQueries({queryKey: ['cart',i18n.language]});
    }
  })
}

export default useUpdateCartItem
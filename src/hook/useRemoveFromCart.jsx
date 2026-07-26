import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import authAxiosInstance from '../api/authAxiosInstance';
import i18n from '../i18next';

function useRemoveFromCart() {

  const query = useQueryClient();
  return useMutation({
    mutationFn: (cartItemId)=>{
      return authAxiosInstance.delete(`/Carts/${cartItemId}`);
    },
    onSuccess:()=>{
      query.invalidateQueries({queryKey: ['cart',i18n.language]});
    }
  })
  
  
}

export default useRemoveFromCart
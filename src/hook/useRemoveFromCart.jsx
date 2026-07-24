import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import authAxiosInstance from '../api/authAxiosInstance';

function useRemoveFromCart() {

  const query = useQueryClient();
  return useMutation({
    mutationFn: (cartItemId)=>{
      return authAxiosInstance.delete(`/Carts/${cartItemId}`);
    },
    onSuccess:()=>{
      query.invalidateQueries({queryKey: ['cart','en']});
    }
  })
  
  
}

export default useRemoveFromCart
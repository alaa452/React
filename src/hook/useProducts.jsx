import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import axiosInstance from '../api/axiosInstance';

function useProducts() {
    const token = localStorage.getItem('token');
    const getProducts = async()=>{
            const response = await axiosInstance.get(`/Products`,{
                token,
            });
            return response.data;
        }
        const query = useQuery({
                queryKey:['products'],
                queryFn:getProducts,
                staleTime:1000 * 60 * 5 
            })
  return query;
}

export default useProducts
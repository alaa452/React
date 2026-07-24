import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import axiosInstance from '../api/axiosInstance';

function useCategories() {
    const token = localStorage.getItem('token');
    const getCategories = async()=>{
            const response = await axiosInstance.get(`/Categories`,{
                token,
            });
            return response.data;
        }
        const query = useQuery({
                queryKey:['cateogires'],
                queryFn:getCategories,
                staleTime:1000 * 60 * 5 
            })
  return query;
}

export default useCategories
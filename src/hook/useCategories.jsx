import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'

function useCategories() {
    const getCategories = async()=>{
            const response = await axios.get(`${import.meta.env.VITE_BURL}/Categories`,{
                headers:{
                    "Accept-Language":"en"
                }
            })
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
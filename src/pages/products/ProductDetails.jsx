import React from 'react'
import useProduct from '../../hook/useProduct'
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import useAddToCart from '../../hook/useAddToCart';

export default function ProudctDetails() {
    const {id} = useParams();
    const {mutate:AddToCart} = useAddToCart();
    const {data,isError,isLoading,error}= useProduct(id);
    if(isLoading) return <CircularProgress />
  return (
    <Box>
        <Typography>{data.response.name}</Typography>
        <Typography>{data.response.description}</Typography>

        <Button onClick={()=>{AddToCart({productId: data.response.id, count: 1})}}>Add to Cart</Button>
    </Box>
  )
}

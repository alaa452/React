import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import authAxiosInstance from '../../api/authAxiosInstance';
import { UserContext } from '../../context/UserContext';
import { useCounterStore } from '../../store/useCounterStore';
import useAuthStore from '../../store/useAuthStore';
import CircularProgress from '@mui/material/CircularProgress';
import useCart from '../../hook/useCart';
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import useRemoveFromCart from '../../hook/useRemoveFromCart';
export default function Cart() {

  const {data,isLoading,isError,error} = useCart();
  const {mutate:removeFromCart,isPending} = useRemoveFromCart();

  if(isLoading) return <CircularProgress />
  if(isError) return <div>Error: {error.message}</div>
  console.log(data)
  return (
    <Box component = "section">
      <Typography variant = 'h1'>Cart</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
            
          </TableHead>

          <TableBody>
            {data.items.map((item)=>(
              <TableRow key = {item.id}>
                <TableCell>{item.productName}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{item.count}</TableCell>
                <TableCell>{item.totalPrice}$</TableCell>
                <TableCell><Button color='error' disabled={isPending} onClick={() => removeFromCart(item.productId)}>Remove</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>

  )
}

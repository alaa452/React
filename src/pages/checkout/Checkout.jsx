import React, { useState } from 'react'
import useCart from '../../hook/useCart';
import { Box, Button, CircularProgress, FormControl, InputLabel, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import useCheckout from '../../hook/useCheckout';

function Checkout() {
    const {data,isLoading,isError,error} = useCart();
    const [paymentMethod, setPaymentMethod] = useState('');
    const {mutate: checkoutMutate} = useCheckout();

    if(isLoading) return <CircularProgress />
    if(isError) return <Box color="error">{error.message}</Box>
  return (  
       <Box component = "section">
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
                <TableCell>
                  <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <Typography>{item.count}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{item.totalPrice}$</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Payment Method</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={paymentMethod}
            label="Payment Method"
            onChange={(e) => setPaymentMethod(e.target.value)}
        >
            <MenuItem value={'cash'}>Cash</MenuItem>
            <MenuItem value={'Visa'}>Visa</MenuItem>
        </Select>
        </FormControl>

        <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={() => checkoutMutate({ paymentMethod })}>
          Pay Now
        </Button>
      </Box>
  )
}

export default Checkout
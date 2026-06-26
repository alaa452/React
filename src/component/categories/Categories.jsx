import { Box, CircularProgress, Typography } from '@mui/material';
import axios from 'axios'
import React from 'react'
import useCategories from '../../hook/useCategories';

function Categories() {
    const {data,isError,isLoading,error} = useCategories();
    
    if(isLoading) return <CircularProgress />
    if(isError) return <Typegraphy color='red'>{error}</Typegraphy>
  return (
    <div>
        {data.response.data.map((category)=><Box> <Typography>{category.name}</Typography></Box>)}
    </div>
  )
}

export default Categories
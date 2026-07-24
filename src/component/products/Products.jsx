import React from 'react'

import { Box, Card, CardContent, CardMedia, CircularProgress, Grid, Typography } from '@mui/material';
import useProducts from '../../hook/useProducts';
import { Link } from 'react-router-dom';

export default function Products() {

    const { data, isLoading, isError, error } = useProducts();
    if (isLoading) return <CircularProgress />

    return (
        <Box className="products" component="section">
            <Typography component="h1" variant='h2'> Products </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }}>
                {data.response.data.map((product) => {
                    return <Grid size={{ xs: 6, md: 4 }} key={product.id}>
                        <Link to={`/products/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Card >
                                <CardMedia component="img" image={product.image} sx={{ width: 200 }}>

                                </CardMedia>
                                <CardContent>
                                    <Typography component="h3" variant="h2">{product.name}</Typography>
                                    <Typography component="span" variant="body1">{product.price}$</Typography>
                                </CardContent>
                            </Card>
                            </Link>
                    </Grid>
                })}
            </Grid>
        </Box>
    )
}

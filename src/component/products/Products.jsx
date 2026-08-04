import React from "react";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import useProducts from "../../hook/useProducts";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Products() {
  const { t } = useTranslation();
  const { data, isLoading, isError, error } = useProducts();
  const navgiate = useNavigate()
  if (isLoading) return <CircularProgress />;
  const handleClick = ()=>{
    navgiate("/shop")
  }

  return (
    <Box
      className="products"
      component="section"
      sx={{
        mt: "64px",
        display: "flex",
        flexDirection: "column",
        gap: "32px",
      }}
    >
      {/* عنوان القسم */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <Typography
          component="h2"
          variant="h4"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "26px", md: "32px" },
            lineHeight: "40px",
            letterSpacing: "0.64px",
            color: "#202124",
          }}
        >
          {t("Products")}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#434655",
            fontSize: "16px",
          }}
        >
          Hand-picked excellence for your everyday life
        </Typography>
      </Box>

      {/* المنتجات */}
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {data?.response?.data?.map((product) => (
          <Grid
            key={product.id}
            size={{
              xs: 12,
              sm: 6,
              md: 4,
              lg: 3,
            }}
          >
            <Card
              component={Link}
              to={`/products/${product.id}`}
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                textDecoration: "none",
                color: "inherit",

                border: "1px solid #E1E5EE",
                borderRadius: "16px",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.06)",
                overflow: "hidden",

                transition: "transform 0.3s ease, box-shadow 0.3s ease",

                "&:hover": {
                  transform: "translateY(-7px)",
                  boxShadow: "0 14px 30px rgba(0, 74, 198, 0.14)",
                },

                "&:hover .product-image": {
                  transform: "scale(1.06)",
                },
              }}
            >
              {/* حاوية الصورة */}
              <Box
                sx={{
                  width: "100%",
                  height: "240px",
                  overflow: "hidden",
                  backgroundColor: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 2,
                }}
              >
                <CardMedia
                  className="product-image"
                  component="img"
                  image={product.image}
                  alt={product.name}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    transition: "transform 0.4s ease",
                  }}
                />
              </Box>

              {/* معلومات المنتج */}
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                  gap: "12px",
                  p: "20px",

                  "&:last-child": {
                    pb: "20px",
                  },
                }}
              >
                <Typography
                  component="h3"
                  sx={{
                    fontSize: "17px",
                    fontWeight: 700,
                    lineHeight: 1.4,
                    color: "#202124",

                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 2,
                    overflow: "hidden",
                  }}
                >
                  {product.name}
                </Typography>

                <Box
                  sx={{
                    mt: "auto",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      fontSize: "22px",
                      fontWeight: 700,
                      color: "#004AC6",
                    }}
                  >
                    ${product.price}
                  </Typography>

                  <Typography
                    component="span"
                    sx={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#004AC6",
                    }}
                  >
                    View Details
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          onClick={handleClick}
          sx={{
            backgroundColor: "#004AC6",
            "&:hover": { backgroundColor: "#001a49", color: "#fff" },
          }}
        >
          Show More
        </Button>
      </Box>
    </Box>
  );
}

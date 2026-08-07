import { useEffect, useMemo, useState } from "react";

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

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import useProducts from "../../hook/useProducts";

export default function Products({
  showHeader = true,
  showMoreButton = true,
  initialLimit = 4,
  productsPerClick = 4,

  // Filters coming from Shop
  selectedCategory = null,
  minPrice = "",
  maxPrice = "",
  sortBy = "",
  order = "asc",
}) {
  const { t } = useTranslation();

  const { data, isLoading, isError, error } = useProducts();

  // Number of products currently displayed
  const [visibleProductsCount, setVisibleProductsCount] =
    useState(initialLimit);

  // When changing any filter, we reset the number of products to the first count.
  useEffect(() => {
    setVisibleProductsCount(initialLimit);
  }, [selectedCategory, minPrice, maxPrice, sortBy, order, initialLimit]);

  // All products coming from API
  const products = data?.response?.data ?? [];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    const minimumPrice = minPrice === "" ? null : Number(minPrice);

    const maximumPrice = maxPrice === "" ? null : Number(maxPrice);

    const result = products.filter((product) => {
      /*
       We attempt to obtain the classification number in more than one format,

depending on the format of the data coming from the API.
      */
      const productCategoryId =
        product.categoryId ??
        product.categoryID ??
        product.category?.id ??
        product.category?.categoryId ??
        product.category?.categoryID;

      const productPrice = Number(product.price);

      // Filtering the classification
      const matchesCategory =
        selectedCategory === null ||
        String(productCategoryId) === String(selectedCategory);

      // فلترة أقل سعر
      const matchesMinPrice =
        minimumPrice === null || productPrice >= minimumPrice;

      // Highest price filter
      const matchesMaxPrice =
        maximumPrice === null || productPrice <= maximumPrice;

      return matchesCategory && matchesMinPrice && matchesMaxPrice;
    });

    //We copy the array before sorting it.
    return [...result].sort((firstProduct, secondProduct) => {
      // If no sort type is selected, we retain the API sort.
      if (!sortBy) {
        return 0;
      }

      let comparison = 0;

      //Sort by name
      if (sortBy === "price") {
        comparison = Number(firstProduct.price) - Number(secondProduct.price);
      }

      //
      if (sortBy === "name") {
        comparison = String(firstProduct.name ?? "").localeCompare(
          String(secondProduct.name ?? ""),
          undefined,
          {
            sensitivity: "base",
          },
        );
      }

      return order === "desc" ? -comparison : comparison;
    });
  }, [products, selectedCategory, minPrice, maxPrice, sortBy, order]);

  //Products currently displayed after filtering
  const displayedProducts = filteredProducts.slice(0, visibleProductsCount);

  // Are there any additional products?
  const hasMoreProducts = visibleProductsCount < filteredProducts.length;

  //View additional products
  const handleShowMore = () => {
    setVisibleProductsCount((previousCount) =>
      Math.min(previousCount + productsPerClick, filteredProducts.length),
    );
  };

  // Loading status
  if (isLoading) {
    return (
      <Box
        sx={{
          minHeight: "250px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <CircularProgress
          sx={{
            color: "#004AC6",
          }}
        />
      </Box>
    );
  }

  // Error status
  if (isError) {
    return (
      <Box
        sx={{
          minHeight: "220px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          textAlign: "center",
          width: "100%",
        }}
      >
        <Typography
          color="error"
          sx={{
            fontSize: "16px",
            fontWeight: 600,
          }}
        >
          {error?.message || "Failed to load products"}
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      className="products"
      component="section"
      sx={{
        mt: showHeader ? "64px" : 0,
        display: "flex",
        flexDirection: "column",
        gap: "32px",
        width: "100%",
      }}
    >
      {/* Product Section Title*/}
      {showHeader && (
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
              fontSize: {
                xs: "26px",
                md: "32px",
              },
              lineHeight: {
                xs: "34px",
                md: "40px",
              },
              letterSpacing: "0.64px",
              color: "#text.primary",
            }}
          >
            {t("Products")}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#text.secondary",
              fontSize: "16px",
              lineHeight: "24px",
            }}
          >
            Hand-picked excellence for your everyday life
          </Typography>
        </Box>
      )}

      {/*No products remain after filtration */}
      {filteredProducts.length === 0 ? (
        <Box
          sx={{
            minHeight: "220px",
            width: "100%",
            px: "24px",

            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",

            border: "1px solid #E1E5EE",
            borderRadius: "16px",
            backgroundColor: "#F8FAFC",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              color: "#text.primary",
              fontSize: "18px",
              fontWeight: 700,
            }}
          >
            No products found
          </Typography>

          <Typography
            sx={{
              color: "#text.secondary",
              fontSize: "14px",
            }}
          >
            Try changing the selected category or price range.
          </Typography>
        </Box>
      ) : (
        <>
          {/* Product Network*/}
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {displayedProducts.map((product) => (
              <Grid
                key={product.id}
                size={{
                  xs: 12,
                  sm: 6,
                  md: 6,
                  lg: 4,
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
                      transform: "scale(1.04)",
                    },
                  }}
                >
                  {/* product pitcher*/}
                  <Box
                    sx={{
                      width: "100%",
                      height: {
                        xs: "220px",
                        md: "240px",
                      },
                      overflow: "hidden",
                      backgroundColor: "#background.paper",

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

                  {/* info products*/}
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
                        minHeight: "48px",
                        fontSize: "17px",
                        fontWeight: 700,
                        lineHeight: 1.4,
                        color: "#text.primary",

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

          {/* show more*/}
          {showMoreButton && hasMoreProducts && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                type="button"
                variant="contained"
                onClick={handleShowMore}
                sx={{
                  minWidth: "140px",
                  height: "44px",
                  px: "24px",

                  backgroundColor: "#004AC6",
                  borderRadius: "8px",
                  textTransform: "none",

                  fontSize: "15px",
                  fontWeight: 600,
                  boxShadow: "none",

                  "&:hover": {
                    backgroundColor: "#001A49",
                    boxShadow: "none",
                  },
                }}
              >
                Show More
              </Button>
            </Box>
          )}
        </>
      )}
    </Box>
  );
}

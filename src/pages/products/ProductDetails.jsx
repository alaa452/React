import { useState } from "react";

import {
  Add,
  AddShoppingCartOutlined,
  FavoriteBorderOutlined,
  LocalShippingOutlined,
  Remove,
  VerifiedOutlined,
} from "@mui/icons-material";

import {
  Box,
  Breadcrumbs,
  Button,
  CircularProgress,
  Container,
  Divider,
  Grid,
  IconButton,
  Link as MuiLink,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";

import { Link as RouterLink, useParams } from "react-router-dom";

import useProduct from "../../hook/useProduct";
import useAddToCart from "../../hook/useAddToCart";

export default function ProductDetails() {
  const { id } = useParams();

  const { data, isError, isLoading, error } = useProduct(id);

  const {
    mutate: addToCart,
    isPending: isAddingToCart,
  } = useAddToCart();

  const [quantity, setQuantity] = useState(1);
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedImage, setSelectedImage] = useState("");

  if (isLoading) {
    return (
      <Box
        sx={{
          minHeight: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress sx={{ color: "#004AC6" }} />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box
        sx={{
          minHeight: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography color="error">
          {error?.message || "Failed to load product"}
        </Typography>
      </Box>
    );
  }

  const product = data?.response;

  if (!product) {
    return (
      <Typography sx={{ textAlign: "center", mt: "100px" }}>
        Product not found
      </Typography>
    );
  }

  /*
  If the product contains more than one image,

they will be displayed as thumbnails.

If it contains only one image,

one image will be displayed.
  */
  const productImages =
    product.images?.length > 0
      ? product.images
      : product.image
        ? [product.image]
        : [];

  const mainImage = selectedImage || productImages[0];

  const reviews = product.reviews || [];

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      count: quantity,
    });
  };

  return (
    <Box
      component="section"
      sx={{
        mt: "90px",
        mb: "80px",
      }}
    >
      <Container maxWidth="xl">
        {/* Breadcrumb */}
        <Breadcrumbs
          aria-label="breadcrumb"
          separator="›"
          sx={{
            mb: "24px",
            fontSize: "13px",
          }}
        >
          <MuiLink
            component={RouterLink}
            to="/"
            underline="none"
            sx={{
              color: "#434655",

              "&:hover": {
                color: "#004AC6",
              },
            }}
          >
            Home
          </MuiLink>

          <MuiLink
            component={RouterLink}
            to="/shop"
            underline="none"
            sx={{
              color: "#434655",

              "&:hover": {
                color: "#004AC6",
              },
            }}
          >
            Shop
          </MuiLink>

          <Typography
            sx={{
              color: "#202124",
              fontSize: "13px",
              fontWeight: 600,
            }}
          >
            {product.name}
          </Typography>
        </Breadcrumbs>


        <Grid container spacing={{ xs: 4, md: 5 }}>
          {/* the pictures */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                display: "flex",
                gap: "14px",
                flexDirection: {
                  xs: "column-reverse",
                  sm: "row",
                },
              }}
            >

              {productImages.length > 0 && (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xs: "row",
                      sm: "column",
                    },
                    gap: "12px",
                    overflowX: "auto",
                  }}
                >
                  {productImages.map((image, index) => (
                    <Box
                      key={index}
                      component="button"
                      type="button"
                      onClick={() => setSelectedImage(image)}
                      sx={{
                        width: "72px",
                        height: "72px",
                        flexShrink: 0,
                        padding: "4px",

                        backgroundColor: "#FFFFFF",
                        border:
                          mainImage === image
                            ? "2px solid #004AC6"
                            : "1px solid #E2E8F0",

                        borderRadius: "8px",
                        cursor: "pointer",
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        component="img"
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              )}

              <Box
                sx={{
                  width: "100%",
                  height: {
                    xs: "350px",
                    sm: "470px",
                    md: "560px",
                  },

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",

                  backgroundColor: "#F7F8FA",
                  border: "1px solid #E2E8F0",
                  borderRadius: "12px",
                  overflow: "hidden",
                  p: 2,
                }}
              >
                {mainImage ? (
                  <Box
                    component="img"
                    src={mainImage}
                    alt={product.name}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                ) : (
                  <Typography sx={{ color: "#434655" }}>
                    No image available
                  </Typography>
                )}
              </Box>
            </Box>
          </Grid>


          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "18px",
              }}
            >

              {product.category?.name && (
                <Box>
                  <Typography
                    component="span"
                    sx={{
                      display: "inline-block",
                      px: "12px",
                      py: "5px",
                      borderRadius: "20px",
                      backgroundColor: "#E8F0FF",
                      color: "#004AC6",
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    {product.category.name}
                  </Typography>
                </Box>
              )}

              <Typography
                component="h1"
                sx={{
                  color: "#202124",
                  fontSize: {
                    xs: "28px",
                    md: "34px",
                  },
                  lineHeight: 1.3,
                  fontWeight: 700,
                }}
              >
                {product.name}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Typography
                  sx={{
                    color: "#F59E0B",
                    fontSize: "20px",
                    letterSpacing: "1px",
                  }}
                >
                  ★★★★★
                </Typography>

                <Typography
                  sx={{
                    color: "#434655",
                    fontSize: "13px",
                  }}
                >
                  ({reviews.length} Reviews)
                </Typography>
              </Box>


              <Typography
                sx={{
                  color: "#004AC6",
                  fontSize: "30px",
                  fontWeight: 700,
                }}
              >
                ${product.price}
              </Typography>

              <Typography
                sx={{
                  color: "#5F6470",
                  fontSize: "15px",
                  lineHeight: "25px",
                }}
              >
                {product.description}
              </Typography>

              <Divider />

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "18px",
                }}
              >
                <Typography
                  sx={{
                    color: "#202124",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  Quantity
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid #E2E8F0",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <IconButton
                    size="small"
                    onClick={decreaseQuantity}
                    disabled={quantity === 1}
                    sx={{
                      width: "38px",
                      height: "38px",
                      borderRadius: 0,
                    }}
                  >
                    <Remove fontSize="small" />
                  </IconButton>

                  <Typography
                    sx={{
                      width: "38px",
                      textAlign: "center",
                      fontSize: "14px",
                    }}
                  >
                    {quantity}
                  </Typography>

                  <IconButton
                    size="small"
                    onClick={increaseQuantity}
                    sx={{
                      width: "38px",
                      height: "38px",
                      borderRadius: 0,
                    }}
                  >
                    <Add fontSize="small" />
                  </IconButton>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  gap: "12px",
                }}
              >
                <Button
                  fullWidth
                  variant="contained"
                  startIcon={
                    isAddingToCart ? (
                      <CircularProgress
                        size={18}
                        sx={{ color: "#FFFFFF" }}
                      />
                    ) : (
                      <AddShoppingCartOutlined />
                    )
                  }
                  disabled={isAddingToCart}
                  onClick={handleAddToCart}
                  sx={{
                    height: "48px",
                    backgroundColor: "#004AC6",
                    borderRadius: "8px",
                    textTransform: "none",
                    fontWeight: 600,
                    boxShadow: "none",

                    "&:hover": {
                      backgroundColor: "#003B9E",
                      boxShadow: "none",
                    },
                  }}
                >
                  {isAddingToCart ? "Adding..." : "Add to Cart"}
                </Button>

                <IconButton
                  sx={{
                    width: "48px",
                    height: "48px",
                    flexShrink: 0,
                    border: "1px solid #E2E8F0",
                    borderRadius: "8px",
                    color: "#434655",

                    "&:hover": {
                      color: "#004AC6",
                      borderColor: "#004AC6",
                    },
                  }}
                >
                  <FavoriteBorderOutlined />
                </IconButton>
              </Box>

              {/* Buy Now */}
              <Button
                fullWidth
                variant="outlined"
                sx={{
                  height: "48px",
                  borderRadius: "8px",
                  textTransform: "none",
                  borderColor: "#004AC6",
                  color: "#004AC6",
                  fontWeight: 600,

                  "&:hover": {
                    borderColor: "#003B9E",
                    backgroundColor: "#F3F7FF",
                  },
                }}
              >
                Buy Now
              </Button>

              <Divider />

              {/*Additional information*/}
              <Grid container spacing={2}>
                <Grid size={6}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        width: "38px",
                        height: "38px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "50%",
                        backgroundColor: "#F3F7FF",
                        color: "#004AC6",
                      }}
                    >
                      <LocalShippingOutlined fontSize="small" />
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: 700,
                        }}
                      >
                        Fast Delivery
                      </Typography>

                      <Typography
                        sx={{
                          color: "#6B7280",
                          fontSize: "11px",
                        }}
                      >
                        Quick shipping
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid size={6}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        width: "38px",
                        height: "38px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "50%",
                        backgroundColor: "#F3F7FF",
                        color: "#004AC6",
                      }}
                    >
                      <VerifiedOutlined fontSize="small" />
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: 700,
                        }}
                      >
                        Trusted Quality
                      </Typography>

                      <Typography
                        sx={{
                          color: "#6B7280",
                          fontSize: "11px",
                        }}
                      >
                        Quality products
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: {
              xs: "50px",
              md: "80px",
            },
          }}
        >
          <Tabs
            value={selectedTab}
            onChange={(event, newValue) => setSelectedTab(newValue)}
            sx={{
              borderBottom: "1px solid #E2E8F0",

              "& .MuiTab-root": {
                textTransform: "none",
                color: "#434655",
                fontSize: "14px",
                minWidth: "auto",
                px: "16px",
              },

              "& .Mui-selected": {
                color: "#004AC6 !important",
              },

              "& .MuiTabs-indicator": {
                backgroundColor: "#004AC6",
              },
            }}
          >
            <Tab label="Description" />
            <Tab label="Specifications" />
            <Tab label={`Reviews (${reviews.length})`} />
          </Tabs>

          {selectedTab === 0 && (
            <Box
              sx={{
                py: "28px",
              }}
            >
              <Typography
                component="h2"
                sx={{
                  mb: "12px",
                  fontSize: "18px",
                  fontWeight: 700,
                }}
              >
                Product Description
              </Typography>

              <Typography
                sx={{
                  maxWidth: "850px",
                  color: "#5F6470",
                  fontSize: "15px",
                  lineHeight: "26px",
                }}
              >
                {product.description}
              </Typography>
            </Box>
          )}

          {/* Specifications */}
          {selectedTab === 1 && (
            <Box
              sx={{
                py: "28px",
                maxWidth: "700px",
              }}
            >
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "180px 1fr",
                  },
                  border: "1px solid #E2E8F0",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <Typography
                  sx={{
                    p: "14px",
                    fontWeight: 600,
                    backgroundColor: "#F8FAFC",
                  }}
                >
                  Product Name
                </Typography>

                <Typography sx={{ p: "14px" }}>
                  {product.name}
                </Typography>

                <Typography
                  sx={{
                    p: "14px",
                    fontWeight: 600,
                    backgroundColor: "#F8FAFC",
                  }}
                >
                  Price
                </Typography>

                <Typography sx={{ p: "14px" }}>
                  ${product.price}
                </Typography>

                <Typography
                  sx={{
                    p: "14px",
                    fontWeight: 600,
                    backgroundColor: "#F8FAFC",
                  }}
                >
                  Category
                </Typography>

                <Typography sx={{ p: "14px" }}>
                  {product.category?.name || "Not available"}
                </Typography>
              </Box>
            </Box>
          )}

          {/* Reviews */}
          {selectedTab === 2 && (
            <Box
              sx={{
                py: "28px",
              }}
            >
              {reviews.length === 0 ? (
                <Box
                  sx={{
                    minHeight: "180px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    border: "1px solid #E2E8F0",
                    borderRadius: "12px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 700,
                    }}
                  >
                    No reviews yet
                  </Typography>

                  <Typography
                    sx={{
                      color: "#434655",
                      fontSize: "14px",
                    }}
                  >
                    Be the first to review this product.
                  </Typography>
                </Box>
              ) : (
                reviews.map((review) => (
                  <Box
                    key={review.id}
                    sx={{
                      mb: "16px",
                      p: "20px",
                      border: "1px solid #E2E8F0",
                      borderRadius: "10px",
                    }}
                  >
                    <Typography fontWeight={700}>
                      {review.userName || "Customer"}
                    </Typography>

                    <Typography sx={{ color: "#F59E0B" }}>
                      {"★".repeat(review.rating || 5)}
                    </Typography>

                    <Typography sx={{ mt: 1, color: "#434655" }}>
                      {review.comment}
                    </Typography>
                  </Box>
                ))
              )}
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}
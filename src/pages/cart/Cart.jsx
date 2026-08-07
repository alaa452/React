import {
  Box,
  Button,
  CircularProgress,
  Container,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useNavigate } from "react-router-dom";

import useCart from "../../hook/useCart";
import useRemoveFromCart from "../../hook/useRemoveFromCart";
import useUpdateCartItem from "../../hook/useUpdateCartItem";

export default function Cart() {
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useCart();

  const {
    mutate: removeFromCart,
    isPending: isRemoving,
  } = useRemoveFromCart();

  const {
    mutate: updateCartItem,
    isPending: isUpdating,
  } = useUpdateCartItem();

  const cartItems = data?.items ?? [];

  const cartTotal = cartItems.reduce((total, item) => {
    return total + item.totalPrice;
  }, 0);

  const formatPrice = (price) => {
    return `$${Number(price || 0).toFixed(2)}`;
  };

  const handleUpdateCartItem = (productId, action) => {
    const selectedItem = cartItems.find(
      (item) => item.productId === productId,
    );

    if (!selectedItem) {
      return;
    }

    let newCount = selectedItem.count;

    if (action === "increment") {
      newCount = selectedItem.count + 1;
    }

    if (action === "decrement" && selectedItem.count > 1) {
      newCount = selectedItem.count - 1;
    }

    updateCartItem({
      productId: productId,
      count: newCount,
    });
  };

  if (isLoading) {
    return (
      <Box
        sx={{
          minHeight: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
          alignItems: "center",
          justifyContent: "center",
          px: 2,
        }}
      >
        <Typography
          color="error"
          sx={{
            fontSize: "16px",
            textAlign: "center",
          }}
        >
          {error?.message || "Failed to load cart"}
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      component="section"
      sx={{
        mt: "90px",
        mb: "80px",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            mb: "32px",
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontSize: {
                xs: "28px",
                md: "34px",
              },
              fontWeight: 700,
              color: "#202124",
            }}
          >
            Shopping Cart
          </Typography>

          <Typography
            sx={{
              mt: "8px",
              color: "#434655",
              fontSize: "15px",
            }}
          >
            Review your products before checkout.
          </Typography>
        </Box>

        {cartItems.length === 0 ? (
          <Box
            sx={{
              minHeight: "380px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",

              border: "1px solid #E2E8F0",
              borderRadius: "16px",
              backgroundColor: "#F8FAFC",
              textAlign: "center",
              px: "24px",
            }}
          >
            <Box
              sx={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                backgroundColor: "#EAF1FF",
                color: "#004AC6",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ShoppingCartOutlinedIcon
                sx={{
                  fontSize: "40px",
                }}
              />
            </Box>

            <Typography
              component="h2"
              sx={{
                fontSize: "24px",
                fontWeight: 700,
                color: "#202124",
              }}
            >
              Your cart is empty
            </Typography>

            <Typography
              sx={{
                maxWidth: "420px",
                color: "#434655",
                fontSize: "15px",
                lineHeight: "23px",
              }}
            >
              You have not added any products to your cart yet.
            </Typography>

            <Button
              variant="contained"
              onClick={() => navigate("/shop")}
              sx={{
                mt: "8px",
                minWidth: "160px",
                height: "46px",
                borderRadius: "8px",
                backgroundColor: "#004AC6",
                textTransform: "none",
                fontWeight: 600,
                boxShadow: "none",

                "&:hover": {
                  backgroundColor: "#003B9E",
                  boxShadow: "none",
                },
              }}
            >
              Start Shopping
            </Button>
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",

              flexDirection: {
                xs: "column",
                lg: "row",
              },

              gap: "32px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {cartItems.map((item) => (
                <Box
                  key={item.id ?? item.productId}
                  sx={{
                    display: "flex",

                    alignItems: {
                      xs: "flex-start",
                      sm: "center",
                    },

                    flexDirection: {
                      xs: "column",
                      sm: "row",
                    },

                    justifyContent: "space-between",

                    gap: "20px",

                    p: {
                      xs: "18px",
                      md: "24px",
                    },

                    border: "1px solid #E2E8F0",
                    borderRadius: "14px",
                    backgroundColor: "#FFFFFF",
                    boxShadow: "0 4px 14px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  <Box
                    sx={{
                      flexGrow: 1,
                    }}
                  >
                    <Typography
                      component="h2"
                      sx={{
                        fontSize: "17px",
                        fontWeight: 700,
                        color: "#202124",
                      }}
                    >
                      {item.productName}
                    </Typography>

                    <Typography
                      sx={{
                        mt: "6px",
                        color: "#004AC6",
                        fontSize: "17px",
                        fontWeight: 700,
                      }}
                    >
                      {formatPrice(item.price)}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <IconButton
                      size="small"
                      disabled={item.count <= 1 || isUpdating}
                      onClick={() =>
                        handleUpdateCartItem(
                          item.productId,
                          "decrement",
                        )
                      }
                      sx={{
                        width: "36px",
                        height: "36px",
                        border: "1px solid #E2E8F0",
                        borderRadius: "8px",

                        "&:hover": {
                          borderColor: "#004AC6",
                          color: "#004AC6",
                        },
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </IconButton>

                    <Typography
                      sx={{
                        minWidth: "32px",
                        textAlign: "center",
                        fontSize: "16px",
                        fontWeight: 600,
                      }}
                    >
                      {item.count}
                    </Typography>


                    <IconButton
                      size="small"
                      disabled={isUpdating}
                      onClick={() =>
                        handleUpdateCartItem(
                          item.productId,
                          "increment",
                        )
                      }
                      sx={{
                        width: "36px",
                        height: "36px",
                        border: "1px solid #E2E8F0",
                        borderRadius: "8px",

                        "&:hover": {
                          borderColor: "#004AC6",
                          color: "#004AC6",
                        },
                      }}
                    >
                      <AddIcon fontSize="small" />
                    </IconButton>
                  </Box>

                  <Box
                    sx={{
                      minWidth: {
                        sm: "110px",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#434655",
                        fontSize: "13px",
                      }}
                    >
                      Total
                    </Typography>

                    <Typography
                      sx={{
                        mt: "4px",
                        color: "#202124",
                        fontSize: "18px",
                        fontWeight: 700,
                      }}
                    >
                      {formatPrice(item.totalPrice)}
                    </Typography>
                  </Box>

                  <Button
                    type="button"
                    color="error"
                    disabled={isRemoving}
                    onClick={() =>
                      removeFromCart(item.productId)
                    }
                    startIcon={
                      isRemoving ? (
                        <CircularProgress
                          size={16}
                          color="inherit"
                        />
                      ) : (
                        <DeleteOutlineIcon />
                      )
                    }
                    sx={{
                      minWidth: "100px",
                      height: "40px",
                      borderRadius: "8px",
                      textTransform: "none",
                      fontWeight: 600,
                    }}
                  >
                    Remove
                  </Button>
                </Box>
              ))}


              <Box>
                <Button
                  type="button"
                  startIcon={<ArrowBackIcon />}
                  onClick={() => navigate("/shop")}
                  sx={{
                    color: "#004AC6",
                    textTransform: "none",
                    fontWeight: 600,
                  }}
                >
                  Continue Shopping
                </Button>
              </Box>
            </Box>


            <Box
              sx={{
                width: {
                  xs: "100%",
                  lg: "340px",
                },

                flexShrink: 0,

                p: "24px",

                border: "1px solid #E2E8F0",
                borderRadius: "14px",
                backgroundColor: "#FFFFFF",

                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.04)",

                position: {
                  lg: "sticky",
                },

                top: {
                  lg: "100px",
                },
              }}
            >
              <Typography
                component="h2"
                sx={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#202124",
                }}
              >
                Order Summary
              </Typography>

              <Box
                sx={{
                  mt: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "16px",
                  }}
                >
                  <Typography sx={{ color: "#434655" }}>
                    Products
                  </Typography>

                  <Typography fontWeight={600}>
                    {cartItems.length}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "16px",
                  }}
                >
                  <Typography sx={{ color: "#434655" }}>
                    Subtotal
                  </Typography>

                  <Typography fontWeight={600}>
                    {formatPrice(cartTotal)}
                  </Typography>
                </Box>

                <Divider />
                
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "17px",
                      fontWeight: 700,
                    }}
                  >
                    Total
                  </Typography>

                  <Typography
                    sx={{
                      color: "#004AC6",
                      fontSize: "22px",
                      fontWeight: 700,
                    }}
                  >
                    {formatPrice(cartTotal)}
                  </Typography>
                </Box>

                {/* Checkout */}
                <Button
                  type="button"
                  variant="contained"
                  fullWidth
                  onClick={() => navigate("/checkout")}
                  sx={{
                    mt: "8px",
                    height: "48px",
                    borderRadius: "8px",
                    backgroundColor: "#004AC6",
                    textTransform: "none",
                    fontSize: "15px",
                    fontWeight: 600,
                    boxShadow: "none",

                    "&:hover": {
                      backgroundColor: "#003B9E",
                      boxShadow: "none",
                    },
                  }}
                >
                  Proceed to Checkout
                </Button>
              </Box>
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
}
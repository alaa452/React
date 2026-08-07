import { useState } from "react";

import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import useCart from "../../hook/useCart";
import useCheckout from "../../hook/useCheckout";

function Checkout() {
  const { data, isLoading, isError, error } = useCart();

  const [paymentMethod, setPaymentMethod] = useState("");

  const { mutate: checkoutMutate, isPending } = useCheckout();

  // تحميل السلة
  if (isLoading) {
    return (
      <Box
        sx={{
          minHeight: "400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress sx={{ color: "#004AC6" }} />
      </Box>
    );
  }

  // إذا حدث خطأ
  if (isError) {
    return (
      <Typography
        color="error"
        sx={{
          mt: "100px",
          textAlign: "center",
        }}
      >
        {error?.message || "Something went wrong"}
      </Typography>
    );
  }

  const items = data?.items ?? [];

  const handleCheckout = () => {
    if (paymentMethod === "") {
      return;
    }

    checkoutMutate(
      {
        paymentMethod: paymentMethod,
      },
      {
        onSuccess: () => {
          const oldOrders = JSON.parse(localStorage.getItem("orders")) || [];

          const newOrder = {
            id: Date.now(),
            paymentMethod: paymentMethod,
            date: new Date().toLocaleString(),
            items: data.items,
            totalPrice: data.items.reduce(
              (total, item) => total + Number(item.totalPrice),
              0,
            ),
          };

          const updatedOrders = [...oldOrders, newOrder];

          localStorage.setItem("orders", JSON.stringify(updatedOrders));
        },
      },
    );
  };

  return (
    <Box
      component="section"
      sx={{
        mt: "90px",
        mb: "80px",
      }}
    >
      <Container maxWidth="lg">
        {/* عنوان الصفحة */}
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
            Checkout
          </Typography>

          <Typography
            sx={{
              mt: "8px",
              color: "#434655",
              fontSize: "15px",
            }}
          >
            Review your order and choose your payment method.
          </Typography>
        </Box>

        {/* محتوى الصفحة */}
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            alignItems: "flex-start",
            gap: "32px",
          }}
        >
          {/* المنتجات */}
          <Box
            sx={{
              flexGrow: 1,
              width: "100%",
              border: "1px solid #E2E8F0",
              borderRadius: "12px",
              overflow: "hidden",
              backgroundColor: "#FFFFFF",
            }}
          >
            <Typography
              component="h2"
              sx={{
                p: "20px",
                fontSize: "18px",
                fontWeight: 700,
                borderBottom: "1px solid #E2E8F0",
              }}
            >
              Your Order
            </Typography>

            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow
                    sx={{
                      backgroundColor: "#F8FAFC",
                    }}
                  >
                    <TableCell>
                      <strong>Product</strong>
                    </TableCell>

                    <TableCell>
                      <strong>Price</strong>
                    </TableCell>

                    <TableCell align="center">
                      <strong>Quantity</strong>
                    </TableCell>

                    <TableCell>
                      <strong>Total</strong>
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {items.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.productName}</TableCell>

                      <TableCell>${item.price}</TableCell>

                      <TableCell align="center">{item.count}</TableCell>

                      <TableCell
                        sx={{
                          color: "#004AC6",
                          fontWeight: 600,
                        }}
                      >
                        ${item.totalPrice}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          {/* الدفع */}
          <Box
            sx={{
              width: {
                xs: "100%",
                md: "330px",
              },
              flexShrink: 0,

              p: "24px",

              border: "1px solid #E2E8F0",
              borderRadius: "12px",
              backgroundColor: "#FFFFFF",

              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Typography
              component="h2"
              sx={{
                fontSize: "18px",
                fontWeight: 700,
                color: "#202124",
              }}
            >
              Payment Method
            </Typography>

            <Typography
              sx={{
                color: "#434655",
                fontSize: "14px",
              }}
            >
              Choose how you would like to pay.
            </Typography>

            {/* اختيار طريقة الدفع */}
            <FormControl fullWidth>
              <InputLabel id="payment-method-label">Payment Method</InputLabel>

              <Select
                labelId="payment-method-label"
                id="payment-method"
                value={paymentMethod}
                label="Payment Method"
                onChange={(event) => setPaymentMethod(event.target.value)}
                sx={{
                  height: "50px",
                  borderRadius: "8px",

                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#004AC6",
                  },
                }}
              >
                <MenuItem value="cash">Cash</MenuItem>

                <MenuItem value="Visa">Visa</MenuItem>
              </Select>
            </FormControl>

            {/* زر الدفع */}
            <Button
              type="button"
              variant="contained"
              fullWidth
              disabled={paymentMethod === "" || isPending}
              onClick={handleCheckout}
              sx={{
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

                "&.Mui-disabled": {
                  backgroundColor: "#AFC4E8",
                  color: "#FFFFFF",
                },
              }}
            >
              {isPending ? (
                <CircularProgress
                  size={22}
                  sx={{
                    color: "#FFFFFF",
                  }}
                />
              ) : (
                "Pay Now"
              )}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Checkout;

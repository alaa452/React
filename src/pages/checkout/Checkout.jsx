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

import { useTranslation } from "react-i18next";

import useCart from "../../hook/useCart";
import useCheckout from "../../hook/useCheckout";

function Checkout() {
  const { t } = useTranslation();

  const { data, isLoading, isError, error } = useCart();

  const [paymentMethod, setPaymentMethod] = useState("");

  const { mutate: checkoutMutate, isPending } = useCheckout();

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

  if (isError) {
    return (
      <Typography
        color="error"
        sx={{
          mt: "100px",
          textAlign: "center",
        }}
      >
        {error?.message || t("Something went wrong")}
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
          const oldOrders =
            JSON.parse(localStorage.getItem("orders")) || [];

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

          localStorage.setItem(
            "orders",
            JSON.stringify(updatedOrders),
          );
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
        color: "text.primary",
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}

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
              color: "text.primary",
            }}
          >
            {t("Checkout")}
          </Typography>

          <Typography
            sx={{
              mt: "8px",
              color: "text.secondary",
              fontSize: "15px",
            }}
          >
            {t("Checkout Description")}
          </Typography>
        </Box>

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
          {/* Order */}

          <Box
            sx={{
              flexGrow: 1,
              width: "100%",

              border: "1px solid",
              borderColor: "divider",

              borderRadius: "12px",
              overflow: "hidden",

              backgroundColor: "background.paper",
            }}
          >
            <Typography
              component="h2"
              sx={{
                p: "20px",
                fontSize: "18px",
                fontWeight: 700,

                color: "text.primary",

                borderBottom: "1px solid",
                borderColor: "divider",
              }}
            >
              {t("Your Order")}
            </Typography>

            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow
                    sx={{
                      backgroundColor: "background.paper",
                    }}
                  >
                    <TableCell>
                      <strong>{t("Product")}</strong>
                    </TableCell>

                    <TableCell>
                      <strong>{t("Price")}</strong>
                    </TableCell>

                    <TableCell align="center">
                      <strong>{t("Quantity")}</strong>
                    </TableCell>

                    <TableCell>
                      <strong>{t("Total")}</strong>
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {items.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        {item.productName}
                      </TableCell>

                      <TableCell>
                        ${item.price}
                      </TableCell>

                      <TableCell align="center">
                        {item.count}
                      </TableCell>

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

          {/* Payment */}

          <Box
            sx={{
              width: {
                xs: "100%",
                md: "330px",
              },

              flexShrink: 0,

              p: "24px",

              border: "1px solid",
              borderColor: "divider",

              borderRadius: "12px",

              backgroundColor: "background.paper",

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
                color: "text.primary",
              }}
            >
              {t("Payment Method")}
            </Typography>

            <Typography
              sx={{
                color: "text.secondary",
                fontSize: "14px",
              }}
            >
              {t("Choose Payment Method")}
            </Typography>

            <FormControl fullWidth>
              <InputLabel id="payment-method-label">
                {t("Payment Method")}
              </InputLabel>

              <Select
                labelId="payment-method-label"
                id="payment-method"
                value={paymentMethod}
                label={t("Payment Method")}
                onChange={(event) =>
                  setPaymentMethod(event.target.value)
                }
                sx={{
                  height: "50px",
                  borderRadius: "8px",

                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#004AC6",
                  },
                }}
              >
                <MenuItem value="cash">
                  {t("Cash")}
                </MenuItem>

                <MenuItem value="Visa">
                  {t("Visa")}
                </MenuItem>
              </Select>
            </FormControl>

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
                color: "#fff",

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
                  color: "#fff",
                },
              }}
            >
              {isPending ? (
                <CircularProgress
                  size={22}
                  sx={{
                    color: "#fff",
                  }}
                />
              ) : (
                t("Pay Now")
              )}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Checkout;
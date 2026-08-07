import { Box, Typography } from "@mui/material";

import { useTranslation } from "react-i18next";

function ProfileOrders() {
  const { t } = useTranslation();

  const orders =
    JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <Box>
      <Typography
        component="h2"
        sx={{
          fontSize: "24px",
          fontWeight: 700,
          color: "text.primary",
          mb: "8px",
        }}
      >
        {t("My Orders")}
      </Typography>

      <Typography
        sx={{
          color: "text.secondary",
          fontSize: "14px",
          mb: "28px",
        }}
      >
        {t("View your previous orders")}
      </Typography>

      {orders.length === 0 ? (
        <Box
          sx={{
            p: "40px",
            textAlign: "center",

            border: "1px solid",
            borderColor: "divider",

            borderRadius: "12px",

            backgroundColor: "background.paper",
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 600,
              color: "text.primary",
            }}
          >
            {t("No orders yet")}
          </Typography>

          <Typography
            sx={{
              mt: "6px",
              color: "text.secondary",
              fontSize: "14px",
            }}
          >
            {t("You have not placed any orders yet")}
          </Typography>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {orders.map((order) => (
            <Box
              key={order.id}
              sx={{
                p: "20px",

                border: "1px solid",
                borderColor: "divider",

                borderRadius: "12px",

                backgroundColor: "background.paper",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: "16px",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: "16px",
                      color: "text.primary",
                    }}
                  >
                    {t("Order")} #{order.id}
                  </Typography>

                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontSize: "13px",
                      mt: "4px",
                    }}
                  >
                    {order.date}
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "#004AC6",
                    fontSize: "18px",
                    fontWeight: 700,
                  }}
                >
                  ${order.totalPrice}
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontSize: "14px",
                  mb: "14px",
                  color: "text.primary",
                }}
              >
                {t("Payment")}:{" "}
                {order.paymentMethod === "cash"
                  ? t("Cash")
                  : t("Visa")}
              </Typography>

              {order.items.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",

                    py: "10px",

                    borderTop: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "text.primary",
                    }}
                  >
                    {item.productName} × {item.count}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "text.primary",
                    }}
                  >
                    ${item.totalPrice}
                  </Typography>
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default ProfileOrders;
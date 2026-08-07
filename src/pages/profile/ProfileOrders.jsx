import { Box, Typography } from "@mui/material";

function ProfileOrders() {
  const orders =
    JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <Box>
      <Typography
        component="h2"
        sx={{
          fontSize: "24px",
          fontWeight: 700,
          color: "#202124",
          mb: "8px",
        }}
      >
        My Orders
      </Typography>

      <Typography
        sx={{
          color: "#434655",
          fontSize: "14px",
          mb: "28px",
        }}
      >
        View your previous orders.
      </Typography>

      {orders.length === 0 ? (
        <Box
          sx={{
            p: "40px",
            textAlign: "center",
            border: "1px solid #E2E8F0",
            borderRadius: "12px",
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            No orders yet
          </Typography>

          <Typography
            sx={{
              mt: "6px",
              color: "#434655",
              fontSize: "14px",
            }}
          >
            You have not placed any orders yet.
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
                border: "1px solid #E2E8F0",
                borderRadius: "12px",
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
                    }}
                  >
                    Order #{order.id}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#434655",
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
                }}
              >
                Payment: {order.paymentMethod}
              </Typography>

              {order.items.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    py: "10px",
                    borderTop: "1px solid #E2E8F0",
                  }}
                >
                  <Typography sx={{ fontSize: "14px" }}>
                    {item.productName} × {item.count}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 600,
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
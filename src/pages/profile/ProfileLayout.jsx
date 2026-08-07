import {
  Box,
  Button,
  Container,
  Typography,
} from "@mui/material";

import { NavLink, Outlet } from "react-router-dom";

function ProfileLayout() {
  return (
    <Box
      component="section"
      sx={{
        mt: "90px",
        mb: "80px",
      }}
    >
      <Container maxWidth="xl">

        <Box sx={{ mb: "32px" }}>
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
            My Profile
          </Typography>

          <Typography
            sx={{
              mt: "8px",
              color: "#434655",
              fontSize: "15px",
            }}
          >
            Manage your personal information and view your orders.
          </Typography>
        </Box>


        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: "32px",

            flexDirection: {
              xs: "column",
              md: "row",
            },
          }}
        >

          <Box
            sx={{
              width: {
                xs: "100%",
                md: "260px",
              },

              flexShrink: 0,

              display: "flex",
              flexDirection: {
                xs: "row",
                md: "column",
              },

              gap: "12px",

              p: "16px",

              border: "1px solid #E2E8F0",
              borderRadius: "12px",
              backgroundColor: "#FFFFFF",
            }}
          >

            <Button
              component={NavLink}
              to="/profile/info"
              sx={{
                justifyContent: "flex-start",
                height: "46px",
                px: "16px",

                borderRadius: "8px",
                textTransform: "none",

                fontSize: "14px",
                fontWeight: 600,

                color: "#434655",

                "&.active": {
                  backgroundColor: "#004AC6",
                  color: "#FFFFFF",
                },

                "&:hover": {
                  backgroundColor: "#EAF1FF",
                  color: "#004AC6",
                },

                "&.active:hover": {
                  backgroundColor: "#004AC6",
                  color: "#FFFFFF",
                },
              }}
            >
              Personal Information
            </Button>


            <Button
              component={NavLink}
              to="/profile/orders"
              sx={{
                justifyContent: "flex-start",
                height: "46px",
                px: "16px",

                borderRadius: "8px",
                textTransform: "none",

                fontSize: "14px",
                fontWeight: 600,

                color: "#434655",

                "&.active": {
                  backgroundColor: "#004AC6",
                  color: "#FFFFFF",
                },

                "&:hover": {
                  backgroundColor: "#EAF1FF",
                  color: "#004AC6",
                },

                "&.active:hover": {
                  backgroundColor: "#004AC6",
                  color: "#FFFFFF",
                },
              }}
            >
              My Orders
            </Button>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              width: "100%",

              p: {
                xs: "20px",
                md: "28px",
              },

              border: "1px solid #E2E8F0",
              borderRadius: "12px",
              backgroundColor: "#FFFFFF",
            }}
          >
            <Outlet />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default ProfileLayout;
import {
  Box,
  Button,
  Container,
  Typography,
} from "@mui/material";

import { NavLink, Outlet } from "react-router-dom";

import { useTranslation } from "react-i18next";

function ProfileLayout() {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      sx={{
        mt: "90px",
        mb: "80px",
      }}
    >
      <Container maxWidth="xl">
        {/* Header */}

        <Box sx={{ mb: "32px" }}>
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
            {t("My Profile")}
          </Typography>

          <Typography
            sx={{
              mt: "8px",
              color: "text.secondary",
              fontSize: "15px",
            }}
          >
            {t("Profile Layout Description")}
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
          {/* Sidebar */}

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

              border: "1px solid",
              borderColor: "divider",

              borderRadius: "12px",

              backgroundColor: "background.paper",
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

                color: "text.secondary",

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
              {t("Personal Information")}
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

                color: "text.secondary",

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
              {t("My Orders")}
            </Button>
          </Box>

          {/* Page Content */}

          <Box
            sx={{
              flexGrow: 1,

              width: "100%",

              p: {
                xs: "20px",
                md: "28px",
              },

              border: "1px solid",
              borderColor: "divider",

              borderRadius: "12px",

              backgroundColor: "background.paper",
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
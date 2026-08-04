import { Box, Container } from "@mui/material";
import React from "react";
import { Breadcrumbs, Link as MuiLink, Typography } from "@mui/material";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link as RouterLink } from "react-router-dom";

function Shop() {
  return (
    <Box component="section" sx={{ mt: "90px" }}>
      <Container maxWidth="xl">
        <Box>
          <Breadcrumbs
            separator={
              <NavigateNextIcon
                sx={{
                  fontSize: "16px",
                  color: "#434655",
                }}
              />
            }
            aria-label="breadcrumb"
            sx={{
              mb: "24px",

              "& .MuiBreadcrumbs-separator": {
                mx: "3px",
              },
            }}
          >
            <MuiLink
              component={RouterLink}
              to="/"
              underline="none"
              sx={{
                color: "#434655",
                fontSize: "14px",

                "&:hover": {
                  color: "#004AC6",
                },
              }}
            >
              Home
            </MuiLink>

            <Typography
              sx={{
                color: "#202124",
                fontSize: "14px",
                fontWeight: 700,
              }}
            >
              Shop
            </Typography>
          </Breadcrumbs>
        </Box>
      </Container>
    </Box>
  );
}

export default Shop;

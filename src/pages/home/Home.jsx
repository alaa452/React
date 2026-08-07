import React from "react";

import Categories from "../../component/categories/Categories";
import Products from "../../component/products/Products";

import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import { useTranslation } from "react-i18next";

import homeImage from "../../image/homeImage.png";
import smallHomeImage from "../../image/smallHomeImage.png";
import deliveryIcon from "../../image/deliveryIcon.png";
import paymentIcon from "../../image/paymentIcon.png";
import returnIcon from "../../image/returnIcon.png";
import supportCustomerIcon from "../../image/supportCustomerIcon.png";

export default function Home() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        color: "text.primary",
      }}
    >
      <Container maxWidth="xl">
        <Box>
          {/* Hero Section */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "66px",
              py: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "32px",
                maxWidth: "50%",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 600,
                  color: "#004AC6",
                  fontSize: "14px",
                  backgroundColor: "#2564eb10",
                  padding: "4px 16px",
                  borderRadius: "25px",
                  width: "180px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {t("New Season Arrivals")}
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  fontWeight: "bold",
                  fontSize: "40px",
                  lineHeight: "1.5",
                  letterSpacing: "-0.8px",
                  color: "text.primary",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    display: "block",
                    color: "#004AC6",
                  }}
                >
                  {t("Everything You Need")}
                </Box>

                {t("All in One Place")}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: "18px",
                  color: "text.secondary",
                  lineHeight: "1.5",
                }}
              >
                {t("Home Description")}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  gap: "16px",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#004AC6",
                    color: "#fff",
                    padding: "32px 18px",
                    fontSize: "14px",
                    fontWeight: "bold",
                    borderRadius: "10px",
                    height: "48px !important",
                    textTransform: "none",
                    letterSpacing: "0.14px",

                    "&:hover": {
                      backgroundColor: "#003399",
                    },
                  }}
                >
                  {t("Shop Now")}
                </Button>

                <Button
                  variant="outlined"
                  sx={{
                    color: "#004AC6",
                    borderColor: "#004AC6",
                    padding: "32px 18px",
                    fontSize: "14px",
                    fontWeight: "bold",
                    borderRadius: "10px",
                    height: "48px !important",
                    textTransform: "none",
                    letterSpacing: "0.14px",
                    borderWidth: "2px",

                    "&:hover": {
                      backgroundColor: "#004AC6",
                      color: "#fff",
                    },
                  }}
                >
                  {t("Explore Categories")}
                </Button>
              </Box>
            </Box>

            {/* Images */}

            <Box>
              <Box
                component="img"
                src={homeImage}
                alt="Home"
                sx={{
                  position: "relative",
                  width: "fit-content",
                  maxHeight: "546px",
                  objectFit: "cover",
                  transform: "rotate(4deg)",
                }}
              />

              <Box
                component="img"
                src={smallHomeImage}
                alt="Small Home"
                sx={{
                  position: "absolute",
                  top: "55%",
                  left: "52%",
                }}
              />
            </Box>
          </Box>

          {/* Features */}

          <Box sx={{ marginTop: "32px" }}>
            <Grid container spacing={15}>
              <Grid item xs={12} sm={6} md={3}>
                <Box
                  sx={{
                    display: "flex",
                    padding: "24px",
                    gap: "16px",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={deliveryIcon}
                    alt="Delivery Icon"
                  />

                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        color: "text.primary",
                      }}
                    >
                      {t("Fast Delivery")}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        height: "40px !important",
                        fontSize: "14px",
                      }}
                    >
                      {t("Free Shipping")}
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Box
                  sx={{
                    display: "flex",
                    padding: "24px",
                    gap: "16px",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={paymentIcon}
                    alt="Payment Icon"
                  />

                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        color: "text.primary",
                      }}
                    >
                      {t("Secure Payment")}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        height: "40px !important",
                        fontSize: "14px",
                      }}
                    >
                      {t("Secure Payment Description")}
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Box
                  sx={{
                    display: "flex",
                    padding: "24px",
                    gap: "16px",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={returnIcon}
                    alt="Return Icon"
                  />

                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        color: "text.primary",
                      }}
                    >
                      {t("Easy Returns")}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        height: "40px !important",
                        fontSize: "14px",
                      }}
                    >
                      {t("Returns Description")}
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Box
                  sx={{
                    display: "flex",
                    padding: "24px",
                    gap: "16px",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={supportCustomerIcon}
                    alt="Support Customer Icon"
                  />

                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        color: "text.primary",
                      }}
                    >
                      {t("Customer Support")}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        height: "40px !important",
                        fontSize: "14px",
                      }}
                    >
                      {t("Customer Support Description")}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Categories */}

          <Box sx={{ marginTop: "32px" }}>
            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "bold",
                  fontSize: "32px",
                  marginBottom: "16px",
                  lineHeight: "40px",
                  letterSpacing: "0.64px",
                  color: "text.primary",
                }}
              >
                {t("Shop by Categories")}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                {t("Find exactly what you're looking for")}
              </Typography>
            </Box>

            <Categories />
          </Box>
        </Box>

        <Products />
      </Container>
    </Box>
  );
}
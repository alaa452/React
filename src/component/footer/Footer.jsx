import React from "react";

import {
  Box,
  Container,
  Typography,
} from "@mui/material";

import { useTranslation } from "react-i18next";

import QRCode from "../../image/QRCode.png";
import Trusted from "../../image/Trusted.png";
import hotmail from "../../image/hotmail.png";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        mt: 10,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          py: "32px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "70px",
              width: "100%",

              flexDirection: {
                xs: "column",
                md: "row",
              },
            }}
          >
            {/* Left Side */}

            <Box
              sx={{
                display: "flex",
                gap: "16px",
                flexDirection: "column",

                width: {
                  xs: "100%",
                  md: "20%",
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "24px",
                  lineHeight: "32px",
                  color: "#004AC6",
                }}
              >
                {t("KnowledgeShop")}
              </Typography>

              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: "14px",
                  lineHeight: "20px",
                }}
              >
                {t("Footer Description")}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  gap: "16px",
                }}
              >
                <Box
                  component="img"
                  src={QRCode}
                  alt="QR Code"
                />

                <Box
                  component="img"
                  src={Trusted}
                  alt="Trusted"
                />

                <Box
                  component="img"
                  src={hotmail}
                  alt="Email"
                />
              </Box>
            </Box>

            {/* Right Side */}

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",

                width: {
                  xs: "100%",
                  md: "80%",
                },

                gap: "24px",

                flexDirection: {
                  xs: "column",
                  sm: "row",
                },
              }}
            >
              {/* Shop */}

              <Box
                sx={{
                  display: "flex",
                  gap: "16px",
                  flexDirection: "column",
                  width: {
                    xs: "100%",
                    sm: "33.33%",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "text.primary",
                  }}
                >
                  {t("Shop")}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    gap: "9px",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "text.secondary",
                    }}
                  >
                    {t("All Products")}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "text.secondary",
                    }}
                  >
                    {t("Categories")}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "text.secondary",
                    }}
                  >
                    {t("Sale & Offers")}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "text.secondary",
                    }}
                  >
                    {t("New Arrivals")}
                  </Typography>
                </Box>
              </Box>

              {/* Service */}

              <Box
                sx={{
                  display: "flex",
                  gap: "16px",
                  flexDirection: "column",

                  width: {
                    xs: "100%",
                    sm: "33.33%",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "text.primary",
                  }}
                >
                  {t("Service")}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    gap: "9px",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "text.secondary",
                    }}
                  >
                    {t("Order Tracking")}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "text.secondary",
                    }}
                  >
                    {t("Shipping Policy")}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "text.secondary",
                    }}
                  >
                    {t("Easy Returns")}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "text.secondary",
                    }}
                  >
                    {t("Help Center")}
                  </Typography>
                </Box>
              </Box>

              {/* Legal */}

              <Box
                sx={{
                  display: "flex",
                  gap: "16px",
                  flexDirection: "column",

                  width: {
                    xs: "100%",
                    sm: "33.33%",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "text.primary",
                  }}
                >
                  {t("Legal")}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    gap: "9px",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "text.secondary",
                    }}
                  >
                    {t("Terms of Service")}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "text.secondary",
                    }}
                  >
                    {t("Privacy Policy")}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "text.secondary",
                    }}
                  >
                    {t("Cookie Policy")}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "text.secondary",
                    }}
                  >
                    {t("Accessibility")}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Copyright */}

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Typography
              sx={{
                width: "100%",
                fontSize: "14px",
                lineHeight: "20px",
                color: "text.secondary",
                textAlign: "center",

                px: "48px",
                py: "24px",

                borderTop: "1px solid",
                borderColor: "divider",
              }}
            >
              {t("Copyright")}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
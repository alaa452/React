import React from "react";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";
import { Box, Container, Typography } from "@mui/material";
import QRCode from "../../image/QRCode.png";
import Trusted from "../../image/Trusted.png";
import hotmail from "../../image/hotmail.png";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "background.default", mt: 10 }}>
      <Container
        maxWidth="xl"
        sx={{py:"32px"}}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <Box sx={{ display: "flex", gap: "70px", width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                gap: "16px",
                flexDirection: "column",
                width: "20%",
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
                KnowledgeShop
              </Typography>
              <Typography
                sx={{ color: "#text.secondary", fontSize: "14px", lineHeight: "20px" }}
              >
                Elevating your everyday experience through carefully curated
                premium products and exceptional service.
              </Typography>
              <Box sx={{ display: "flex", gap: "16px" }}>
                <Box component="img" src={QRCode} />
                <Box component="img" src={Trusted} />
                <Box component="img" src={hotmail} />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "80%",
                gap: "24px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "16px",
                  flexDirection: "column",
                  width: "33.33%",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "semiBold",
                    fontSize: "14px",
                    lineHeight: "16px",
                  }}
                >
                  Shop
                </Typography>
                <Box
                  sx={{ display: "flex", gap: "9px", flexDirection: "column" }}
                >
                  <Typography
                    sx={{
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "#text.secondary",
                    }}
                  >
                    All Products
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "#text.secondary",
                    }}
                  >
                    Categories
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "#text.secondary",
                    }}
                  >
                    Sale & Offers
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "#text.secondary",
                    }}
                  >
                    New Arrivals
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "16px",
                  flexDirection: "column",
                  width: "33.33%",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "semiBold",
                    fontSize: "14px",
                    lineHeight: "16px",
                  }}
                >
                  Service
                </Typography>
                <Box
                  sx={{ display: "flex", gap: "9px", flexDirection: "column" }}
                >
                  <Typography
                    sx={{
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "#text.secondary",
                    }}
                  >
                    Order Tracking
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "#text.secondary",
                    }}
                  >
                    Shipping Policy
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "#text.secondary",
                    }}
                  >
                    Easy Returns
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "#text.secondary",
                    }}
                  >
                    Help Center
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "16px",
                  flexDirection: "column",
                  width: "33.33%",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "semiBold",
                    fontSize: "14px",
                    lineHeight: "16px",
                  }}
                >
                  Legal
                </Typography>
                <Box
                  sx={{ display: "flex", gap: "9px", flexDirection: "column" }}
                >
                  <Typography
                    sx={{
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "#text.secondary",
                    }}
                  >
                    Terms of Service
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "#text.secondary",
                    }}
                  >
                    Privacy Policy
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "#text.secondary",
                    }}
                  >
                    Cookie Policy
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "#text.secondary",
                    }}
                  >
                    Accessibility
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box sx={{display:"flex", justifyContent: "center", width:"100%"}}>
            <Typography
              sx={{
                fontSize: "14px",
                lineHeight: "20px",
                color: "#text.secondary",
                px:"48px",
                py:"24px",
                borderTop: "1px solid #E2E8F0",
              }}
            >
              © 2026 KnowledgeShop. All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

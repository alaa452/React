import React from "react";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";

import { createBrowserRouter, Outlet } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Box } from "@mui/material";

export default function MainLayout() {
  const userName = "Alaa";
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        <Outlet />
      </Box>

      <Footer />
    </Box>
  );
}

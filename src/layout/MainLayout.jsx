import { useState } from "react";
import { Outlet } from "react-router-dom";

import {
  Box,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";

import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";

function MainLayout() {
  const [mode, setMode] = useState("light");

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const handleTheme = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "background.default",
          color: "text.primary",
        }}
      >
        <Navbar
          mode={mode}
          handleTheme={handleTheme}
        />

        <Outlet />

        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default MainLayout;
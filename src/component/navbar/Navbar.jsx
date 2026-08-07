import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import useAuthStore from "../../store/useAuthStore";
import useCart from "../../hook/useCart";

import { useTranslation } from "react-i18next";
import i18n from "../../i18next";

import {
  Box,
  Button,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LightModeIcon from "@mui/icons-material/LightMode";
import LanguageIcon from "@mui/icons-material/Language";

import "./navbar.css";

export default function Navbar({ mode, handleTheme }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [openMenu, setOpenMenu] = useState(false);

  const token = useAuthStore((state) => state.token);
  const logout = useAuthStore((state) => state.logout);

  const { data } = useCart();

  const cartCount = data?.items?.length || 0;

  const { t } = useTranslation();

  const handleLogout = () => {
    logout();
    navigate("/login");
    setOpenMenu(false);
  };

  const handleLanguage = () => {
    const newLanguage =
      i18n.language === "en" ? "ar" : "en";

    i18n.changeLanguage(newLanguage);

    document.documentElement.dir =
      newLanguage === "ar" ? "rtl" : "ltr";

    document.documentElement.lang = newLanguage;
  };

  const linkStyle = {
    textDecoration: "none",
    color: "text.secondary",
    fontSize: "14px",
    fontWeight: 500,
  };

  const isActive = (path) => {
    return location.pathname === path
      ? "nav-link active"
      : "nav-link";
  };

  return (
    <Box
      component="nav"
      sx={{
        width: "100%",
        borderBottom: "1px solid",
        borderColor: "divider",
        position: "fixed",
        top: 0,
        zIndex: 1000,
        backdropFilter: "blur(20px)",
        backgroundColor: "background.paper",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: 2,
          }}
        >
          {/* Logo */}

          <Typography
            sx={{
              fontWeight: 700,
              fontSize: {
                xs: "20px",
                md: "24px",
              },
              color: "#004AC6",
            }}
          >
            {t("KnowledgeShop")}
          </Typography>

          {/* Desktop Links */}

          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              alignItems: "center",
              gap: "24px",
            }}
          >
            <Box
              component={Link}
              to="/"
              sx={linkStyle}
              className={isActive("/")}
            >
              {t("Home")}
            </Box>

            <Box
              component={Link}
              to="/shop"
              sx={linkStyle}
              className={isActive("/shop")}
            >
              {t("Shop")}
            </Box>

            {token ? (
              <>
                <Box
                  component={Link}
                  to="/cart"
                  sx={linkStyle}
                  className={isActive("/cart")}
                >
                  {t("Cart")} ({cartCount})
                </Box>

                <Button
                  onClick={handleLogout}
                  sx={{
                    ...linkStyle,
                    textTransform: "none",
                    padding: 0,
                  }}
                >
                  {t("Logout")}
                </Button>
              </>
            ) : (
              <>
                <Box
                  component={Link}
                  to="/login"
                  sx={linkStyle}
                  className={isActive("/login")}
                >
                  {t("Login")}
                </Box>

                <Box
                  component={Link}
                  to="/register"
                  sx={linkStyle}
                  className={isActive("/register")}
                >
                  {t("Register")}
                </Box>
              </>
            )}
          </Box>

          {/* Desktop Icons */}

          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              alignItems: "center",
              gap: 1,
            }}
          >
            {/* Dark Mode */}

            <IconButton
              onClick={handleTheme}
              sx={{
                color: "text.secondary",

                "&:hover": {
                  color: "#004AC6",
                  backgroundColor: "transparent",
                },
              }}
            >
              {mode === "light" ? (
                <DarkModeIcon />
              ) : (
                <LightModeIcon />
              )}
            </IconButton>

            {/* Language */}

            <IconButton
              onClick={handleLanguage}
              sx={{
                color: "text.secondary",

                "&:hover": {
                  color: "#004AC6",
                  backgroundColor: "transparent",
                },
              }}
            >
              <LanguageIcon />
            </IconButton>

            {/* Profile */}

            {token && (
              <IconButton
                component={Link}
                to="/profile"
                sx={{
                  color: "text.secondary",

                  "&:hover": {
                    color: "#004AC6",
                    backgroundColor: "transparent",
                  },
                }}
              >
                <AccountCircleIcon />
              </IconButton>
            )}
          </Box>

          {/* Mobile Menu Button */}

          <IconButton
            sx={{
              display: {
                xs: "flex",
                md: "none",
              },
              color: "text.primary",
            }}
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Box>

        {/* Mobile Menu */}

        <Box
          sx={{
            display: {
              xs: openMenu ? "flex" : "none",
              md: "none",
            },

            flexDirection: "column",
            gap: 2,

            position: "absolute",
            top: "70px",
            left: 0,

            width: "100%",

            backgroundColor: "background.paper",

            padding: 3,

            boxShadow: "0 10px 20px rgba(0,0,0,.1)",

            zIndex: 100,
          }}
        >
          <Box
            component={Link}
            to="/"
            sx={linkStyle}
            onClick={() => setOpenMenu(false)}
          >
            {t("Home")}
          </Box>

          <Box
            component={Link}
            to="/shop"
            sx={linkStyle}
            onClick={() => setOpenMenu(false)}
          >
            {t("Shop")}
          </Box>

          {token ? (
            <>
              <Box
                component={Link}
                to="/cart"
                sx={linkStyle}
                onClick={() => setOpenMenu(false)}
              >
                {t("Cart")} ({cartCount})
              </Box>

              <Box
                component={Link}
                to="/profile"
                sx={linkStyle}
                onClick={() => setOpenMenu(false)}
              >
                {t("Profile")}
              </Box>

              <Button
                onClick={handleLogout}
                sx={{
                  justifyContent: "flex-start",
                  padding: 0,
                  color: "text.secondary",
                  textTransform: "none",
                }}
              >
                {t("Logout")}
              </Button>
            </>
          ) : (
            <>
              <Box
                component={Link}
                to="/login"
                sx={linkStyle}
                onClick={() => setOpenMenu(false)}
              >
                {t("Login")}
              </Box>

              <Box
                component={Link}
                to="/register"
                sx={linkStyle}
                onClick={() => setOpenMenu(false)}
              >
                {t("Register")}
              </Box>
            </>
          )}

          {/* Mobile Theme + Language */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <IconButton
              onClick={handleTheme}
              sx={{
                color: "text.secondary",
              }}
            >
              {mode === "light" ? (
                <DarkModeIcon />
              ) : (
                <LightModeIcon />
              )}
            </IconButton>

            <IconButton
              onClick={handleLanguage}
              sx={{
                color: "text.secondary",
              }}
            >
              <LanguageIcon />
            </IconButton>
          </Box>

          <TextField
            placeholder={t("Search products")}
            size="small"
            fullWidth
          />
        </Box>
      </Container>
    </Box>
  );
}
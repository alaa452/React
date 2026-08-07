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
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LightModeIcon from "@mui/icons-material/LightMode";
import LanguageIcon from "@mui/icons-material/Language";

import homeImage from "../../image/homeImage.png";
import { IconButton } from "@mui/material";
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

  const linkStyle = {
    textDecoration: "none",
    color: "#text.secondary",
    fontSize: "14px",
    fontWeight: 500,
  };

  const isActive = (path) => {
    return location.pathname === path ? "nav-link active" : "nav-link";
  };

  return (
    <Box
      component="nav"
      sx={{
        width: "100%",
        borderBottom: "1px solid #eee",
        position: "fixed",
        top: 0,
        zIndex: 1000,
        backdropFilter: "blur(20px)",
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
            <Link to="/" style={linkStyle} className={isActive("/")}>
              {t("Home")}
            </Link>

            <Link to="/shop" style={linkStyle} className={isActive("/shop")}>
              {t("Shop")}
            </Link>

            {token ? (
              <>
                <Link
                  to="/cart"
                  style={linkStyle}
                  className={isActive("/cart")}
                >
                  {t("Cart")} ({cartCount})
                </Link>

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

                {/* <Link
                  to="/profile"
                  style={linkStyle}
                  className={isActive("/profile")}
                >
                  {t("Profile")}
                </Link> */}
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  style={linkStyle}
                  className={isActive("/login")}
                >
                  {t("Login")}
                </Link>

                <Link
                  to="/register"
                  style={linkStyle}
                  className={isActive("/register")}
                >
                  {t("Register")}
                </Link>
              </>
            )}
          </Box>

          {/* Search + Icons Desktop */}

          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },

              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <IconButton
                onClick={handleTheme}
                sx={{
                  color: "#text.secondary",

                  "&:hover": {
                    color: "#004AC6",
                    backgroundColor: "transparent",
                  },
                }}
              >
                {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
              </IconButton>
              <LanguageIcon
                sx={{
                  color: "#text.secondary",
                  cursor: "pointer",
                  transition: "color 0.3s ease",
                  "&:hover": { color: "#004AC6" },
                }}
              />
              <Link to="/profile">
                <AccountCircleIcon
                  sx={{
                    color: "#text.secondary",
                    cursor: "pointer",
                    transition: "color 0.3s ease",

                    "&:hover": {
                      color: "#004AC6",
                    },
                  }}
                />
              </Link>
            </Box>
          </Box>

          {/* Mobile Menu Button */}

          <Button
            sx={{
              display: {
                xs: "flex",
                md: "none",
              },
            }}
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? <CloseIcon /> : <MenuIcon />}
          </Button>
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
            backgroundColor: "#fff",
            padding: 3,
            boxShadow: "0 10px 20px rgba(0,0,0,.1)",
            zIndex: 100,
          }}
        >
          <Link to="/" style={linkStyle} onClick={() => setOpenMenu(false)}>
            {t("Home")}
          </Link>

          <Link to="/shop" style={linkStyle} onClick={() => setOpenMenu(false)}>
            {t("Shop")}
          </Link>

          {token ? (
            <>
              <Link
                to="/cart"
                style={linkStyle}
                onClick={() => setOpenMenu(false)}
              >
                {t("Cart")} ({cartCount})
              </Link>

              {/* <Link
                to="/profile"
                style={linkStyle}
                onClick={() => setOpenMenu(false)}
              >
                {t("Profile")}
              </Link> */}

              <Button
                onClick={handleLogout}
                sx={{
                  justifyContent: "flex-start",
                  padding: 0,
                  color: "#text.secondary",
                }}
              >
                {t("Logout")}
              </Button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                style={linkStyle}
                onClick={() => setOpenMenu(false)}
              >
                {t("Login")}
              </Link>

              <Link
                to="/register"
                style={linkStyle}
                onClick={() => setOpenMenu(false)}
              >
                {t("Register")}
              </Link>
            </>
          )}

          <TextField placeholder="Search products..." size="small" fullWidth />
        </Box>
      </Container>
    </Box>
  );
}

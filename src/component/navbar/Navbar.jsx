import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../../store/useAuthStore";
import useCart from "../../hook/useCart";
import { useTranslation } from "react-i18next";
import i18n from "../../i18next";
import { Button } from "@mui/material";

export default function Navbar() {
  const navigate = useNavigate();
  const token = useAuthStore((state) => state.token);
  const logout = useAuthStore((state) => state.logout);
  const {t} = useTranslation();
  const {data}= useCart();
  const cartCount = data?.items.length || 0;
  const changeLanguage = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
  }

  const handleLogout = ()=>{
    logout();
    navigate("/login");
  }
  return (
    <nav>
      <Link to="/"> {t("Home")} </Link>
      <Link to="/products"> {t("Products")} </Link>

      {token ?
        <>
          <Link to="/cart"> {t("Cart")} ({cartCount})</Link>
          <Link to="/login" component="button" onClick={handleLogout}>
            {t("Logout")}
          </Link>
        </>:
        <>
          <Link to="/login"> {t("Login")} </Link>
          <Link to="/register"> {t("Register")} </Link>
        </>
      }
      <Button onClick={changeLanguage}>
        {i18n.language === "ar" ? "EN" : "AR"}
      </Button>
    </nav>
  );
}

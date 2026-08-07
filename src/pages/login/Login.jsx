import { useState } from "react";

import {
  Box,
  Button,
  CircularProgress,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";

import axios from "axios";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Link as RouterLink, useNavigate } from "react-router-dom";

import { loginSchems } from "../../validations/LoginSchems";
import useAuthStore from "../../store/useAuthStore";

export default function Login() {
  const navigate = useNavigate();

  const setToken = useAuthStore((state) => state.setToken);

  const [serverErrors, setServerErrors] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(loginSchems),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginForm = async (formData) => {
    try {
      setServerErrors([]);

      const response = await axios.post(
        `${import.meta.env.VITE_BURL}/auth/Account/Login`,
        formData,
      );

      setToken(response.data.accessToken);

      navigate("/");
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "Login failed. Please check your email and password.";

      setServerErrors([message]);
    }
  };

  return (
    <Box
      component="section"
      sx={{
        minHeight: "calc(100vh - 70px)",
        mt: "70px",
        py: {
          xs: "40px",
          md: "70px",
        },
        backgroundColor: "background.default",

        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            width: "100%",
            maxWidth: "460px",
            mx: "auto",
            p: {
              xs: "24px",
              sm: "40px",
            },

            backgroundColor: "background.paper",
            border: "1px solid #E2E8F0",
            borderRadius: "16px",
            boxShadow: "0 12px 35px rgba(0, 0, 0, 0.08)",
          }}
        >
          <Box
            sx={{
              mb: "32px",
              textAlign: "center",
            }}
          >
            <Typography
              component="h1"
              sx={{
                color: "text.primary",
                fontSize: {
                  xs: "28px",
                  sm: "32px",
                },
                lineHeight: "40px",
                fontWeight: 700,
              }}
            >
              Welcome Back
            </Typography>

            <Typography
              sx={{
                mt: "8px",
                color: "text.secondary",
                fontSize: "15px",
                lineHeight: "22px",
              }}
            >
              Login to continue shopping with KnowledgeShop
            </Typography>
          </Box>

          {serverErrors.length > 0 && (
            <Box
              sx={{
                mb: "20px",
                p: "12px 16px",
                backgroundColor: "#FFF1F2",
                border: "1px solid #FECDD3",
                borderRadius: "8px",
              }}
            >
              {serverErrors.map((serverError, index) => (
                <Typography
                  key={index}
                  sx={{
                    color: "#DC2626",
                    fontSize: "14px",
                  }}
                >
                  {serverError}
                </Typography>
              ))}
            </Box>
          )}

          <Box
            component="form"
            onSubmit={handleSubmit(loginForm)}
            noValidate
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <TextField
              {...register("email")}
              id="email"
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: "52px",
                  borderRadius: "8px",

                  "&.Mui-focused fieldset": {
                    borderColor: "#004AC6",
                  },
                },

                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#004AC6",
                },
              }}
            />

            <TextField
              {...register("password")}
              id="password"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: "52px",
                  borderRadius: "8px",

                  "&.Mui-focused fieldset": {
                    borderColor: "#004AC6",
                  },
                },

                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#004AC6",
                },
              }}
            />

            {/* نسيت كلمة المرور */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Link
                component={RouterLink}
                to="/forgot-password"
                underline="none"
                sx={{
                  color: "#004AC6",
                  fontSize: "14px",
                  fontWeight: 500,

                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Forgot Password?
              </Link>
            </Box>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={isSubmitting}
              sx={{
                height: "50px",
                borderRadius: "8px",
                backgroundColor: "#004AC6",
                color: "background.paper",
                textTransform: "none",
                fontSize: "16px",
                fontWeight: 600,
                boxShadow: "none",

                "&:hover": {
                  backgroundColor: "#003B9E",
                  boxShadow: "none",
                },

                "&.Mui-disabled": {
                  backgroundColor: "#AFC4E8",
                  color: "background.paper",
                },
              }}
            >
              {isSubmitting ? (
                <CircularProgress
                  size={23}
                  sx={{
                    color: "background.paper",
                  }}
                />
              ) : (
                "Login"
              )}
            </Button>
          </Box>

          <Typography
            sx={{
              mt: "28px",
              color: "text.secondary",
              fontSize: "14px",
              textAlign: "center",
            }}
          >
            Don&apos;t have an account?{" "}
            <Link
              component={RouterLink}
              to="/register"
              underline="none"
              sx={{
                color: "#004AC6",
                fontWeight: 600,

                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Create Account
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
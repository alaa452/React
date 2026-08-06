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

import { registerSchema } from "../../validations/ResisterSchems";

export default function Register() {
  const navigate = useNavigate();

  const [serverErrors, setServerErrors] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(registerSchema),

    defaultValues: {
      userName: "",
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
    },
  });

  const registerForm = async (formData) => {
    try {
      setServerErrors([]);

      await axios.post(
        `${import.meta.env.VITE_BURL}/auth/Account/Register`,
        formData,
      );

      navigate("/login");
    } catch (error) {
      const responseErrors = error.response?.data?.errors;

      if (Array.isArray(responseErrors)) {
        setServerErrors(responseErrors);
      } else if (
        typeof responseErrors === "object" &&
        responseErrors !== null
      ) {
        const errorsArray = Object.values(responseErrors).flat();

        setServerErrors(errorsArray);
      } else {
        const message =
          error.response?.data?.message ||
          "Registration failed. Please try again.";

        setServerErrors([message]);
      }
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
        backgroundColor: "#F7F9FC",

        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            width: "100%",
            maxWidth: "520px",
            mx: "auto",

            p: {
              xs: "24px",
              sm: "40px",
            },

            backgroundColor: "#FFFFFF",
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
                color: "#202124",
                fontSize: {
                  xs: "28px",
                  sm: "32px",
                },
                lineHeight: "40px",
                fontWeight: 700,
              }}
            >
              Create Account
            </Typography>

            <Typography
              sx={{
                mt: "8px",
                color: "#434655",
                fontSize: "15px",
                lineHeight: "22px",
              }}
            >
              Create your account and start shopping with KnowledgeShop
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
                    lineHeight: "21px",
                  }}
                >
                  {serverError}
                </Typography>
              ))}
            </Box>
          )}

          <Box
            component="form"
            onSubmit={handleSubmit(registerForm)}
            noValidate
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <TextField
              {...register("userName")}
              id="userName"
              label="Username"
              type="text"
              variant="outlined"
              fullWidth
              error={Boolean(errors.userName)}
              helperText={errors.userName?.message}
              sx={inputStyle}
            />

            <TextField
              {...register("fullName")}
              id="fullName"
              label="Full Name"
              type="text"
              variant="outlined"
              fullWidth
              error={Boolean(errors.fullName)}
              helperText={errors.fullName?.message}
              sx={inputStyle}
            />

            <TextField
              {...register("email")}
              id="email"
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
              sx={inputStyle}
            />

            <TextField
              {...register("phoneNumber")}
              id="phoneNumber"
              label="Phone Number"
              type="tel"
              variant="outlined"
              fullWidth
              error={Boolean(errors.phoneNumber)}
              helperText={errors.phoneNumber?.message}
              sx={inputStyle}
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
              sx={inputStyle}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={isSubmitting}
              sx={{
                height: "50px",
                borderRadius: "8px",
                backgroundColor: "#004AC6",
                color: "#FFFFFF",
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
                  color: "#FFFFFF",
                },
              }}
            >
              {isSubmitting ? (
                <CircularProgress
                  size={23}
                  sx={{
                    color: "#FFFFFF",
                  }}
                />
              ) : (
                "Create Account"
              )}
            </Button>
          </Box>

          <Typography
            sx={{
              mt: "28px",
              color: "#434655",
              fontSize: "14px",
              textAlign: "center",
            }}
          >
            Already have an account?{" "}
            <Link
              component={RouterLink}
              to="/login"
              underline="none"
              sx={{
                color: "#004AC6",
                fontWeight: 600,

                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Login
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

const inputStyle = {
  "& .MuiOutlinedInput-root": {
    minHeight: "52px",
    borderRadius: "8px",

    "&.Mui-focused fieldset": {
      borderColor: "#004AC6",
    },
  },

  "& .MuiInputLabel-root.Mui-focused": {
    color: "#004AC6",
  },
};

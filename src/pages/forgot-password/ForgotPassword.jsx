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

import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");

    if (email.trim() === "") {
      setErrorMessage("Please enter your email address.");
      return;
    }

    try {
      setIsSubmitting(true);

      await axios.post(
        `${import.meta.env.VITE_BURL}/auth/Account/SendCode`,
        {
          email: email,
        },
      );

      navigate("/reset-password", {
        state: {
          email: email,
        },
      });
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "Something went wrong. Please try again.";

      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
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
            maxWidth: "460px",
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
              textAlign: "center",
              mb: "30px",
            }}
          >
            <Typography
              component="h1"
              sx={{
                color: "#202124",
                fontSize: {
                  xs: "27px",
                  sm: "32px",
                },
                fontWeight: 700,
              }}
            >
              Forgot Password?
            </Typography>

            <Typography
              sx={{
                mt: "10px",
                color: "#434655",
                fontSize: "15px",
                lineHeight: "23px",
              }}
            >
              Enter your email address and we will send you instructions to
              reset your password.
            </Typography>
          </Box>

          {errorMessage && (
            <Box
              sx={{
                mb: "20px",
                p: "12px",
                backgroundColor: "#FFF1F2",
                border: "1px solid #FECDD3",
                borderRadius: "8px",
              }}
            >
              <Typography
                sx={{
                  color: "#DC2626",
                  fontSize: "14px",
                }}
              >
                {errorMessage}
              </Typography>
            </Box>
          )}
          {successMessage && (
            <Box
              sx={{
                mb: "20px",
                p: "12px",
                backgroundColor: "#F0FDF4",
                border: "1px solid #BBF7D0",
                borderRadius: "8px",
              }}
            >
              <Typography
                sx={{
                  color: "#15803D",
                  fontSize: "14px",
                }}
              >
                {successMessage}
              </Typography>
            </Box>
          )}

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <TextField
              id="email"
              label="Email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              fullWidth
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

            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={isSubmitting}
              sx={{
                height: "50px",
                borderRadius: "8px",
                backgroundColor: "#004AC6",
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
                "Send Reset Link"
              )}
            </Button>
          </Box>

          <Typography
            sx={{
              mt: "28px",
              textAlign: "center",
              color: "#434655",
              fontSize: "14px",
            }}
          >
            Remember your password?{" "}
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
              Back to Login
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default ForgotPassword;

import { useState } from "react";

import {
  Box,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material";

import axios from "axios";

import { useLocation, useNavigate } from "react-router-dom";

function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();

  const emailFromForgotPage = location.state?.email || "";

  const [email, setEmail] = useState(emailFromForgotPage);
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event) => {
  event.preventDefault();

  setErrorMessage("");
  setSuccessMessage("");

  if (
    email.trim() === "" ||
    code.trim() === "" ||
    newPassword.trim() === "" ||
    confirmPassword.trim() === ""
  ) {
    setErrorMessage("Please fill in all fields.");
    return;
  }

  if (newPassword !== confirmPassword) {
    setErrorMessage("Passwords do not match.");
    return;
  }

  try {
    setIsSubmitting(true);

    const response = await axios.patch(
      `${import.meta.env.VITE_BURL}/auth/Account/ResetPassword`,
      {
        code: code.trim(),
        newPassword: newPassword,
        email: email.trim(),
      },
    );

    console.log("Reset password response:", response.data);

    setSuccessMessage(
      "Your password has been changed successfully.",
    );

    setTimeout(() => {
      navigate("/login");
    }, 1500);
  } catch (error) {
    console.log("Reset password error:", error.response?.data);

    const responseData = error.response?.data;

    let message = "Reset password failed. Please try again.";

    if (typeof responseData === "string") {
      message = responseData;
    } else if (responseData?.message) {
      message = responseData.message;
    } else if (responseData?.error) {
      message = responseData.error;
    } else if (Array.isArray(responseData?.errors)) {
      message = responseData.errors.join(", ");
    } else if (
      responseData?.errors &&
      typeof responseData.errors === "object"
    ) {
      message = Object.values(responseData.errors)
        .flat()
        .join(", ");
    }

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
        mt: "50px",
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
              Reset Password
            </Typography>

            <Typography
              sx={{
                mt: "10px",
                color: "#434655",
                fontSize: "15px",
                lineHeight: "23px",
              }}
            >
              Enter the code sent to your email and choose a new password.
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
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              fullWidth
              sx={inputStyle}
            />

            <TextField
              label="Verification Code"
              value={code}
              onChange={(event) => setCode(event.target.value)}
              fullWidth
              sx={inputStyle}
            />

            <TextField
              label="New Password"
              type="password"
              value={newPassword}
              onChange={(event) => setNewPassword(event.target.value)}
              fullWidth
              sx={inputStyle}
            />

            <TextField
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              fullWidth
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
                "Reset Password"
              )}
            </Button>
          </Box>
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

export default ResetPassword;
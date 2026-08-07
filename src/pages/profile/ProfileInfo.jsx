import { useEffect, useState } from "react";

import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";

import { useTranslation } from "react-i18next";

import authAxiosInstance from "../../api/authAxiosInstance";

function ProfileInfo() {
  const { t } = useTranslation();

  const [profile, setProfile] = useState(null);

  const [email, setEmail] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const getProfile = async () => {
    try {
      setIsLoading(true);
      setErrorMessage("");

      const response = await authAxiosInstance.get("/Profile");

      const profileData =
        response.data?.response ?? response.data;

      setProfile(profileData);

      setEmail(profileData?.email || "");
    } catch (error) {
      console.log(error);

      setErrorMessage(
        error.response?.data?.message ||
          t("Failed to load profile information"),
      );
    } finally {
      setIsLoading(false);
    }
  };

  const updateProfile = async () => {
    if (email.trim() === "") {
      setErrorMessage(t("Email is required"));
      return;
    }

    try {
      setIsUpdating(true);

      setErrorMessage("");
      setSuccessMessage("");

      await authAxiosInstance.patch("/Profile", {
        email: email,
      });

      setSuccessMessage(
        t("Profile updated successfully"),
      );

      getProfile();
    } catch (error) {
      console.log(error);

      setErrorMessage(
        error.response?.data?.message ||
          t("Failed to update profile"),
      );
    } finally {
      setIsUpdating(false);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  if (isLoading) {
    return (
      <Box
        sx={{
          minHeight: "250px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress sx={{ color: "#004AC6" }} />
      </Box>
    );
  }

  return (
    <Box>

      <Box sx={{ mb: "28px" }}>
        <Typography
          component="h2"
          sx={{
            fontSize: "24px",
            fontWeight: 700,
            color: "text.primary",
          }}
        >
          {t("Personal Information")}
        </Typography>

        <Typography
          sx={{
            mt: "8px",
            color: "text.secondary",
            fontSize: "14px",
          }}
        >
          {t("Profile Description")}
        </Typography>
      </Box>

      {errorMessage && (
        <Box
          sx={{
            mb: "20px",
            p: "12px",
            borderRadius: "8px",
            backgroundColor: "#FFF1F2",
            border: "1px solid #FECDD3",
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
            borderRadius: "8px",
            backgroundColor: "#F0FDF4",
            border: "1px solid #BBF7D0",
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
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          maxWidth: "600px",
        }}
      >
        {profile?.userName && (
          <TextField
            label={t("Username")}
            value={profile.userName}
            fullWidth
            disabled
          />
        )}

        {profile?.fullName && (
          <TextField
            label={t("Full Name")}
            value={profile.fullName}
            fullWidth
            disabled
          />
        )}

        {profile?.phoneNumber && (
          <TextField
            label={t("Phone Number")}
            value={profile.phoneNumber}
            fullWidth
            disabled
          />
        )}

        <TextField
          label={t("Email")}
          type="email"
          value={email}
          onChange={(event) =>
            setEmail(event.target.value)
          }
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
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
          variant="contained"
          onClick={updateProfile}
          disabled={isUpdating}
          sx={{
            width: {
              xs: "100%",
              sm: "180px",
            },

            height: "48px",
            borderRadius: "8px",

            backgroundColor: "#004AC6",

            textTransform: "none",
            fontSize: "15px",
            fontWeight: 600,

            boxShadow: "none",

            "&:hover": {
              backgroundColor: "#003B9E",
              boxShadow: "none",
            },
          }}
        >
          {isUpdating ? (
            <CircularProgress
              size={22}
              sx={{
                color: "#FFFFFF",
              }}
            />
          ) : (
            t("Save Changes")
          )}
        </Button>
      </Box>
    </Box>
  );
}

export default ProfileInfo;
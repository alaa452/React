import { useEffect, useState } from "react";

import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";

import authAxiosInstance from "../../api/authAxiosInstance";

function ProfileInfo() {
  const [profile, setProfile] = useState(null);

  const [email, setEmail] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // جلب معلومات المستخدم
  const getProfile = async () => {
    try {
      setIsLoading(true);
      setErrorMessage("");

      const response = await authAxiosInstance.get("/Profile");

      console.log("Profile:", response.data);

      const profileData = response.data?.response ?? response.data;

      setProfile(profileData);

      setEmail(profileData?.email || "");
    } catch (error) {
      console.log(error);

      setErrorMessage(
        error.response?.data?.message ||
          "Failed to load profile information",
      );
    } finally {
      setIsLoading(false);
    }
  };

  // تعديل البريد
  const updateProfile = async () => {
    if (email.trim() === "") {
      setErrorMessage("Email is required");
      return;
    }

    try {
      setIsUpdating(true);

      setErrorMessage("");
      setSuccessMessage("");

      await authAxiosInstance.patch("/Profile", {
        email: email,
      });

      setSuccessMessage("Profile updated successfully");

      getProfile();
    } catch (error) {
      console.log(error);

      setErrorMessage(
        error.response?.data?.message ||
          "Failed to update profile",
      );
    } finally {
      setIsUpdating(false);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  // تحميل
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
      {/* العنوان */}
      <Box sx={{ mb: "28px" }}>
        <Typography
          component="h2"
          sx={{
            fontSize: "24px",
            fontWeight: 700,
            color: "#202124",
          }}
        >
          Personal Information
        </Typography>

        <Typography
          sx={{
            mt: "8px",
            color: "#434655",
            fontSize: "14px",
          }}
        >
          View and update your account information.
        </Typography>
      </Box>

      {/* رسالة الخطأ */}
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

      {/* رسالة النجاح */}
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

      {/* معلومات المستخدم */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          maxWidth: "600px",
        }}
      >
        {/* Username */}
        {profile?.userName && (
          <TextField
            label="Username"
            value={profile.userName}
            fullWidth
            disabled
          />
        )}

        {/* Full Name */}
        {profile?.fullName && (
          <TextField
            label="Full Name"
            value={profile.fullName}
            fullWidth
            disabled
          />
        )}

        {/* Phone Number */}
        {profile?.phoneNumber && (
          <TextField
            label="Phone Number"
            value={profile.phoneNumber}
            fullWidth
            disabled
          />
        )}

        {/* Email */}
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
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

        {/* زر الحفظ */}
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
            "Save Changes"
          )}
        </Button>
      </Box>
    </Box>
  );
}

export default ProfileInfo;
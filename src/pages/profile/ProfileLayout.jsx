import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";

function ProfileLayout() {
  return (
    <Box>
        <Typography variant="h4" component="h1" gutterBottom>
            My Profile Information
        </Typography>

        <Link to = "">info</Link>
        <Link to = "orders">orders</Link>

        <Box>
            <Outlet />
        </Box>

    </Box>
  );
}

export default ProfileLayout;
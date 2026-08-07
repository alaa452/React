import { createTheme } from "@mui/material";

const getTheme = (mode) => {
  return createTheme({
    palette: {
      mode: mode,

      primary: {
        main: "#004AC6",
      },

      background: {
        default: mode === "light" ? "#F7F9FC" : "#121212",
        paper: mode === "light" ? "#FFFFFF" : "#1E1E1E",
      },

      text: {
        primary: mode === "light" ? "#202124" : "#FFFFFF",
        secondary: mode === "light" ? "#434655" : "#BDBDBD",
      },
    },

    typography: {
      fontFamily: "Inter, sans-serif",
    },
  });
};

export default getTheme;
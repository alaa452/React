import { createTheme } from "@mui/material";

const getTheme = (mode) => {
  return createTheme({
    spacing: 4,
    palette: {
      mode: mode,

      primary: {
        main: "#dc004e",
      },
      secondary: {
        main: "#dc004e",
      },
      
    },
    typography: {
        fontFamily: "Cairo, sans-serif",
      },
  });
};

export default getTheme;

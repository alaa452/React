import { createTheme } from "@mui/material";

const getTheme = (mode) => {
  return createTheme({
    spacing: 4,
    palette: {
      mode: mode,//Adjusting contrast rules and background colors

      primary: {
        main: "#dc004e",
      },
      secondary: {
        main: "#1053fe",
      },
      
    },
    typography: {
        fontFamily: "Inter, sans-serif",
      },
  });
};

export default getTheme;

import { Box, Button, CircularProgress, Typography } from "@mui/material";
import useCategories from "../../hook/useCategories";
import { useNavigate } from "react-router-dom";

function Categories() {
  const { data, isError, isLoading, error } = useCategories();
  const navigate = useNavigate();
  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return (
      <Typography color="error">
        {error?.message || "Something went wrong"}
      </Typography>
    );
  }
  const handleClick =()=>{
    navigate(`/shop`);
  }

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", gap: "20px", width: "100%" }}
    >
      {data.response.data.map((category) => (
        <Box
          key={category.id}
          sx={{
            backgroundColor: "#434655",
            padding: "10px 20px",
            borderRadius: "10px",
            mt: "32px",
            color: "white",
            "&:hover": { backgroundColor: "#004AC6", cursor:"pointer" },
            
          }}
          onClick={handleClick}
        >
          <Typography>{category.name}</Typography>
        </Box>
      ))}
      
    </Box>
  );
}

export default Categories;

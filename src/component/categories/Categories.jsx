import { Box, CircularProgress, Typography } from "@mui/material";
import useCategories from "../../hook/useCategories";

function Categories() {
  const { data, isError, isLoading, error } = useCategories();

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

  return (
    <div>
      {data.response.data.map((category) => (
        <Box key={category.id}>
          <Typography>{category.name}</Typography>
        </Box>
      ))}
    </div>
  );
}

export default Categories;
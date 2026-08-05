import { Box, Button, CircularProgress, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";
import useCategories from "../../hook/useCategories";

function Categories({
  variant = "default",
  selectedCategory = null,
  onSelectCategory,
}) {
  const { data, isError, isLoading, error } = useCategories();
  const navigate = useNavigate();

  const isShopVariant = variant === "shop";

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          py: "24px",
        }}
      >
        <CircularProgress size={28} />
      </Box>
    );
  }

  if (isError) {
    return (
      <Typography
        color="error"
        sx={{
          mt: "16px",
          fontSize: "14px",
        }}
      >
        {error?.message || "Something went wrong"}
      </Typography>
    );
  }

  const categories = data?.response?.data ?? [];

  const handleCategoryClick = (categoryId) => {
    if (isShopVariant) {
      onSelectCategory?.(categoryId);
      return;
    }

    navigate(`/shop?categoryId=${categoryId}`);
  };

  const handleAllClick = () => {
    onSelectCategory?.(null);
  };

  const getButtonStyles = (isSelected = false) => ({
    width: isShopVariant ? "100%" : "auto",
    minWidth: isShopVariant ? "100%" : "110px",

    justifyContent: isShopVariant ? "flex-start" : "center",

    px: "20px",
    py: "10px",

    borderRadius: "10px",
    textTransform: "none",

    fontSize: "15px",
    lineHeight: "20px",
    fontWeight: 500,

    color: isShopVariant ? (isSelected ? "#FFFFFF" : "#434655") : "#FFFFFF",

    backgroundColor: isShopVariant
      ? isSelected
        ? "#004AC6"
        : "#F5F6F8"
      : "#434655",

    border: isShopVariant
      ? isSelected
        ? "1px solid #004AC6"
        : "1px solid #E2E8F0"
      : "1px solid #434655",

    transition:
      "background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease, transform 0.25s ease",

    "&:hover": {
      backgroundColor: "#004AC6",
      borderColor: "#004AC6",
      color: "#FFFFFF",
      transform: isShopVariant ? "translateX(4px)" : "translateY(-2px)",
    },
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isShopVariant ? "column" : "row",
        alignItems: isShopVariant ? "stretch" : "center",
        flexWrap: isShopVariant ? "nowrap" : "wrap",

        gap: isShopVariant ? "12px" : "20px",
        width: "100%",
        mt: "24px",
      }}
    >
      {/* يظهر All فقط داخل صفحة Shop */}
      {isShopVariant && (
        <Button
          type="button"
          onClick={handleAllClick}
          sx={getButtonStyles(selectedCategory === null)}
        >
          All
        </Button>
      )}

      {categories.map((category) => {
        const isSelected = String(selectedCategory) === String(category.id);

        return (
          <Button
            key={category.id}
            type="button"
            onClick={() => handleCategoryClick(category.id)}
            sx={getButtonStyles(isSelected)}
          >
            {category.name}
          </Button>
        );
      })}

      {categories.length === 0 && (
        <Typography
          sx={{
            color: "#434655",
            fontSize: "14px",
          }}
        >
          No categories available
        </Typography>
      )}
    </Box>
  );
}

export default Categories;

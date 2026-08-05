import { useState } from "react";

import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  FormControl,
  InputLabel,
  Link as MuiLink,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import { Link as RouterLink } from "react-router-dom";

import Categories from "../../component/categories/Categories";
import Products from "../../component/products/Products";

function Shop() {
  // the value which the user choose it
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("asc");

  // the filter will actullay applay on products
  const [appliedFilters, setAppliedFilters] = useState({
    selectedCategory: null,
    minPrice: "",
    maxPrice: "",
    sortBy: "",
    order: "asc",
  });

  const minPriceNumber = minPrice === "" ? null : Number(minPrice);
  const maxPriceNumber = maxPrice === "" ? null : Number(maxPrice);

  const isPriceRangeInvalid =
    minPriceNumber !== null &&
    maxPriceNumber !== null &&
    maxPriceNumber < minPriceNumber;

  // تطبيق الفلاتر
  const handleApplyFilters = () => {
    if (isPriceRangeInvalid) {
      return;
    }

    setAppliedFilters({
      selectedCategory,
      minPrice,
      maxPrice,
      sortBy,
      order,
    });
  };

  // delete all products
  const handleClearFilters = () => {
    setSelectedCategory(null);
    setMinPrice("");
    setMaxPrice("");
    setSortBy("");
    setOrder("asc");

    setAppliedFilters({
      selectedCategory: null,
      minPrice: "",
      maxPrice: "",
      sortBy: "",
      order: "asc",
    });
  };

  return (
    <Box
      component="section"
      sx={{
        mt: "90px",
        mb: "80px",
      }}
    >
      <Container maxWidth="xl">
        {/* Breadcrumb */}
        <Breadcrumbs
          separator={
            <NavigateNextIcon
              sx={{
                fontSize: "16px",
                color: "#434655",
              }}
            />
          }
          aria-label="breadcrumb"
          sx={{
            mb: "24px",

            "& .MuiBreadcrumbs-separator": {
              mx: "3px",
            },
          }}
        >
          <MuiLink
            component={RouterLink}
            to="/"
            underline="none"
            sx={{
              color: "#434655",
              fontSize: "14px",

              "&:hover": {
                color: "#004AC6",
              },
            }}
          >
            Home
          </MuiLink>

          <Typography
            sx={{
              color: "#202124",
              fontSize: "14px",
              fontWeight: 700,
            }}
          >
            Shop
          </Typography>
        </Breadcrumbs>

        {/* filters and porducts*/}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: "32px",
            width: "100%",
            flexDirection: {
              xs: "column",
              md: "row",
            },
          }}
        >
          {/* صندوق الفلاتر */}
          <Box
            component="aside"
            sx={{
              width: {
                xs: "100%",
                md: "360px",
              },
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              border: "1px solid #E2E8F0",
              borderRadius: "12px",
              padding: "24px",
              backgroundColor: "#FFFFFF",
            }}
          >
            {/* subject filter*/}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                component="h2"
                sx={{
                  fontSize: "16px",
                  fontWeight: 700,
                  lineHeight: "20px",
                  color: "#202124",
                }}
              >
                Filters
              </Typography>

              <Button
                type="button"
                onClick={handleClearFilters}
                sx={{
                  minWidth: "auto",
                  padding: 0,
                  textTransform: "none",
                  color: "#004AC6",
                  fontSize: "13px",
                  fontWeight: 500,

                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#003B9E",
                  },
                }}
              >
                Clear All
              </Button>
            </Box>

            {/* price */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, minmax(0, 1fr))",
                  md: "repeat(2, minmax(0, 1fr))",
                },
                gap: "12px",
              }}
            >
              <TextField
                id="min-price"
                label="Min Price"
                type="number"
                size="small"
                fullWidth
                value={minPrice}
                onChange={(event) => {
                  const value = event.target.value;

                  if (value === "" || Number(value) >= 0) {
                    setMinPrice(value);
                  }
                }}
                inputProps={{
                  min: 0,
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: "48px",
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

              <TextField
                id="max-price"
                label="Max Price"
                type="number"
                size="small"
                fullWidth
                value={maxPrice}
                onChange={(event) => {
                  const value = event.target.value;

                  if (value === "" || Number(value) >= 0) {
                    setMaxPrice(value);
                  }
                }}
                error={isPriceRangeInvalid}
                helperText={
                  isPriceRangeInvalid
                    ? "Max price must be greater than min price"
                    : ""
                }
                inputProps={{
                  min: 0,
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: "48px",
                    borderRadius: "8px",

                    "&.Mui-focused fieldset": {
                      borderColor: "#004AC6",
                    },
                  },

                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#004AC6",
                  },

                  "& .MuiFormHelperText-root": {
                    mx: 0,
                    fontSize: "11px",
                  },
                }}
              />
            </Box>

            {/* sort by*/}
            <FormControl
              fullWidth
              size="small"
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: "48px",
                  borderRadius: "8px",

                  "&.Mui-focused fieldset": {
                    borderColor: "#004AC6",
                  },
                },

                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#004AC6",
                },
              }}
            >
              <InputLabel id="sort-by-label">Sort By</InputLabel>

              <Select
                labelId="sort-by-label"
                id="sort-by"
                value={sortBy}
                label="Sort By"
                onChange={(event) => setSortBy(event.target.value)}
              >
                <MenuItem value="">
                  <em>Default</em>
                </MenuItem>

                <MenuItem value="name">Name</MenuItem>
                <MenuItem value="price">Price</MenuItem>
              </Select>
            </FormControl>

            {/* order*/}
            <FormControl
              fullWidth
              size="small"
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: "48px",
                  borderRadius: "8px",

                  "&.Mui-focused fieldset": {
                    borderColor: "#004AC6",
                  },
                },

                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#004AC6",
                },
              }}
            >
              <InputLabel id="order-label">Order</InputLabel>

              <Select
                labelId="order-label"
                id="order"
                value={order}
                label="Order"
                onChange={(event) => setOrder(event.target.value)}
              >
                <MenuItem value="asc">Ascending</MenuItem>
                <MenuItem value="desc">Descending</MenuItem>
              </Select>
            </FormControl>

            {/* categories */}
            <Box>
              <Typography
                sx={{
                  mb: "12px",
                  color: "#434655",
                  fontSize: "14px",
                  lineHeight: "16px",
                  fontWeight: 500,
                }}
              >
                Categories
              </Typography>

              <Categories
                variant="shop"
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
            </Box>

            {/* apply filters*/}
            <Button
              type="button"
              variant="contained"
              fullWidth
              disabled={isPriceRangeInvalid}
              onClick={handleApplyFilters}
              sx={{
                height: "48px",
                borderRadius: "8px",
                backgroundColor: "#004AC6",
                textTransform: "none",
                fontWeight: 600,
                boxShadow: "none",

                "&:hover": {
                  backgroundColor: "#003B9E",
                  boxShadow: "none",
                },

                "&.Mui-disabled": {
                  backgroundColor: "#B8C8DF",
                  color: "#FFFFFF",
                },
              }}
            >
              Apply Filters
            </Button>
          </Box>

          {/* products part*/}
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              minWidth: 0,
              display: "flex",
              flexDirection: "column",
              gap: "32px",
            }}
          >
            {/* Page title*/}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <Typography
                component="h1"
                sx={{
                  fontSize: {
                    xs: "26px",
                    md: "32px",
                  },
                  lineHeight: {
                    xs: "34px",
                    md: "40px",
                  },
                  fontWeight: 700,
                  color: "#202124",
                }}
              >
                Explore Our Exclusive Products
              </Typography>

              <Typography
                sx={{
                  color: "#434655",
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                Discover products selected for quality and everyday use.
              </Typography>
            </Box>

            {/* products */}
            <Products
              showHeader={false}
              initialLimit={2}
              productsPerClick={4}
              showMoreButton
              selectedCategory={appliedFilters.selectedCategory}
              minPrice={appliedFilters.minPrice}
              maxPrice={appliedFilters.maxPrice}
              sortBy={appliedFilters.sortBy}
              order={appliedFilters.order}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Shop;
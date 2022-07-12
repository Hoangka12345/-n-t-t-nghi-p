import React from "react";
import PropTypes from "prop-types";
import { Box, Chip, Typography } from "@mui/material";

SortPriceFilter.propTypes = {};

function SortPriceFilter(props) {
  const handleClick = () => {
    console.log("af");
  };

  return (
    <Box sx={{ borderTop: "1px solid #9999", mt: 3, pt: 2 }}>
      <Typography variant="h4" sx={{ fontSize: "1.8rem" }}>
        Sort by price
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Chip
          label="Price from low to high"
          color="default"
          sx={{ fontSize: "1.6rem" }}
          onClick={handleClick}
        />
        <Chip label="Price from high to low" color="info" sx={{ fontSize: "1.6rem", mt: 2 }} />
      </Box>
    </Box>
  );
}

export default SortPriceFilter;

import React from "react";
import PropTypes from "prop-types";
import SearchIcon from "@mui/icons-material/Search";
import { Box, TextField } from "@mui/material";

Search.propTypes = {};

function Search(props) {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          position: "absolute",
          borderRight: "1px solid #9999",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "0 1rem",
        }}
      >
        <SearchIcon sx={{ fontSize: "2rem" }} />
      </Box>
      <TextField
        variant="outlined"
        size="small"
        fullWidth
        sx={{ "& input": { paddingLeft: "5rem", fontSize: "1.4rem" } }}
      />
    </Box>
  );
}

export default Search;

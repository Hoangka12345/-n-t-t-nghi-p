import React from "react";
import PropTypes from "prop-types";
import SearchIcon from "@mui/icons-material/Search";
import { Box, TextField } from "@mui/material";

Search.propTypes = {};

function Search(props) {
  return (
    <Box sx={{ position: "relative", width: "70%", margin: "1rem auto 0" }}>
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
        fullWidth
        variant="outlined"
        size="small"
        placeholder="bạn muốn đi đâu..."
        sx={{ "& input": { paddingLeft: "5rem", fontSize: "1.4rem" } }}
      />
    </Box>
  );
}

export default Search;

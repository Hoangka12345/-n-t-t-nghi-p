import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

TourSort.propTypes = {};

function TourSort() {
  const [value, setValue] = React.useState("Giá Thấp Tới Cao");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", mt: 2 }}>
      <Tabs value={value} onChange={handleChange}>
        <Tab value="Giá Thấp Tới Cao" label="Giá Thấp Tới Cao" sx={{ fontSize: "1.4rem" }} />
        <Tab value="Giá Cao Tới Thấp" label="Giá Cao Tới Thấp" sx={{ fontSize: "1.4rem" }} />
      </Tabs>
    </Box>
  );
}

export default TourSort;

import React, { useState } from "react";
import PropTypes from "prop-types";
import queryString from "query-string";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Avatar, Box, Container } from "@mui/material";
import Button from "@mui/material/Button";

import logo from "../../assets/logo.png";

// import "./styles.css";

const styles = {
  link: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "20px",
  },
};

function Header(props) {
  const navigate = useNavigate();

  const handelClick = (title) => {
    if (title === "create") {
      navigate("/company/create");
    } else if (title === "nature") {
      navigate("/nature");
    } else if (title === "food") {
      navigate("/food");
    }
  };

  return (
    <Box sx={{ backgroundColor: "#252525", position: "fixed", width: "100vw", zIndex: "2" }}>
      <Container sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Box sx={{ width: "200px" }} as={Link} to="/company">
          <img src={logo} width="100%" />
        </Box>
        <div className="header__list">
          <div className="header__link" onClick={() => handelClick("create")}>
            Create Tour
          </div>
          <div className="header__link" onClick={() => handelClick("dashboard")}>
            Dashboard
          </div>
          <div className="header__link" onClick={() => handelClick("transactionHistory")}>
            Transaction History
          </div>
        </div>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Button variant="text" sx={{ color: "#daa15e", fontSize: "18px", fontWeight: "bold" }}>
            Log out
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Header;

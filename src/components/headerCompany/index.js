import React, { useState } from "react";
import PropTypes from "prop-types";
import queryString from "query-string";
import { useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { Avatar, Box, Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import CloseIcon from "@mui/icons-material/Close";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import logo from "../../assets/logo.png";
import Register from "../../features/Auth/components/Register";
import Login from "../../features/Auth/components/Login";

import "./styles.css";

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
    if (title === "history") {
      navigate("/history");
    } else if (title === "nature") {
      navigate("/nature");
    } else if (title === "food") {
      navigate("/food");
    }
  };

  return (
    <Box sx={{ backgroundColor: "#252525", position: "fixed", width: "100vw", zIndex: "1" }}>
      <Container sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Box sx={{ width: "200px" }} as={Link} to="/company">
          <img src={logo} width="100%" />
        </Box>
        <div className="header__list">
          <div className="header__link">Create Tour</div>
          <div className="header__link">Dashboard</div>
          <div className="header__link">Transaction History</div>
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

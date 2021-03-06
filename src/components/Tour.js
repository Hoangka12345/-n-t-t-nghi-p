import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Chip, Paper, Link } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import BusinessIcon from "@mui/icons-material/Business";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

Tour.propTypes = {};

function Tour(props) {
  const navigate = useNavigate();
  const location = useLocation();

  const handelClickDetail = () => {
    if (location.pathname === "/tours") {
      navigate({
        pathname: "/tour-detail",
        search: queryString.stringify({ _id: "123" }),
      });
    } else if (location.pathname === "/company") {
      navigate({
        pathname: "/company/edit",
        search: queryString.stringify({ _id: "123" }),
      });
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ minHeight: "50rem", width: "100%" }}>
        <Box sx={{ position: "relative", width: "100%" }}>
          <img
            src="https://dulichdaocatba.com/view-650/at_tong-hop-kinh-nghiem-du-lich-cat-ba-2018-tu-tuc_ad19e5a7ff79e9a42e11329cf4979cef.jpg"
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderTopLeftRadius: "0.3rem",
              borderTopRightRadius: "0.3rem",
            }}
          />
          <Box
            sx={{
              color: "#fff",
              fontSize: "1.4rem",
              lineHeight: "1.4rem",
              backgroundColor: "#00b904",
              fontWeight: "bold",
              padding: "0.6rem 0.5rem 0.6rem 1rem",
              borderRadius: "0.3rem",
              position: "absolute",
              top: "1rem",
              right: 0,
            }}
          >
            Tham quan cát bà các thứ
          </Box>
          <Box
            sx={{
              width: "100%",
              fontSize: "1.6rem",
              fontWeight: "bold",
              color: "#fff",
              padding: "0.5rem 0",
              backgroundColor: "#3c669e",
              position: "absolute",
              bottom: 0,
              left: 0,
              display: "flex",
              alignItems: "center",
            }}
          >
            <LocationOnIcon sx={{ ml: 1, color: "#999", fontSize: "2rem" }} />
            <Box component="span">Miền Bắc, Hải Phòng, Cát Bà</Box>
          </Box>
        </Box>
        <Box sx={{ padding: "1rem 2rem" }}>
          <Box
            sx={{ fontSize: "2rem", lineHeight: "2.5rem", cursor: "pointer" }}
            onClick={handelClickDetail}
          >
            Tour Sapa 3 ngày 2 đêm| Moana – Fansipan – Bản Cát Cát
          </Box>
          <Box
            sx={{
              mt: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: "1.6rem",
              color: "#444",
            }}
          >
            <Box>3 ngày 2 đêm</Box>
            <DirectionsBusIcon fontSize="large" />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: 4,
              fontSize: "1.6rem",
            }}
          >
            <LocationOnIcon fontSize="large" />
            <Box component="span"> Hải Phòng</Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: 2,
              fontSize: "1.6rem",
            }}
          >
            <EventAvailableIcon fontSize="large" />
            <Box component="span">KH: Các ngày trong tuần</Box>
          </Box>
          {location.pathname === "/tours" ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: 2,
                fontSize: "1.6rem",
              }}
            >
              <BusinessIcon fontSize="large" />
              <Box component="span">
                <Box component="span">Cty: </Box>
                <Box component="span">
                  <Link
                    onClick={() => navigate("/company-introduction")}
                    sx={{ cursor: "pointer" }}
                  >
                    Hoang Ka
                  </Link>
                </Box>
              </Box>
            </Box>
          ) : null}

          <Box sx={{ mt: 2 }}>
            <Chip label="available" color="info" sx={{ fontSize: "1.6rem" }} />
            <Chip label="1" color="info" sx={{ fontSize: "1.6rem", ml: 2 }} />
          </Box>
          <Box
            sx={{
              color: "#daa15e",
              fontSize: "2.5rem",
              borderTop: "1px solid #999",
              mt: 5,
              pt: 2,
            }}
          >
            {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(2690000)}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default Tour;

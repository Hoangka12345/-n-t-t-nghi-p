import React, { useState } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { Box, Chip, Container, Grid, Pagination, Paper } from "@mui/material";
import Header from "../../../../components/header";

import Tour from "../../../../components/Tour";
import Footer from "../../../../components/footer";
import BackToTop from "../../../../components/BackToTop";
import Search from "../components/filters/Search";
import TourSort from "../components/filters/TourSort";
import TopTour from "../components/TopTour";

TourPage.propTypes = {};

const Styles = {
  category: {
    width: "100%",
    height: "3rem",
    backgroundColor: "#0078ff",
    color: "white",
    fontSize: "1.8rem",
    lineHeight: "3rem",
    fontWeight: "bold",
    borderRadius: "0.5rem",
    padding: "0.5rem 0 0.5rem 1rem",
    textAlign: "center",
    mb: 2,
  },
};

function TourPage(props) {
  const [chip, setChip] = useState("info");
  const location = useLocation();
  const param = queryString.parse(location.search);

  const handleClickChip = () => {
    if (chip === "info") {
      setChip("default");
    } else {
      setChip("info");
    }
  };

  const handleDeleteChip = () => {
    console.log("abc");
  };

  return (
    <Box>
      <Header />

      <Box sx={{ width: "100%", mb: 3 }}>
        <img
          src={
            param._place === "northern_vietnam"
              ? "https://cdn.cnn.com/cnnnext/dam/assets/170606122114-vietnam---travel-destination--shutterstock-168342398.jpg"
              : param._place === "center_vietnam"
              ? "https://dulichvietnam.online/wp-content/uploads/2017/01/du-lich-duyen-hai-nam-trung-bo-5.jpg"
              : "http://6.img.izshop.vn/tv31/images/1(36).jpg"
          }
          alt=""
          style={{ width: "100%", height: "70vh", objectFit: "cover" }}
        />
      </Box>

      <Container>
        <Grid container spacing={2}>
          <Grid item xs={9} sx={{ mb: 2 }}>
            <Grid container>
              <Box sx={Styles.category}>
                {param._place === "northern_vietnam"
                  ? "Du lịch Bắc Bộ"
                  : param._place === "center_vietnam"
                  ? "Du lịch Trung Bộ"
                  : "Du lịch Nam Bộ"}
              </Box>
            </Grid>
            <Grid container sx={{ mb: 2 }}>
              <Paper sx={{ width: "100%", padding: "1rem 0" }}>
                <Box
                  sx={{
                    width: "90%",
                    margin: "0 auto",
                  }}
                >
                  <Search />
                  <TourSort />
                </Box>
                <Box sx={{ borderTop: "1px solid #999" }}>
                  <Box sx={{ width: "90%", margin: "3rem auto 1rem" }}>
                    <Chip
                      label="Tour được quan tâm nhất"
                      color={chip}
                      sx={{ fontSize: "1.6rem" }}
                      onClick={handleClickChip}
                    />
                    <Chip
                      label="Hà Nội"
                      color="info"
                      sx={{ fontSize: "1.6rem", ml: 2 }}
                      onDelete={handleDeleteChip}
                    />
                  </Box>
                </Box>
              </Paper>
            </Grid>
            <Grid container spacing={3}>
              {[...new Array(6)].map(() => (
                <Grid item md={4} sm={6} xs={12}>
                  <Tour />
                </Grid>
              ))}
              <Pagination sx={{ margin: "1.5rem auto" }} size="large" count={10} color="primary" />
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Paper sx={{ padding: "2rem 1rem", borderBottom: "1px solid #999" }}>
              <Box
                sx={{
                  fontSize: "1.7rem",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Các tours được quan tâm nhất
              </Box>
            </Paper>
            {[...new Array(4)].map(() => (
              <TopTour />
            ))}
          </Grid>
        </Grid>
      </Container>
      <BackToTop />
      <Footer />
    </Box>
  );
}

export default TourPage;

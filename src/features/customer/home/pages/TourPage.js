import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { Box, Container, Grid, Pagination, Paper } from "@mui/material";
import Header from "../../../../components/header";

import tour from "../../../../assets/tour.psd";
import Tour from "../../../../components/Tour";
import FavoriteTours from "../components/FavoriteTours";
import Footer from "../../../../components/footer";
import BackToTop from "../../../../components/BackToTop";

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
  const location = useLocation();
  const param = queryString.parse(location.search);
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
            <Paper sx={{ padding: "2rem 1rem" }}>
              <Box
                sx={{
                  fontSize: "1.6rem",
                  fontWeight: "bold",
                  textAlign: "center",
                  borderBottom: "1px solid #999",
                  pb: 2,
                }}
              >
                Các tours được quan tâm nhất
              </Box>
              <FavoriteTours />
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <BackToTop />
      <Footer />
    </Box>
  );
}

export default TourPage;

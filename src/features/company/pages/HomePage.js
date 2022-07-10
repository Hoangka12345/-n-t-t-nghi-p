import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { Box, Container, Grid, Pagination, Paper } from "@mui/material";
import Header from "../../../components/headerCompany";
import Footer from "../../../components/footer";
import Tour from "../../../components/Tour";

HomePage.propTypes = {};

function HomePage(props) {
  return (
    <Box>
      <Header />

      <Container sx={{ pt: 13, pb: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Paper>test</Paper>
          </Grid>
          <Grid item xs={9}>
            <Grid container spacing={2}>
              {[...new Array(6)].map(() => (
                <Grid item md={4} sm={6} xs={12}>
                  <Tour />
                </Grid>
              ))}
              <Pagination sx={{ margin: "1.5rem auto" }} size="large" count={10} color="primary" />
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
}

export default HomePage;

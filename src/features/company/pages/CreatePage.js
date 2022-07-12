import React from "react";
import PropTypes from "prop-types";
import { Box, Container, Grid } from "@mui/material";
import Header from "../../../components/headerCompany";
import Footer from "../../../components/footer";
import CreateForm from "../components/CreateForm";

CreatePage.propTypes = {};

function CreatePage(props) {
  return (
    <Box>
      <Header />

      <Container sx={{ pt: 13, pb: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs={5}>
            <Box sx={{ width: "100%", height: "50rem" }}>
              <img
                src="https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-vivi-an-12.jpg"
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          </Grid>
          <Grid item xs={7}>
            <CreateForm />
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
}

export default CreatePage;

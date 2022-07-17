import React from "react";
import { useNavigate } from "react-router-dom";
import queryString from "query-string";
import { Box, Container, Grid } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

import Header from "../../../../components/header";
import Footer from "../../../../components/footer";
import TourIntro from "../components/tourDetail/TourIntro";
import BookingRight from "../components/tourDetail/BookingRight";
import Planning from "../components/tourDetail/Planning";
import RelatedTour from "../components/tourDetail/RelatedTour";
import Feedback from "../components/tourDetail/Feedback";
import BackToTop from "../../../../components/BackToTop";

function TourDetailPage(props) {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <Container>
        <Grid container sx={{ pt: 10, mb: 2 }}>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                fontSize: "1.8rem",
                lineHeight: "1.8rem",
              }}
            >
              <Box sx={{ color: "#083e7e" }}>Du lịch</Box>
              <KeyboardDoubleArrowRightIcon sx={{ fontSize: "1.3rem", margin: "0 0.4rem" }} />
              <Box
                sx={{ color: "#083e7e", cursor: "pointer" }}
                onClick={() =>
                  navigate({
                    pathname: "/tours",
                    search: queryString.stringify({ _place: "center_vietnam" }),
                  })
                }
              >
                Du lịch miền Bắc
              </Box>
              <KeyboardDoubleArrowRightIcon sx={{ fontSize: "1.3rem", margin: "0 0.4rem" }} />
              <Box
                sx={{ color: "#083e7e", cursor: "pointer" }}
                // onClick={() =>
                //   navigate({
                //     pathname: "/tours",
                //     search: queryString.stringify({ _place: "center_vietnam" }),
                //   })
                // }
              >
                Hà Nội
              </Box>
              <KeyboardDoubleArrowRightIcon sx={{ fontSize: "1.3rem", margin: "0 0.4rem" }} />
              <Box sx={{ color: "#646363" }}>
                Tour du lịch Hội An Đà Nẵng 3N2Đ – Chuyến khám phá thiên đường du lịch miền Bắc
              </Box>
            </Box>
          </Grid>
          <Grid container sx={{ mt: 2 }} spacing={4}>
            <Grid item xs={8}>
              <TourIntro />
              <Planning />
              <Feedback />
              <RelatedTour />
            </Grid>
            <Grid item xs={4} sx={{}}>
              <BookingRight />
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <BackToTop />
      <Footer />
    </div>
  );
}

export default TourDetailPage;

import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { northern, central, south } from "../../../fakeData/City";
import NumberFormat from "react-number-format";

EditForm.propTypes = {};

function EditForm(props) {
  const [regions, setRegions] = useState("");

  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]);

  const [disabled, setDisabled] = useState(true);

  const [departureTime, setDepartureTime] = useState("");
  const [daytime, setDaytime] = useState("");

  const [night, setNight] = useState("");
  const [nights, setNights] = useState([]);

  const [transportation, setTransportation] = useState("");

  const [boolean, setBoolean] = useState(false);

  const handleChangeRegion = (e) => {
    setRegions(e.target.value);
    if (e.target.value === 10) {
      setCities(northern);
    } else if (e.target.value === 20) {
      setCities(central);
    } else {
      setCities(south);
    }
    setDisabled(false);
  };

  const handleChangeDaytime = (e) => {
    const check = e.target.value;
    if (/\D/.test(check) || check > 7) {
      window.alert("Daytime must be a number and less than 7!");
      setBoolean(false);
      setDaytime(1);
      setNights([0, 1]);
    } else if (/\D/.test(check) || check < 1) {
      setBoolean(false);
      setDaytime("");
      setNights([]);
    } else {
      setDaytime(check);
      const nightValue = [check - 1, check];
      setNights(nightValue);
    }
  };

  const handleChangeNight = (e) => {
    setNight(e.target.value);
    setBoolean(true);
  };

  return (
    <form action="">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            sx={{ mb: 2, "& label": { fontSize: "1.3rem" } }}
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth sx={{ "& label": { fontSize: "1.3rem", paddingRight: "1rem" } }}>
            <InputLabel id="demo-simple-select-label">Regions</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={regions}
              label="Regions"
              onChange={handleChangeRegion}
            >
              <MenuItem value={10}>Mi???n B???c</MenuItem>
              <MenuItem value={20}>Mi???n Trung</MenuItem>
              <MenuItem value={30}>Mi???n Nam</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth disabled={disabled}>
            <InputLabel id="demo-simple-select-label">City</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              {cities.map((city) => {
                return (
                  <MenuItem key={city} value={city}>
                    {city}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Location"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            disabled={disabled}
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">departure time</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="departure time"
              value={departureTime}
              onChange={(e) => setDepartureTime(e.target.value)}
            >
              <MenuItem value={10}>Th??? hai</MenuItem>
              <MenuItem value={20}>Th??? ba</MenuItem>
              <MenuItem value={30}>Th??? t??</MenuItem>
              <MenuItem value={40}>Th??? n??m</MenuItem>
              <MenuItem value={50}>Th??? s??u</MenuItem>
              <MenuItem value={60}>Th??? b???y</MenuItem>
              <MenuItem value={70}>Ch??? nh???t</MenuItem>
              <MenuItem value={80}>C??c ng??y trong tu???n</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Daytime"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            value={daytime}
            onChange={handleChangeDaytime}
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Night</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="City"
              value={night}
              onChange={handleChangeNight}
            >
              {nights.length > 0 ? (
                nights.map((data) => {
                  return (
                    <MenuItem key={data} value={data}>
                      {data}
                    </MenuItem>
                  );
                })
              ) : (
                <MenuItem disabled={true}></MenuItem>
              )}
            </Select>
          </FormControl>
        </Grid>
        {!boolean
          ? null
          : [...new Array(parseInt(daytime))].map((i, index) => (
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={1}
                    sx={{ textAlign: "center", mt: 4, fontSize: "1.4rem", fontWeight: "bold" }}
                  >
                    Day {index + 1}
                  </Grid>
                  <Grid item xs={5.5}>
                    <TextField
                      label="Actions"
                      variant="outlined"
                      rows={4}
                      multiline
                      fullWidth
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                  <Grid item xs={5.5}>
                    <TextField
                      label="Note*"
                      variant="outlined"
                      rows={4}
                      multiline
                      fullWidth
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            ))}
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Transportation</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={transportation}
              label="Transportation"
              onChange={(e) => setTransportation(e.target.value)}
            >
              <MenuItem value={10}>5-seat car</MenuItem>
              <MenuItem value={20}>9-seat car</MenuItem>
              <MenuItem value={30}>16-seat car</MenuItem>
              <MenuItem value={40}>24-seat car</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <NumberFormat
            thousandSeparator={true}
            suffix={"??"}
            customInput={TextField}
            fullWidth
            label="Price for adult"
          />
        </Grid>
        <Grid item xs={4}>
          <NumberFormat
            thousandSeparator={true}
            suffix={"??"}
            customInput={TextField}
            fullWidth
            label="Price for adult"
          />
        </Grid>
      </Grid>
      <Button fullWidth variant="contained" size="large" sx={{ mt: 2 }}>
        Update
      </Button>
    </form>
  );
}

export default EditForm;

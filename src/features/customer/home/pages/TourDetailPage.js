import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../../../components/header';
import Footer from '../../../../components/footer';
import { Box, Container, Grid, TextField, Stack, Paper } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import SlideDetail from '../components/SlideDetail';

TourDetailPage.propTypes = {

};

function TourDetailPage(props) {

    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'))

    const handleChangeDate = (newValue) => {
        setValue(newValue);
    };

    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleChangeCustomer = (event) => {
        setAge(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div>
            <Header />
            <Container >
                <Grid container sx={{ pt: 10, mb: 2 }}>
                    <Grid item xs={12}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', fontSize: '1.8rem', lineHeight: '1.8rem' }}>
                            <Box sx={{ color: '#083e7e' }}>Du lịch</Box>
                            <KeyboardDoubleArrowRightIcon sx={{ fontSize: '1.3rem', margin: '0 0.4rem' }} />
                            <Box sx={{ color: '#083e7e' }}>Du lịch miền Bắc</Box>
                            <KeyboardDoubleArrowRightIcon sx={{ fontSize: '1.3rem', margin: '0 0.4rem' }} />
                            <Box sx={{ color: '#ccc' }}>Tour du lịch Hội An Đà Nẵng 3N2Đ – Chuyến khám phá thiên đường du lịch miền Bắc</Box>
                        </Box>
                    </Grid>
                    <Grid container>
                        <Grid item xs={9}>
                            <Box>Tour du lịch Hội An Đà Nẵng 3N2Đ – Chuyến khám phá thiên đường du lịch miền Trung</Box>
                            <SlideDetail />
                            <Box>
                                <Box>
                                    <Box>Đà Nẵng</Box>
                                    <Box>3 ngày 2 đêm</Box>
                                    <Box>Phương Tiện</Box>
                                    <Box>mã tour: GCH190102</Box>
                                </Box>
                                <Box>
                                    Khởi hành: hàng ngày
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper sx={{ p: 2 }}>
                                <Box>2990000 VND</Box>
                                <Box>2090000 VND/người</Box>
                                <form>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                                        <Box sx={{ flex: 1 }}>khởi hành</Box>
                                        <Box sx={{ flex: 4 }}>
                                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                <Stack spacing={3}>
                                                    <DesktopDatePicker
                                                        label="Date desktop"
                                                        inputFormat="MM/dd/yyyy"
                                                        value={value}
                                                        onChange={handleChangeDate}
                                                        renderInput={(params) => <TextField {...params} />}
                                                    />
                                                </Stack>
                                            </LocalizationProvider>
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Box sx={{ flex: 1 }}>Số khách</Box>
                                        <Box sx={{ flex: 4 }}>
                                            <FormControl sx={{ width: '100%' }}>
                                                <InputLabel id="demo-controlled-open-select-label">Age</InputLabel>
                                                <Select
                                                    labelId="demo-controlled-open-select-label"
                                                    id="demo-controlled-open-select"
                                                    open={open}
                                                    onClose={handleClose}
                                                    onOpen={handleOpen}
                                                    value={age}
                                                    label="Age"
                                                    onChange={handleChangeCustomer}
                                                >
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </Box>
                                    <Button fullWidth variant="contained" sx={{ backgroundColor: "#f09936", color: "#fff", '&:hover': { backgroundColor: "#e79e4a" } }}>Đặt Tour</Button>
                                </form>
                            </Paper>
                            <Paper sx={{ mt: 2 }}>
                                <Box sx={{ width: "100%", backgroundColor: "#0066d9", color: '#fff', fontSize: '2rem', lineHeight: '3rem', textAlign: 'center' }}>tổng đài tư vấn</Box>
                                <Box sx={{ p: 2 }}>
                                    <Box sx={{ fontSize: '1.6rem', lineHeight: '1.6rem', fontWeight: 'bold' }}>Mọi thắc mắc của quý khách</Box>
                                    <Box sx={{ fontSize: '1.4rem', lineHeight: '1.4', color: '#555', mt: 2 }}>
                                        vui lòng gọi:
                                        <Box component="span" sx={{ fontSize: '1.8rem', lineHeight: '1.8rem', color: "#0066d9" }}>1900 3398</Box>
                                    </Box>
                                    <Box sx={{ fontSize: '1.4rem', lineHeight: '1.4', color: '#555', mt: 2 }}>Chúng tôi hỗ trợ 24/7</Box>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </div>
    );
}

export default TourDetailPage;
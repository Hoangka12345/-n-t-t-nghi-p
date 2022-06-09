import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, FormControl, MenuItem, Paper, TextField, Stack, InputLabel } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Select, { SelectChangeEvent } from '@mui/material/Select';

BookingLeft.propTypes = {

};

function BookingLeft(props) {
    const [value, setValue] = useState(new Date('2014-08-18T21:11:54'))

    const handleChangeDate = (newValue) => {
        setValue(newValue);
    };

    const [customer, setCustomer] = React.useState(1);

    const handleChange = (event) => {
        setCustomer(event.target.value);
    };

    return (
        <Box sx={{ mt: 4 }}>
            <Paper sx={{ padding: '2.5rem 1.5rem', backgroundColor: '#011e41', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ mr: 3 }}>
                    <Box sx={{ fontSize: '1.4rem', lineHeight: '1.6rem', color: '#ffc600', textDecoration: 'line-through' }}>2,990,000 VND</Box>
                    <Box sx={{ color: '#ffc600', fontSize: '2rem', lineHeight: '2', fontWeight: 'bold' }}>
                        2,090,000
                        <Box component="span" sx={{ fontSize: '1.4rem', lineHeight: '1.6', fontWeight: 'normal', ml: 1 }}>VND/người</Box>
                    </Box>
                </Box>
                <form style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ fontSize: '1.6rem', color: '#fff', mb: 1 }}>khởi hành</Box>
                        <Box sx={{}}>
                            <LocalizationProvider dateAdapter={AdapterDateFns} >
                                <Stack spacing={3} >
                                    <DesktopDatePicker
                                        inputFormat="MM/dd/yyyy"
                                        value={value}
                                        onChange={handleChangeDate}
                                        renderInput={(params) => <TextField fullWidth {...params} sx={{
                                            borderRadius: '0.5rem',
                                            backgroundColor: '#fff',
                                            input: { fontSize: '1.4rem' },
                                            svg: { fontSize: '2rem' },
                                        }} />}
                                    />
                                </Stack>
                            </LocalizationProvider>
                        </Box>
                    </Box>
                    <Box >
                        <Box sx={{ fontSize: '1.6rem', color: '#fff', mb: 1 }}>Số khách</Box>
                        <Box sx={{}}>
                            <FormControl fullWidth>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={customer}
                                    onChange={handleChange}
                                    sx={{
                                        backgroundColor: '#fff',
                                        fontSize: '1.6rem',
                                        label: { color: '#333', fontWeight: 'bold' }
                                    }}
                                >
                                    <MenuItem value={1}>1 người</MenuItem>
                                    <MenuItem value={2}>2 người</MenuItem>
                                    <MenuItem value={3}>3 người</MenuItem>
                                    <MenuItem value={4}>4 người</MenuItem>
                                    <MenuItem value={5}>5 người</MenuItem>
                                    <MenuItem value={6}>6 người</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
                    <Button fullWidth variant="contained" sx={{ backgroundColor: "#ffc600", color: "black", fontSize: '1.4rem', '&:hover': { backgroundColor: "#f3c113" } }}>Đặt Tour</Button>
                </form>
            </Paper>
        </Box>
    );
}

export default BookingLeft;
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { services } from '../../../../../fakeData'


Service.propTypes = {

};

function Service(props) {
    return (
        <Box>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead sx={{ backgroundColor: '#1976d2' }}>
                        <TableRow>
                            <TableCell align="center" sx={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#fff' }}>KHỞI HÀNH</TableCell>
                            <TableCell align="center" sx={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#fff' }}>Phương Tiện</TableCell>
                            <TableCell align="center" sx={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#fff' }} colSpan={3}>Giá Tour(VND/ khách)**</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow >
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell align="center" sx={{ fontSize: '1.2rem' }}>Người lớn (10 tuổi trở lên)</TableCell>
                            <TableCell align="center" sx={{ fontSize: '1.2rem' }}>Trẻ em* (5 - 9 tuổi)</TableCell>
                            <TableCell align="center" sx={{ fontSize: '1.2rem' }}>Em bé (dưới 5 tuổi)</TableCell>
                        </TableRow>
                        {services.transports.map(service => {
                            return (
                                <TableRow key={service.Transport}>
                                    <TableCell align="center" sx={{ fontSize: '1.2rem' }}>{service.time}</TableCell>
                                    <TableCell align="center" sx={{ fontSize: '1.2rem' }}>{service.Transport}</TableCell>
                                    <TableCell align="center" sx={{ fontSize: '1.2rem' }}>{service.adults}</TableCell>
                                    <TableCell align="center" sx={{ fontSize: '1.2rem' }}>{service.children}</TableCell>
                                    <TableCell align="center" sx={{ fontSize: '1.2rem' }}>Liên hệ (1900 3535)</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box >
                {services.rules.map(rule => {
                    return (
                        <Box sx={{ mt: 2 }}>
                            <Typography sx={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#B22222', textDecoration: 'underline', textAlign: 'center' }}>{rule.type}</Typography>
                            <ul>
                                {rule.content.map(data => {
                                    return (
                                        <li key={data} style={{ fontSize: '1.4rem', lineHeight: '2rem', margin: '0.5rem 0', textAlign: 'justify' }}>{data}</li>
                                    )
                                })}
                            </ul>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    );
}

export default Service;
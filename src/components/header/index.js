import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';
import Button from '@mui/material/Button';

import logo from '../../assets/logo.png';

import './styles.css';

const styles = {
    link: {
        textDecoration: 'none',
        color: '#fff',
        fontSize: '20px'
    }
}

function Header(props) {

    return (
        <Box sx={{ backgroundColor: '#252525', padding: '5px 0', position: 'fixed', width: '100vw', zIndex: '1' }}>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ width: '200px' }}>
                    <img src={logo} width="100%" />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                    <NavLink to="/" className="link">
                        <Typography sx={styles.link} variant="body2">Du lich</Typography>
                    </NavLink>
                    <NavLink to="/" className="link" variant="body2">
                        <Typography sx={styles.link}>Van Hoa</Typography>
                    </NavLink>
                    <NavLink to="/" className="link" variant="body2">
                        <Typography sx={styles.link}>Am thuc</Typography>
                    </NavLink>
                </Box>
                <Box>
                    <Button variant="text" sx={{ color: '#fff', fontSize: '18px' }}>Login</Button>
                </Box>
            </Container>
        </Box>
    );
}

export default Header;
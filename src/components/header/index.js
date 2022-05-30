import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import logo from '../../assets/logo.png';
import Register from '../../features/Auth/components/Register';
import Login from '../../features/Auth/components/Login';

import './styles.css';

const styles = {
    link: {
        textDecoration: 'none',
        color: '#fff',
        fontSize: '20px'
    }
}

function Header(props) {
    const Mode = {
        Login: 'login',
        Register: 'register',
    }

    // const LoggedInUser = useSelector(state => state.user.current)
    // const isLogin = !!LoggedInUser.id
    const [open, setOpen] = useState(false)
    const [mode, setMode] = useState(Mode.Login)
    const [anchorEl, setAnchorEl] = useState(null);

    // const dispatch = useDispatch()

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = ({ }, reason) => {
        //these fail to keep the modal open
        if (reason !== "backdropClick") {
            setOpen(false)
        }
    }

    const handleUserClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleMenuClose = () => {
        setAnchorEl(null);
    }

    const handelLogoutClick = () => {
        // dispatch(logout())
        handleMenuClose()
    }

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
                    <Button
                        variant="text"
                        sx={{ color: '#daa15e', fontSize: '18px', fontWeight: 'bold' }}
                        onClick={handleClickOpen}
                    >
                        Login
                    </Button>
                </Box>
                <Dialog open={open} onClose={handleClose} disableEscapeKeyDown fullWidth >
                    <DialogContent sx={{ position: 'relative' }}>
                        <IconButton onClick={handleClose} sx={{ position: 'absolute', top: '5px', right: '10px' }}>
                            <CloseIcon sx={{ fontSize: 25 }} />
                        </IconButton>
                        {mode == Mode.Register ? (
                            <>
                                <Register closeDialog={handleClose} />
                                <Box textAlign='center'>
                                    <Button color='primary' onClick={() => setMode(Mode.Login)}>
                                        Already have an account. Login hear
                                    </Button>
                                </Box>
                            </>
                        )
                            :
                            (
                                <>
                                    <Login closeDialog={handleClose} />
                                    <Box textAlign='center'>
                                        <Button color='primary' onClick={() => setMode(Mode.Register)} >
                                            Don't have an account. Register hear
                                        </Button>
                                    </Box>
                                </>
                            )
                        }
                    </DialogContent>
                </Dialog>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                >
                    <MenuItem onClick={handleMenuClose}>My account</MenuItem>
                    <MenuItem onClick={handelLogoutClick}>Logout</MenuItem>
                </Menu>
            </Container>
        </Box>
    );
}

export default Header;
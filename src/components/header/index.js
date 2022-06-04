import React, { useState } from 'react';
import PropTypes from 'prop-types';
import queryString from "query-string";
import { useNavigate } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
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

    const navigate = useNavigate()
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
        <Box sx={{ backgroundColor: '#252525', position: 'fixed', width: '100vw', zIndex: '1' }}>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ width: '200px' }} as={Link} to="/">
                    <img src={logo} width="100%" />
                </Box>
                <div className="header__list">
                    <div className="header__link header__link-tour">
                        Places to go in Vietnam
                        <div className="menu_tour">
                            <ul className="menu_list">
                                <li className="menu_item" >
                                    <Link
                                        className="link"
                                        to={{ pathname: '/tours', search: queryString.stringify({ _place: "northern_vietnam" }) }}
                                    >NORTHERN VIETNAM</Link>
                                </li>
                                <li className="menu_item">
                                    <Link
                                        className="link"
                                        to={{ pathname: '/tours', search: queryString.stringify({ _place: "center_vietnam" }) }}
                                    >CENTER VIETNAM</Link>
                                </li>
                                <li className="menu_item">
                                    <Link
                                        className="link"
                                        to={{ pathname: '/tours', search: queryString.stringify({ _place: "southern_vietnam" }) }}
                                    >SOUTHERN VIETNAM</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="header__link">
                        Văn Hóa
                    </div>
                    <div className="header__link">
                        Ẩm Thực
                    </div>
                </div>
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
import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

Intro.propTypes = {

};

function Intro(props) {
    return (
        <Box sx={{
            width: '92%',
            height: '240px',
            padding: 1,
            borderRadius: '10px',
            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px'
        }}>
            <Box sx={{
                width: '100%',
                height: '100%',
            }}>
                <img
                    src='https://dbk.vn/uploads/ckfinder/images/1-content/anh-dep-1.jpg'
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            </Box>
        </Box >
    );
}

export default Intro;
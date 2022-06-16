import React from 'react';
import PropTypes from 'prop-types';
import { Box, Paper } from '@mui/material';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

Order.propTypes = {

};

function Order(props) {
    return (
        <Box>
            <Box sx={{ backgroundColor: '#011e41' }}>
                <Box sx={{ mt: 2 }}>
                    <img
                        src="https://media.phapluatplus.vn/files/News/2021/01/31/4-hot-girl-xinh-nhu-thien-than-thu-hut-hang-trieu-nguoi-theo-doi-tren-tiktok-khi-chua-18-tuoi-004813.jpg"
                        alt=""
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </Box>
                <Box sx={{ fontSize: '1.6rem', color: ' #fff', padding: '2rem 1.5rem' }}>
                    <Box>
                        <Box component="span" sx={{ borderRight: '1px solid #fff', pr: 1, mr: 1, color: '#ffc600', fontWeight: 'bold' }} >TO71004</Box>
                        <Box component="span" sx={{ lineHeight: '2.5rem' }}>Tour Côn Đảo 2 ngày 1 đêm | Khám phá vẻ đẹp hoang sơ nơi đảo xa</Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, color: '#808a9b' }}>
                        <LocationOnIcon sx={{ fontSize: '2rem', mr: 0.5 }} />
                        <Box>Côn Đảo | 1 Khách</Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, color: '#808a9b' }}>
                        <AccessTimeIcon sx={{ fontSize: '2rem' }} />
                        <Box sx={{ ml: 0.5, mr: 0.5 }}>2 ngày 1 đêm | Phương tiện</Box>
                        <DirectionsBusIcon sx={{ fontSize: '2rem' }} />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, color: '#808a9b' }}>
                        <EventAvailableIcon sx={{ fontSize: '2rem', mr: 0.5 }} />
                        <Box>Khởi Hành: 14/6/2022</Box>
                    </Box>
                </Box>
                <Box sx={{ backgroundColor: '#ffc600', textAlign: 'center', fontSize: '2rem', padding: '2rem', fontWeight: 'bold' }}>
                    <Box component="span">Tổng:</Box>
                    <Box component="span" sx={{ fontSize: '3rem' }}> {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(2990000)}</Box>
                </Box>
            </Box>
            <Paper sx={{ padding: '2rem', fontSize: '1.6rem', lineHeight: '2.5rem', mt: 2 }}>
                <Box component="span">Sau khi hoàn tất đơn hàng, nhân viên của www.vietnambooking.com sẽ liên hệ với quý khách để xác nhận tình trạng tour.
                    Mọi thắc mắc, xin Quý khách vui lòng liên hệ tổng đài </Box>
                <Box component="span" sx={{ fontSize: '1.8rem', fontWeight: 'bold' }}>1900 3398</Box>
            </Paper>
        </Box>
    );
}

export default Order;
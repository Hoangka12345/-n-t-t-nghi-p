import React from 'react';
import Header from '../../../../components/header';
import { Box, Container, Grid, Typography } from '@mui/material';
import Slide from '../components/Slide';
import Intro from '../components/Intro';

const Styles = {
    title: {
        padding: '1rem',
        borderRadius: '50%',
        backgroundColor: '#e7dfd3',
        color: '#d18936',
        fontSize: '4.5rem',
        lineHeight: '4.5rem'
    },
    description: {
        fontStyle: 'italic',
        fontSize: '2rem',
        lineHeight: '2rem',
        margin: '1rem 0',
    }
}

function HomePage(props) {
    return (
        <Box sx={{ mb: 2 }}>
            <Header />
            <Slide />
            <Container sx={{ mt: 2 }}>
                <Grid container>
                    <Grid item xs={12} sx={{ textAlign: 'center' }}>
                        <Box sx={{
                            fontFamily: `'Sedgwick Ave', cursive`,
                            display: 'flex',
                            justifyContent: 'center',
                            gap: 1,
                        }}>
                            <Box variant="span" sx={Styles.title}>Giới</Box>
                            <Box variant="span" sx={Styles.title}>thiệu</Box>
                        </Box>
                        <Typography sx={Styles.description}>Hãy cùng chúng tôi tìm hiểu về Việt Nam quê tôi nhé!</Typography>
                    </Grid>
                    <Grid container>
                        <Grid item xs={4}>
                            <Intro />
                        </Grid>
                        <Grid item xs={4}>
                            <Intro />
                        </Grid>
                        <Grid item xs={4}>
                            <Intro />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default HomePage;
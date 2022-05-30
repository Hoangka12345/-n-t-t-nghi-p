import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import FeedBack from './FeedBack';
import { Box, Grid } from '@mui/material';
import { feedbacks } from '../../../../fakeData';

FeedBackList.propTypes = {

};

function FeedBackList(props) {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);
    const delay = 2000;

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <Box sx={{ overflow: 'hidden', }}>
            <Box
                sx={{
                    transform: `translate3d(${-index * 33.5}%, 0, 0)`,
                    // width: '100%',
                    // height: '100%',
                    display: 'flex',
                    gap: 1,
                    transition: 'ease 1000ms'
                }}
            >
                {feedbacks.map(feedback => (
                    <Box key={feedback.id} sx={{ minWidth: '33%' }}>
                        <FeedBack feedback={feedback} />
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default FeedBackList;
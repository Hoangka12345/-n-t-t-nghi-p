import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';

FavoriteTours.propTypes = {

};

function FavoriteTours(props) {
    return (
        <Box>
            <List>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <FolderIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Single-line item"
                    />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <FolderIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Single-line item"
                    />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <FolderIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Single-line item"
                    />
                </ListItem>
            </List>
        </Box>
    );
}

export default FavoriteTours;

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Footer = () => {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="body1" color="inherit">
                    © 2024 My Simple E-commerce. All rights reserved.
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Footer;

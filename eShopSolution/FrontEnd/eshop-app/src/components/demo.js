import React from 'react';
import { Button } from '@mui/material';
import '../assets/scss/demo.scss';

const CustomButton = ({ children }) => {
  return (
    <Button variant="contained" color="primary" className="custom-button">
      {children}
    </Button>
  );
};

export default CustomButton;
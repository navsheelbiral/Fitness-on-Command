import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => (
  <Box mt="80px" bgcolor="transparent">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" />
    </Stack>
    <Typography variant="h5" color="white" sx={{ fontSize: { lg: '20px', xs: '15px' } }} mt="41px" textAlign="center" pb="40px">Made with ❤️ by Navsheel Biral</Typography>
  </Box>
);

export default Footer;

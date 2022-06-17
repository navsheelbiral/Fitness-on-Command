import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" className="navbar-options" style={{ textDecoration: 'none', color: '#ffffff', fontFamily: '"Open Sans", sans-serif' }}>Home</Link>
      <a href="#exercises" className="navbar-options" style={{ textDecoration: 'none', color: '#ffffff', fontFamily: '"Open Sans", sans-serif' }}>Exercises</a>
    </Stack>
  </Stack>
);

export default Navbar;

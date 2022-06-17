import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography fontWeight="800" fontSize="33px" sx={{ backgroundClip: 'border-box', textFillColor: '#5ac6f3' }}>Fitness On Command</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '50px', xs: '45px' } }} mb="23px" mt="30px" color="#ffffff">
      Sweat, Smile <br />
      And Repeat 💯
    </Typography>
    <Typography fontSize="22px" fontFamily="Open Sans" lineHeight="35px" color="white">
      Check out the most effective exercises personalized to you!
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '220px', textAlign: 'center', background: '#1a97f5', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#a2e9fc" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;

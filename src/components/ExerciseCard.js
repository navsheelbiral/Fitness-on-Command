import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    <Stack direction="row" sx={{ mt: '10px' }}>
      <Button className="exercise-card-btn" sx={{ ml: '21px', color: '#000', background: '#5ac6f3', fontSize: '14px', fontFamily: 'Open Sans', borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercise.bodyPart}
      </Button>
      <Button className="exercise-card-btn" sx={{ ml: '21px', color: '#000', background: '#54d391', fontSize: '14px', fontFamily: 'Open Sans', borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercise.target}
      </Button>
    </Stack>
    <Typography ml="21px" color="#fff" fontWeight="bold" sx={{ fontSize: { lg: '20px', xs: '16px' } }} mt="10px" pb="10px" textTransform="capitalize">
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;

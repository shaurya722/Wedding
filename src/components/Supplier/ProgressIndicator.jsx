import React from 'react'
import { Box, Typography, LinearProgress } from '@mui/material'

const ProgressIndicator = () => {
  return (
    <Box sx={{ mt: 10 }}>
      <Typography
        variant='h4'
        sx={{ fontSize: '1.5rem', fontWeight: 500, color: '#1f2937' }}
      >
        Suppliers
      </Typography>
      <Typography sx={{ mt: 2, fontSize: '1rem', color: '#71717a' }}>
        8 of 33 Suppliers booked
      </Typography>
      <Box
        sx={{
          mt: 4,
          display: 'flex',
          height: '10px',
          width: '425px',
          borderRadius: '4px',
        }}
      >
        <Box
          sx={{
            height: '10px',
            width: '95px',
            bgcolor: '#f9a8d4',
            borderRadius: '4px',
          }}
        />
        <Box
          sx={{
            height: '10px',
            width: '95px',
            bgcolor: '#fecaca',
            borderRadius: '4px',
          }}
        />
        <Box
          sx={{
            height: '10px',
            width: '95px',
            bgcolor: '#fbcfe8',
            borderRadius: '4px',
          }}
        />
        <Box
          sx={{
            height: '10px',
            width: '140px',
            bgcolor: '#f3f4f6',
            borderRadius: '4px',
          }}
        />
      </Box>
    </Box>
  )
}

export default ProgressIndicator

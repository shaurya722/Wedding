import React from 'react'
import { Box, Typography, Button } from '@mui/material'

const CallToAction = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 8,
        mt: 10,
        bgcolor: 'rgba(156, 163, 175, 0.1)',
      }}
    >
      <Typography
        variant='h1'
        sx={{
          fontSize: '3rem',
          fontWeight: 'bold',
          textAlign: 'center',
          maxWidth: '887px',
          color: '#1f2937',
        }}
      >
        Planning your wedding is more fun with your Friends
      </Typography>
      <Box sx={{ mt: 8 }}>
        <Button
          variant='contained'
          sx={{
            px: 10,
            py: 4,
            fontSize: '1.125rem',
            fontWeight: 600,
            color: 'white',
            bgcolor: '#9ca3af',
            borderRadius: '24px',
            textTransform: 'none',
            '&:hover': {
              bgcolor: '#6b7280',
            },
          }}
        >
          Invite Now
        </Button>
      </Box>
    </Box>
  )
}

export default CallToAction

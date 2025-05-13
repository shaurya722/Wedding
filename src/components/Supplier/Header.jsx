import React from 'react'
import { AppBar, Toolbar, Typography, Box } from '@mui/material'

const Header = () => {
  return (
    <AppBar
      position='static'
      elevation={0}
      sx={{
        bgcolor: 'white',
        borderBottom: '1px solid #e5e7eb',
        height: '60px',
      }}
    >
      <Toolbar sx={{ px: { xs: 2, md: 10 }, justifyContent: 'space-between' }}>
        <Typography
          variant='h6'
          component='div'
          sx={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            letterSpacing: '-0.025em',
            color: '#9ca3af',
          }}
        >
          Perfect Wedding Planner
        </Typography>

        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            gap: '40px',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{ fontSize: '1rem', fontWeight: 600, color: '#1f2937' }}
          >
            Home
          </Typography>
          <Typography sx={{ fontSize: '1rem', color: '#1f2937' }}>
            Checklist
          </Typography>
          <Typography sx={{ fontSize: '1rem', color: '#1f2937' }}>
            Guests
          </Typography>
          <Typography sx={{ fontSize: '1rem', color: '#1f2937' }}>
            Budget
          </Typography>
          <Typography sx={{ fontSize: '1rem', color: '#1f2937' }}>
            Supplier
          </Typography>
        </Box>

        <Box
          sx={{
            width: '40px',
            height: '40px',
            borderRadius: '40px',
            bgcolor: '#f3f4f6',
          }}
        />
      </Toolbar>
    </AppBar>
  )
}

export default Header

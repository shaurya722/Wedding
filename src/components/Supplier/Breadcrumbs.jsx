import React from 'react'
import { Box, Typography } from '@mui/material'

const Breadcrumbs = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        alignItems: 'center',
        fontSize: '1rem',
        color: '#71717a',
      }}
    >
      <Typography component='div' sx={{ fontSize: '1rem', color: '#71717a' }}>
        Home
      </Typography>
      <Box component='div'>
        <svg
          width='10'
          height='10'
          viewBox='0 0 10 10'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M7.48207 4.40615L7.48107 4.40515L3.86007 0.783152C3.70253 0.625614 3.48886 0.537109 3.26607 0.537109C3.04327 0.537109 2.82961 0.625614 2.67207 0.783152C2.51453 0.940691 2.42603 1.15436 2.42603 1.37715C2.42603 1.59995 2.51453 1.81361 2.67207 1.97115L5.70207 5.00015L2.67207 8.03015C2.52498 8.1897 2.44534 8.39997 2.44984 8.61693C2.45434 8.83388 2.54262 9.04068 2.69619 9.19399C2.84976 9.3473 3.05671 9.43524 3.27367 9.43937C3.49063 9.4435 3.70077 9.36351 3.86007 9.21615L7.48107 5.59415H7.48207C7.56038 5.51611 7.62251 5.42338 7.66491 5.32128C7.70731 5.21918 7.72913 5.10971 7.72913 4.99915C7.72913 4.8886 7.70731 4.77913 7.66491 4.67702C7.62251 4.57492 7.56038 4.48219 7.48207 4.40415V4.40615Z'
            fill='#8A8A8E'
          ></path>
        </svg>
      </Box>
      <Typography component='div' sx={{ fontWeight: 600, color: '#1f2937' }}>
        Suppliers
      </Typography>
    </Box>
  )
}

export default Breadcrumbs

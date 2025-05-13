import React from 'react'
import { Box, Typography } from '@mui/material'

const Pagination = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: 6,
        pt: 3,
        pb: 4,
        mt: 10,
      }}
    >
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            alignItems: 'center',
            px: 3.5,
            py: 2,
            bgcolor: 'white',
            borderRadius: '8px',
            border: '1px solid #e5e7eb',
          }}
        >
          <Box component='span'>
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M15.8334 10.0003H4.16675M4.16675 10.0003L10.0001 15.8337M4.16675 10.0003L10.0001 4.16699'
                stroke='#8A8A8E'
                strokeWidth='1.67'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>
            </svg>
          </Box>
          <Typography sx={{ fontSize: '0.875rem', color: '#1f2937' }}>
            Previous
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
        <Box
          sx={{
            width: '40px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '0.875rem',
            bgcolor: '#e5e7eb',
            borderRadius: '8px',
            color: '#1f2937',
          }}
        >
          1
        </Box>
        <Box
          sx={{
            width: '40px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '0.875rem',
            borderRadius: '8px',
            color: '#1f2937',
          }}
        >
          2
        </Box>
        <Box
          sx={{
            width: '40px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '0.875rem',
            borderRadius: '8px',
            color: '#1f2937',
          }}
        >
          3
        </Box>
        <Box
          sx={{
            width: '40px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '0.875rem',
            borderRadius: '8px',
            color: '#1f2937',
          }}
        >
          ...
        </Box>
        <Box
          sx={{
            width: '40px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '0.875rem',
            borderRadius: '8px',
            color: '#1f2937',
          }}
        >
          8
        </Box>
        <Box
          sx={{
            width: '40px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '0.875rem',
            borderRadius: '8px',
            color: '#1f2937',
          }}
        >
          9
        </Box>
        <Box
          sx={{
            width: '40px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '0.875rem',
            borderRadius: '8px',
            color: '#1f2937',
          }}
        >
          10
        </Box>
      </Box>

      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            alignItems: 'center',
            px: 3.5,
            py: 2,
            bgcolor: 'white',
            borderRadius: '8px',
            border: '1px solid #e5e7eb',
          }}
        >
          <Typography sx={{ fontSize: '0.875rem', color: '#71717a' }}>
            Next
          </Typography>
          <Box component='span'>
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M4.16675 10.0003H15.8334M15.8334 10.0003L10.0001 4.16699M15.8334 10.0003L10.0001 15.8337'
                stroke='#8A8A8E'
                strokeWidth='1.67'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>
            </svg>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Pagination

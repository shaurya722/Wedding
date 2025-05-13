import React from 'react'
import { Box, InputBase, Paper } from '@mui/material'

const SearchFilterBar = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        px: 3.5,
        py: 2,
        mt: 5,
        borderRadius: '8px',
        border: '1px solid #e5e7eb',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box sx={{ display: 'flex', gap: 3.5, alignItems: 'center' }}>
        <Box
          sx={{
            display: 'flex',
            gap: 3,
            alignItems: 'center',
            py: 3,
            pr: 10,
            pl: 4,
            bgcolor: 'white',
            borderRadius: '12px',
            height: '46px',
            width: '425px',
          }}
        >
          <Box component='span'>
            <svg
              width='16'
              height='17'
              viewBox='0 0 16 17'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M14.5036 14.2374L12.212 11.9969L12.1583 11.9152C12.0584 11.8158 11.9219 11.7598 11.7794 11.7598C11.6368 11.7598 11.5003 11.8158 11.4004 11.9152C9.45291 13.7019 6.45202 13.799 4.38792 12.1422C2.32383 10.4853 1.83703 7.58859 3.25038 5.37312C4.66372 3.15766 7.53863 2.31091 9.96848 3.39443C12.3983 4.47796 13.6291 7.15554 12.8446 9.6514C12.7881 9.83171 12.8343 10.0278 12.9657 10.1658C13.0972 10.3038 13.294 10.3627 13.4819 10.3204C13.6699 10.2781 13.8205 10.1409 13.877 9.96063C14.8148 6.99877 13.3984 3.81138 10.544 2.46038C7.68958 1.10938 4.25381 2.00022 2.45929 4.55662C0.664765 7.11301 1.05004 10.5678 3.36587 12.686C5.68171 14.8042 9.23311 14.9503 11.7227 13.0296L13.7517 15.0134C13.9612 15.2173 14.3 15.2173 14.5096 15.0134C14.7189 14.8065 14.7189 14.4734 14.5096 14.2665L14.5036 14.2374Z'
                fill='#667085'
              ></path>
            </svg>
          </Box>
          <InputBase
            placeholder='Search Supplier by name'
            sx={{ fontSize: '0.875rem', color: '#71717a', width: '100%' }}
          />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            alignItems: 'center',
            px: 4,
            py: 2.5,
            bgcolor: 'white',
            borderRadius: '8px',
            border: '1px solid #f3f4f6',
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
                d='M5 10H15M2.5 5H17.5M7.5 15H12.5'
                stroke='#71717a'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </Box>
          <Box component='span' sx={{ fontSize: '0.875rem', color: '#71717a' }}>
            Filter
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            bgcolor: '#f3f4f6',
            border: '1px solid #f3f4f6',
          }}
        >
          <svg
            width='24'
            height='25'
            viewBox='0 0 24 25'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M9 17.5H19M9 12.5H19M9 7.5H19M5.00195 17.5V17.502L5 17.502V17.5H5.00195ZM5.00195 12.5V12.502L5 12.502V12.5H5.00195ZM5.00195 7.5V7.502L5 7.50195V7.5H5.00195Z'
              stroke='#8A8A8E'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
          </svg>
        </Box>
      </Box>
    </Paper>
  )
}

export default SearchFilterBar

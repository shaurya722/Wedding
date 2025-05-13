import React, { useState } from 'react'
import { Box, Tabs, Tab, styled } from '@mui/material'

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  minWidth: 0,
  padding: '0 16px 16px 0',
  marginRight: '16px',
  fontSize: '0.875rem',
  fontWeight: 'normal',
  color: '#71717a',
  '&.Mui-selected': {
    color: '#f9a8d4',
    fontWeight: 'normal',
  },
}))

const FilterTabs = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          style: {
            backgroundColor: '#f9a8d4',
            height: '2px',
          },
        }}
      >
        <StyledTab
          label='All'
          sx={{
            color: value === 0 ? '#f9a8d4' : '#71717a',
            borderBottom: value === 0 ? '2px solid #f9a8d4' : 'none',
          }}
        />
        <StyledTab label='Booked' />
        <StyledTab label='Requested' />
        <StyledTab label='Rejected' />
        <StyledTab label='Identified' />
      </Tabs>
    </Box>
  )
}

export default FilterTabs

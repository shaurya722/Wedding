import React from 'react'
import { Box, Container } from '@mui/material'
import Breadcrumbs from '../Breadcrumbs'
import ProgressIndicator from '../ProgressIndicator'
import FilterTabs from '../FilterTabs'
import SearchFilterBar from '../SearchFilterBar'
import SupplierTable from '../SupplierTable'
import Pagination from '../Pagination'
import CallToAction from '../CallToAction'
import Footer from '../Footer'
import Header from '../Header'

const SupplierPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'white',
        minHeight: '100vh',
      }}
    >
      <Header />
      <Container sx={{ px: { xs: 2, md: 10 }, py: 5 }}>
        <Breadcrumbs />
        <ProgressIndicator />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: 10,
          }}
        >
          <FilterTabs />
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
                border: '1px solid #e5e7eb',
              }}
            >
              <Box
                component='span'
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M8.08146 10.291L8.08146 2.26367'
                    stroke='#8A8A8E'
                    strokeWidth='1.2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  ></path>
                  <path
                    d='M10.0254 8.33887L8.08139 10.2909L6.13739 8.33887'
                    stroke='#8A8A8E'
                    strokeWidth='1.2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  ></path>
                  <path
                    d='M11.5061 5H12.2121C13.7521 5 15 6.2121 15 7.70867L15 11.2987C15 12.7908 13.7551 14 12.2189 14L3.78865 14C2.24865 14 1 12.7872 1 11.2913L1 7.70059C1 6.20916 2.24562 5 3.78108 5H4.49395'
                    stroke='#8A8A8E'
                    strokeWidth='1.2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  ></path>
                </svg>
              </Box>
              <Box component='span' sx={{ fontSize: '14px', color: '#1f2937' }}>
                Export
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                alignItems: 'center',
                px: 4,
                py: 2.5,
                bgcolor: '#f9a8d4',
                borderRadius: '8px',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 24,
                  height: 24,
                }}
              >
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7.99992 3.33301V12.6663M3.33325 7.99967H12.6666'
                    stroke='#F5F6F7'
                    strokeWidth='1.33333'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  ></path>
                </svg>
              </Box>
              <Box component='span' sx={{ fontSize: '14px', color: 'white' }}>
                New Supplier
              </Box>
            </Box>
          </Box>
        </Box>
        <SearchFilterBar />
        <SupplierTable />
        <Pagination />
      </Container>
      <CallToAction />
      <Footer />
    </Box>
  )
}

export default SupplierPage

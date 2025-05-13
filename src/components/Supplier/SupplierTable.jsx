import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Checkbox,
  Typography,
} from '@mui/material'

const SupplierTable = () => {
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{
        mt: 5,
        borderRadius: '8px',
        border: '1px solid #e5e7eb',
        boxShadow: 'none',
      }}
    >
      <Table sx={{ width: '100%' }}>
        <TableHead sx={{ bgcolor: '#fafafa' }}>
          <TableRow>
            <TableCell sx={{ px: 6, py: 3 }}>
              <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                <Checkbox
                  size='small'
                  sx={{
                    width: '20px',
                    height: '20px',
                    bgcolor: 'white',
                    borderRadius: '4px',
                    border: '1px solid #e5e7eb',
                    '&.Mui-checked': {
                      color: '#f9a8d4',
                    },
                  }}
                />
                <Typography
                  sx={{
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    color: '#1f2937',
                  }}
                >
                  Supplier Name
                </Typography>
              </Box>
            </TableCell>
            <TableCell sx={{ px: 6, py: 3 }}>
              <Typography
                sx={{ fontSize: '0.75rem', fontWeight: 500, color: '#1f2937' }}
              >
                Category
              </Typography>
            </TableCell>
            <TableCell sx={{ px: 6, py: 3 }}>
              <Typography
                sx={{ fontSize: '0.75rem', fontWeight: 500, color: '#1f2937' }}
              >
                Address
              </Typography>
            </TableCell>
            <TableCell align='center' sx={{ px: 6, py: 3 }}>
              <Typography
                sx={{ fontSize: '0.75rem', fontWeight: 500, color: '#1f2937' }}
              >
                Price
              </Typography>
            </TableCell>
            <TableCell align='center' sx={{ px: 6, py: 3 }}>
              <Typography
                sx={{ fontSize: '0.75rem', fontWeight: 500, color: '#1f2937' }}
              >
                Website
              </Typography>
            </TableCell>
            <TableCell align='center' sx={{ px: 6, py: 3 }}>
              <Typography
                sx={{ fontSize: '0.75rem', fontWeight: 500, color: '#1f2937' }}
              >
                Rating
              </Typography>
            </TableCell>
            <TableCell align='center' sx={{ px: 6, py: 3 }}>
              <Typography
                sx={{ fontSize: '0.75rem', fontWeight: 500, color: '#1f2937' }}
              >
                Status
              </Typography>
            </TableCell>
            <TableCell align='center' sx={{ px: 6, py: 3 }}>
              <Typography
                sx={{ fontSize: '0.75rem', fontWeight: 500, color: '#1f2937' }}
              >
                Notes
              </Typography>
            </TableCell>
            <TableCell sx={{ width: '50px' }}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ border: '1px solid #e5e7eb' }}>
            <TableCell sx={{ px: 6, py: 4 }}>
              <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                <Checkbox
                  size='small'
                  sx={{
                    width: '20px',
                    height: '20px',
                    bgcolor: 'white',
                    borderRadius: '4px',
                    border: '1px solid #e5e7eb',
                    '&.Mui-checked': {
                      color: '#f9a8d4',
                    },
                  }}
                />
                <Box>
                  <Typography
                    sx={{
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: '#1f2937',
                    }}
                  >
                    Tanner Finsha
                  </Typography>
                  <Typography sx={{ fontSize: '0.875rem', color: '#71717a' }}>
                    @Tannerfisher@gmail.com
                  </Typography>
                </Box>
              </Box>
            </TableCell>
            <TableCell sx={{ px: 6, py: 4 }}>
              <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '40px',
                    height: '40px',
                    bgcolor: '#f5f5f5',
                    borderRadius: '200px',
                  }}
                >
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M6.34326 3.68591C6.83159 3.19759 7.36734 2.78559 7.93569 2.44992C10.4352 0.973723 13.5651 0.973723 16.0645 2.44992C16.6329 2.78559 17.1686 3.19759 17.657 3.68591L12.0001 9.34277L6.34326 3.68591ZM12.0001 6.51434L9.4131 3.92733C11.0447 3.14792 12.9556 3.14792 14.5871 3.92733L12.0001 6.51434Z'
                      fill='#181818'
                    ></path>
                    <path
                      d='M2 12.6581C2 9.52701 3.43899 6.73204 5.69172 4.89844L7.11528 6.322C5.22043 7.78497 4 10.079 4 12.6581C4 17.0764 7.58172 20.6581 12 20.6581C16.4183 20.6581 20 17.0764 20 12.6581C20 10.079 18.7796 7.78499 16.8847 6.32202L18.3083 4.89846C20.561 6.73206 22 9.52702 22 12.6581C22 18.1809 17.5228 22.6581 12 22.6581C6.47715 22.6581 2 18.1809 2 12.6581Z'
                      fill='#181818'
                    ></path>
                  </svg>
                </Box>
                <Typography sx={{ fontSize: '0.875rem', color: '#1f2937' }}>
                  Accessories
                </Typography>
              </Box>
            </TableCell>
            <TableCell sx={{ px: 6, py: 4 }}>
              <Typography sx={{ fontSize: '0.875rem', color: '#1f2937' }}>
                T66, German...
              </Typography>
            </TableCell>
            <TableCell align='center' sx={{ px: 6, py: 4 }}>
              <Typography sx={{ fontSize: '0.875rem', color: '#1f2937' }}>
                € 2,000
              </Typography>
            </TableCell>
            <TableCell align='center' sx={{ px: 6, py: 4 }}>
              <Typography sx={{ fontSize: '0.875rem', color: '#1f2937' }}>
                https//www.vendor.in
              </Typography>
            </TableCell>
            <TableCell sx={{ px: 6, py: 4 }}>
              <Box
                sx={{
                  display: 'flex',
                  gap: 0.5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M18.6875 7.60938C18.6092 7.36327 18.4585 7.14654 18.2549 6.98761C18.0514 6.82868 17.8046 6.73496 17.5468 6.71875L12.9062 6.39844L11.1875 2.0625C11.0936 1.82375 10.9303 1.61867 10.7185 1.47382C10.5068 1.32896 10.2565 1.25099 9.99997 1.25C9.74344 1.25099 9.49311 1.32896 9.28139 1.47382C9.06968 1.61867 8.90632 1.82375 8.81247 2.0625L7.06247 6.42188L2.45309 6.71875C2.19567 6.73601 1.94936 6.83012 1.74601 6.9889C1.54266 7.14768 1.39163 7.36383 1.31247 7.60938C1.23117 7.85869 1.22642 8.12664 1.29883 8.37868C1.37124 8.63072 1.51749 8.85529 1.71872 9.02344L5.26559 12.0234L4.2109 16.1719C4.13793 16.4525 4.15107 16.7486 4.24859 17.0217C4.34612 17.2948 4.52354 17.5322 4.75778 17.7031C4.98515 17.8663 5.25604 17.9579 5.53578 17.9663C5.81552 17.9746 6.09139 17.8993 6.32809 17.75L9.99216 15.4297H10.0078L13.9531 17.9219C14.1555 18.0534 14.3914 18.1239 14.6328 18.125C14.8299 18.1235 15.0239 18.0767 15.2001 17.9884C15.3763 17.9002 15.5299 17.7727 15.6491 17.6157C15.7683 17.4588 15.85 17.2766 15.8878 17.0832C15.9256 16.8898 15.9185 16.6903 15.8672 16.5L14.75 11.9609L18.2812 9.02344C18.4824 8.85529 18.6287 8.63072 18.7011 8.37868C18.7735 8.12664 18.7688 7.85869 18.6875 7.60938Z'
                    fill='#FFDE00'
                  ></path>
                </svg>
                <Typography sx={{ fontSize: '0.875rem', color: '#1f2937' }}>
                  5.0
                </Typography>
              </Box>
            </TableCell>
            <TableCell align='center' sx={{ px: 6, py: 4 }}>
              <Typography sx={{ fontSize: '0.875rem', color: '#1f2937' }}>
                Booked
              </Typography>
            </TableCell>
            <TableCell align='center' sx={{ px: 6, py: 4 }}>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M8.58964 18.0029C8.58964 18.0029 7.26359 17.7703 6.08996 17.1257L3.74844 17.7886C3.74844 17.7886 3.42689 17.8827 3.09708 17.7983C3.09708 17.7983 2.76728 17.714 2.52656 17.4733C2.52656 17.4733 2.28585 17.2325 2.20148 16.9027C2.20148 16.9027 2.11712 16.5729 2.21268 16.2462L2.87415 13.9099C2.87415 13.9099 2.22952 12.7362 1.99692 11.4102C1.99692 11.4102 1.74071 9.94951 2.01752 8.49261C2.01752 8.49261 2.29434 7.03569 3.06842 5.77078C3.06842 5.77078 3.8425 4.50587 5.01384 3.59637C5.01384 3.59637 6.18517 2.68688 7.60243 2.2503C7.60243 2.2503 9.01968 1.81373 10.4998 1.90649C10.4998 1.90649 11.9798 1.99924 13.3315 2.60934C13.3315 2.60934 14.6831 3.21944 15.7318 4.26806C15.7318 4.26806 16.7804 5.31668 17.3905 6.66834C17.3905 6.66834 18.0006 8.02 18.0933 9.50007C18.0933 9.50007 18.1861 10.9801 17.7495 12.3974C17.7495 12.3974 17.3129 13.8147 16.4035 14.986C16.4035 14.986 15.494 16.1573 14.229 16.9314C14.229 16.9314 12.9641 17.7055 11.5072 17.9823C11.5072 17.9823 10.0503 18.2591 8.58964 18.0029ZM11.2739 16.7543C11.2739 16.7543 8.72392 17.2388 6.49104 15.9155C6.34368 15.8282 6.16648 15.8049 6.00166 15.8515L3.41625 16.5836L4.14829 13.9982C4.19495 13.8333 4.17192 13.6566 4.08458 13.5092C4.08458 13.5092 2.761 11.2762 3.24555 8.72593C3.24555 8.72593 3.7301 6.17571 5.78045 4.58369C5.78045 4.58369 7.8308 2.99168 10.4216 3.15404C10.4216 3.15404 13.0123 3.3164 14.8479 5.15195C14.8479 5.15195 16.6834 6.98749 16.8458 9.57826C16.8458 9.57826 17.0082 12.169 15.4161 14.2194C15.4161 14.2194 13.8241 16.2697 11.2739 16.7543Z'
                  fill='#8A8A8E'
                ></path>
                <path
                  d='M10.9376 9.99979C10.9376 10.5176 10.5178 10.9373 10.0001 10.9373C9.4823 10.9373 9.06257 10.5176 9.06257 9.99979C9.06257 9.48202 9.4823 9.06229 10.0001 9.06229C10.5178 9.06229 10.9376 9.48202 10.9376 9.99979Z'
                  fill='#8A8A8E'
                ></path>
                <path
                  d='M7.18757 9.99979C7.18757 10.5176 6.76784 10.9373 6.25007 10.9373C5.7323 10.9373 5.31257 10.5176 5.31257 9.99979C5.31257 9.48202 5.7323 9.06229 6.25007 9.06229C6.76784 9.06229 7.18757 9.48202 7.18757 9.99979Z'
                  fill='#8A8A8E'
                ></path>
                <path
                  d='M14.6876 9.99979C14.6876 10.5176 14.2678 10.9373 13.7501 10.9373C13.2323 10.9373 12.8126 10.5176 12.8126 9.99979C12.8126 9.48202 13.2323 9.06229 13.7501 9.06229C14.2678 9.06229 14.6876 9.48202 14.6876 9.99979Z'
                  fill='#8A8A8E'
                ></path>
              </svg>
            </TableCell>
            <TableCell align='center' sx={{ px: 6, py: 4 }}>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M10.0001 10.833C10.4603 10.833 10.8334 10.4599 10.8334 9.99967C10.8334 9.53944 10.4603 9.16634 10.0001 9.16634C9.53984 9.16634 9.16675 9.53944 9.16675 9.99967C9.16675 10.4599 9.53984 10.833 10.0001 10.833Z'
                  stroke='#8A8A8E'
                  strokeWidth='1.66667'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></path>
                <path
                  d='M10.0001 4.99967C10.4603 4.99967 10.8334 4.62658 10.8334 4.16634C10.8334 3.7061 10.4603 3.33301 10.0001 3.33301C9.53984 3.33301 9.16675 3.7061 9.16675 4.16634C9.16675 4.62658 9.53984 4.99967 10.0001 4.99967Z'
                  stroke='#8A8A8E'
                  strokeWidth='1.66667'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></path>
                <path
                  d='M10.0001 16.6663C10.4603 16.6663 10.8334 16.2932 10.8334 15.833C10.8334 15.3728 10.4603 14.9997 10.0001 14.9997C9.53984 14.9997 9.16675 15.3728 9.16675 15.833C9.16675 16.2932 9.53984 16.6663 10.0001 16.6663Z'
                  stroke='#8A8A8E'
                  strokeWidth='1.66667'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></path>
              </svg>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default SupplierTable

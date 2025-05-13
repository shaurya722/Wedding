import { useState } from 'react'
import CustomButton from './components/UI/Button/CustomButton'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, Button, TextField, Typography } from '@mui/material'
import CustomInput from './components/UI/Input/CustomInput'
import AcUnitIcon from '@mui/icons-material/AcUnit'
import VisibilityIcon from '@mui/icons-material/Visibility'
import LoginPage from './components/Login/LoginPage'
import Login1 from './components/Login1/Login1'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import InputDesign from './components/VerifyPhone/InputDesign'
import OTPPage from './components/OTPPage/OTPPage'
import NewPassword from './components/NewPassword/NewPassword'
import { RouteRounded } from '@mui/icons-material'
import { SignUpForm } from './components/SignUP/SignUpForm'
import { GuestManagement } from './components/CreateGuest/GuestManagement'
import SupplierPage from './components/Supplier/pages/SupplierPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/login-mui' element={<Login1 />} />
          <Route path='/verify-phone' element={<InputDesign />} />
          <Route path='/otp' element={<OTPPage />} />
          <Route path='/new-password' element={<NewPassword />} />
          <Route path='/signup' element={<SignUpForm />} />
          <Route path='/supplier' element={<SupplierPage />} />
          <Route path='/guest-management' element={<GuestManagement />} />
        </Routes>
      </BrowserRouter>
      {/* 
            <Box>sjh</Box>
            <Typography>sfgysgyi</Typography>
            <Button variant="text">Contained</Button>
            <CustomButton startIcon={<AcUnitIcon/>} variant="gradient">Contained</CustomButton>
            <CustomInput
          label="With Icons"
          variant="success"
          startIcon={<AcUnitIcon />}
          endIcon={<VisibilityIcon />}
        /> */}
      {/* <LoginPage/> */}
      {/* <Login1/> */}
    </>
  )
}

export default App

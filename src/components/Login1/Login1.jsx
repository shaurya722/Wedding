import React, { useState } from "react";
import { Box, Grid, Typography, Button, Checkbox, Divider, TextField, InputAdornment } from "@mui/material";
import { InputField } from "../Login/InputField";
// import SocialLogin from "../Login/SocialLogin";
// If you have a custom InputField component, you can import and use it instead of MUI's TextField

function Login1() {
  const [loginMethod, setLoginMethod] = useState("phone");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Grid container sx={{ justifyContent: 'center', alignItems: 'center',height:'673px' }}>
      <Grid item xl={5} lg={5} md={5} sm={5} sx={{ display: { xs: 'none', xl: 'block' },height:'673px'}}>
        <img src="src/assets/Rectangle 240648588.png" alt="Login Visual" style={{ width: '100%', borderTopLeftRadius: 16,height:'618px'}} />
      </Grid>
      <Grid item xxxs={24} xxs={12} xs={12} sm={8} md={6} xl={5} sx={{height:'673px'}}>
        <Box sx={{ p: { xs: 2, sm: 6 }, width: { xs: '100%', sm: 400, md: 500 }, mx: 'auto', bgcolor: 'background.paper', borderTopRightRadius: 16, borderBottomRightRadius: 16, boxShadow: 2 }}>
          <Typography variant="h4" fontWeight={700} color="text.primary" mb={1}>Login</Typography>
          <Typography variant="body1" color="text.secondary" mb={3}>Login to access your travelwise account</Typography>

          {/* Login method switcher */}
          <Box sx={{ display: 'flex', bgcolor: '#fff', borderRadius: 3, border: '1px solid #e0e0e0', height: 40, mb: 2 }}>
            <Button
              variant={loginMethod === 'phone' ? 'contained' : 'text'}
              onClick={() => setLoginMethod('phone')}
              sx={{ flex: 1, fontWeight: 700, borderRadius: 3, bgcolor: loginMethod === 'phone' ? 'grey.100' : 'transparent', boxShadow: 'none', color: 'text.primary' }}
              disableElevation
            >
              Phone Number
            </Button>
            <Button
              variant={loginMethod === 'email' ? 'contained' : 'text'}
              onClick={() => setLoginMethod('email')}
              sx={{ flex: 1, fontWeight: 700, borderRadius: 3, bgcolor: loginMethod === 'email' ? 'grey.100' : 'transparent', boxShadow: 'none', color: 'text.primary' }}
              disableElevation
            >
              Email
            </Button>
          </Box>

          {/* Input fields */}
          <Box mt={3}>
            <InputField
              fullWidth
              type={loginMethod === 'phone' ? 'Number' : 'email'}
              placeholder={loginMethod === 'phone' ? 'Phone Number' : 'Email'}
              variant="outlined"
              leftIcon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M10.9111 8.99936L9.3484 11.3761C9.3484 11.3761 10.4263 13.5995 12.6491 14.6688L12.6521 14.6668L14.9915 13.1041C14.9915 13.1041 15.3092 12.8886 15.6915 12.8534C15.6915 12.8534 16.0738 12.8182 16.421 12.9701L20.8007 14.8512C20.8007 14.8512 21.266 15.0448 21.5183 15.4811C21.5183 15.4811 21.7706 15.9174 21.7064 16.417C21.7064 16.417 21.4547 18.3818 19.9678 19.6906C19.9678 19.6906 18.481 20.9994 16.5 20.9998C16.5 20.9998 13.8147 20.9998 11.3338 19.9722C11.3338 19.9722 8.85286 18.9446 6.95406 17.0458C6.95406 17.0458 5.05525 15.147 4.02763 12.6661C4.02763 12.6661 3 10.1851 3 7.49966C3 7.49966 3.00045 5.51883 4.30925 4.03198C4.30925 4.03198 5.61805 2.54514 7.58257 2.29344C7.58257 2.29344 8.08245 2.22923 8.51873 2.48153C8.51873 2.48153 8.95501 2.73384 9.14561 3.19189L11.0285 7.58542C11.0285 7.58542 11.1778 7.9291 11.1479 8.3026C11.1479 8.3026 11.1181 8.6761 10.9111 8.99936Z" fill="#8A8A8E"/></svg>
              }
              sx={{ mb: 2 }}
            />
          </Box>
          <Box mt={3}>
            <InputField
              fullWidth
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              variant="outlined"
              leftIcon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3 9C3 9 3 8.37868 3.43934 7.93934C3.43934 7.93934 3.87868 7.5 4.5 7.5H19.5C19.5 7.5 20.1213 7.5 20.5607 7.93934C20.5607 7.93934 21 8.37868 21 9V19.5C21 19.5 21 20.1213 20.5607 20.5607C20.5607 20.5607 20.1213 21 19.5 21H4.5C4.5 21 3.87868 21 3.43934 20.5607C3.43934 20.5607 3 20.1213 3 19.5V9ZM4.5 9V19.5L19.5 19.5V9H4.5Z" fill="#8A8A8E"/><path d="M14.625 4.875V8.25C14.625 8.66421 14.9608 9 15.375 9C15.7892 9 16.125 8.66421 16.125 8.25V4.875C16.125 3.16637 14.9168 1.95818 14.9168 1.95818C13.7086 0.75 12 0.75 12 0.75C10.2914 0.75 9.08319 1.95818 9.08319 1.95818C7.875 3.16637 7.875 4.875 7.875 4.875V8.25C7.875 8.66421 8.21079 9 8.625 9C9.03921 9 9.375 8.66421 9.375 8.25V4.875C9.375 3.78769 10.1438 3.01884 10.1438 3.01884C10.9127 2.25 12 2.25 12 2.25C13.0873 2.25 13.8562 3.01884 13.8562 3.01884C14.625 3.78769 14.625 4.875 14.625 4.875Z" fill="#8A8A8E"/></svg>
                }
                rightIcon={ <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-[18px] h-[18px] ${showPassword ? "" : ""}`}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.26408 6.66615C1.57529 6.4126 2.03769 6.45387 2.29687 6.75831C4.01035 8.77104 7.1184 11.2826 12 11.2826C16.8815 11.2826 19.9895 8.77106 21.703 6.75833C21.9622 6.45389 22.4246 6.41263 22.7358 6.66617C23.047 6.91972 23.0892 7.37206 22.83 7.67651C22.3016 8.29723 21.6469 8.96667 20.8577 9.60857C20.9001 9.65503 20.937 9.7077 20.9669 9.7661L22.9224 13.5921C23.1035 13.9465 22.9567 14.3774 22.5945 14.5546C22.2322 14.7318 21.7917 14.5881 21.6106 14.2338L19.6856 10.4674C18.4652 11.2689 16.9983 11.959 15.2651 12.3565L16.1412 16.6418C16.2206 17.0303 15.9631 17.4082 15.5659 17.4859C15.1688 17.5636 14.7825 17.3117 14.703 16.9232L13.8209 12.6086C13.2402 12.6793 12.6334 12.7173 12 12.7173C11.3665 12.7173 10.7597 12.6793 10.1789 12.6086L9.29684 16.9232C9.21741 17.3117 8.83107 17.5636 8.43393 17.4859C8.03679 17.4082 7.77924 17.0303 7.85866 16.6418L8.73478 12.3564C7.30485 12.0285 6.0562 11.5014 4.97768 10.8769L2.32003 14.3434C2.07703 14.6603 1.61738 14.7246 1.29337 14.4869C0.96937 14.2491 0.903705 13.7995 1.14671 13.4825L3.75501 10.0804C2.6858 9.30207 1.8295 8.45132 1.16987 7.67649C0.910686 7.37204 0.952866 6.9197 1.26408 6.66615Z"
                      fill="#8A8A8E"
                    />
                  </svg>}
              sx={{ mb: 2 }}
            />
          </Box>

          {/* Remember me and Forgot Password */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Checkbox sx={{ p: 0.5 }} />
              <Typography variant="body2" color="text.primary">Remember me</Typography>
            </Box>
            <Button variant="text" color="inherit" sx={{ fontSize: 14, textTransform: 'none' }}>
              Forgot Password
            </Button>
          </Box>

          {/* Login Button */}
          <Button
            fullWidth
            variant="contained"
            sx={{ height: 40, fontWeight: 700, borderRadius: 3, bgcolor: '#7DA89B', color: '#fff', my: 2, ':hover': { bgcolor: 'grey.500' } }}
          >
            Login
          </Button>

          {/* Divider */}
          <Box sx={{ display: 'flex', alignItems: 'center', my: 3 }}>
            <Divider sx={{ flex: 1, opacity: 0.25, bgcolor: 'grey.500' }} />
            <Typography sx={{ mx: 2, color: 'text.secondary', fontSize: 14 }}>Or</Typography>
            <Divider sx={{ flex: 1, opacity: 0.25, bgcolor: 'grey.500' }} />
          </Box>

          {/* Social Login */}
          {/* <SocialLogin /> */}

          {/* Register Prompt */}
          <Box mt={3} textAlign="center">
            <Typography variant="body2" color="text.primary" component="span">
              Don't have an account?{' '}
            </Typography>
            <Button variant="text" sx={{ fontWeight: 700, color: 'grey.400', fontSize: 14, textTransform: 'none' }}>
              Register Now
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Login1;

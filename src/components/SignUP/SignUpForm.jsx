"use client";
import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  Stack,
  ThemeProvider,
  styled,
  InputAdornment,
  Tooltip,
  IconButton,
} from "@mui/material";
import {
  Person,
  Email,
  Lock,
  InfoOutlined,
  MailOutline,
  Visibility,
} from "@mui/icons-material";
import { FormInput } from "./FormInput";
import { theme } from "./theme";
import { InputField } from "../Login/InputField";
import { InfoTooltip } from "./InfoTooltip";

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  overflow: "hidden",
  borderRadius: "0.75rem",
  border: `1px solid ${theme.palette.grey[200]}`,
  maxWidth: "1008px",
  width: "100%",
}));

const ImageSection = styled(Box)(({ theme }) => ({
  width: "376px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const FormSection = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(5),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2.5),
  },
}));

export const SignUpForm = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          bgcolor: "grey.100",
          px: 2.5,
          py: 5,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <StyledPaper elevation={0}>
            <ImageSection>
              <Box
                component="img"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2684ee322871dc837ec15f6422dc2cc93251d976"
                alt=""
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "0.75rem 0 0 0.75rem",
                }}
              />
            </ImageSection>

            <FormSection>
              <Stack spacing={3}>
                <Box>
                  <Typography variant="h2" gutterBottom>
                    Create Your account
                  </Typography>
                  <Typography variant="body1">
                    Welcome to Perfect Wedding Planner, Please create an account
                    to continue
                  </Typography>
                </Box>

                <Stack spacing={2.5}>
                  <InputField placeholder="Name" leftIcon={<Person />} />

                  <InputField
                    type="email"
                    placeholder="Email"
                    leftIcon={<Email />}
                  />

                  <InputField
                    type="password"
                    placeholder="Password"
                    showPasswordToggle
                    leftIcon={<Lock />}
                    rightIcon={<Visibility />}
                  />

                  <InputField
                    type="password"
                    placeholder="Confirm Password"
                    showPasswordToggle
                    leftIcon={<Lock />}
                  />

                  <Box>
                    <Stack
                      direction="row"
                      spacing={1}
                      alignItems="center"
                      mb={2}
                    >
                      <Typography variant="h3">
                        Do you have any invitation code?
                      </Typography>
                      <Tooltip
                        componentsProps={{
                          tooltip: {
                            sx: {
                              bgcolor: "#CEEAE1",
                              color: "black",
                              fontSize: "14px",
                              borderRadius: "8px",
                              boxShadow: 3,
                            },
                          },
                        }}
                        title={
                          <div style={{display:'flex',gap:'10px'}}>
                            <InfoIcon fontSize="small" />
                            <span>
                              It is a long established fact that a reader will
                              be distracted by the main readable content.
                            </span>{" "}
                          </div>
                        }
                        arrow
                      >
                        <IconButton size="small">
                          <InfoOutlined
                            sx={{ fontSize: 12, color: "primary.main" }}
                          />
                        </IconButton>
                      </Tooltip>
                    </Stack>

                    <InputField
                      placeholder="Invite Code"
                      leftIcon={<MailOutline />}
                    />
                  </Box>

                  <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    sx={{
                      mt: 4,
                      bgcolor: "grey.300",
                      "&:hover": {
                        bgcolor: "grey.400",
                      },
                    }}
                  >
                    Continue
                  </Button>
                </Stack>
              </Stack>
            </FormSection>
          </StyledPaper>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

const InfoIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0, marginTop: 2 }}
  >
    <path
      d="M8.94886 1.63623C7.50258 1.63623 6.08878 2.0651 4.88625 2.86861C3.68371 3.67212 2.74645 4.81417 2.19299 6.15036C1.63952 7.48654 1.49471 8.95684 1.77686 10.3753C2.05902 11.7938 2.75547 13.0968 3.77814 14.1194C4.80081 15.1421 6.10377 15.8386 7.52226 16.1207C8.94074 16.4029 10.411 16.2581 11.7472 15.7046C13.0834 15.1511 14.2255 14.2139 15.029 13.0113C15.8325 11.8088 16.2614 10.395 16.2614 8.94873C16.2576 7.01048 15.486 5.15267 14.1155 3.78212C12.7449 2.41156 10.8871 1.63995 8.94886 1.63623ZM8.80823 5.01123C8.97511 5.01123 9.13824 5.06072 9.27699 5.15343C9.41575 5.24614 9.52389 5.37792 9.58775 5.53209C9.65162 5.68627 9.66832 5.85592 9.63577 6.01959C9.60321 6.18326 9.52285 6.3336 9.40485 6.4516C9.28685 6.5696 9.13651 6.64996 8.97284 6.68252C8.80917 6.71507 8.63952 6.69837 8.48534 6.6345C8.33117 6.57064 8.19939 6.4625 8.10668 6.32374C8.01397 6.18499 7.96448 6.02186 7.96448 5.85498C7.96448 5.6312 8.05338 5.41659 8.21161 5.25836C8.36984 5.10013 8.58445 5.01123 8.80823 5.01123ZM9.51136 12.8862H8.94886C8.79967 12.8862 8.6566 12.827 8.55111 12.7215C8.44562 12.616 8.38636 12.4729 8.38636 12.3237V8.94873C8.23717 8.94873 8.0941 8.88947 7.98861 8.78398C7.88312 8.67849 7.82386 8.53541 7.82386 8.38623C7.82386 8.23705 7.88312 8.09397 7.98861 7.98848C8.0941 7.88299 8.23717 7.82373 8.38636 7.82373H8.94886C9.09804 7.82373 9.24111 7.88299 9.3466 7.98848C9.45209 8.09397 9.51136 8.23705 9.51136 8.38623V11.7612C9.66054 11.7612 9.80361 11.8205 9.9091 11.926C10.0146 12.0315 10.0739 12.1745 10.0739 12.3237C10.0739 12.4729 10.0146 12.616 9.9091 12.7215C9.80361 12.827 9.66054 12.8862 9.51136 12.8862Z"
      fill="#FCB6CA"
    />
  </svg>
);

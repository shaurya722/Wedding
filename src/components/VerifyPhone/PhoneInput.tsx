import * as React from "react";
import { Box, MenuItem, Select, TextField } from "@mui/material";
import { InputField } from "../Login/InputField";

const countries = [
  {
    code: "US",
    label: "United States",
    phone: "1",
    flag: "https://flagcdn.com/us.svg",
  },
  {
    code: "IN",
    label: "India",
    phone: "91",
    flag: "https://flagcdn.com/in.svg",
  },
];

function PhoneInput() {
  const [selected, setSelected] = React.useState(countries[0]);
  return (
    <Box
      sx={{
        display: "flex",
        gap: 0.75,
        mt: 3,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
     <Select
      value={selected.code}
      onChange={(e) => {
        const selectedCountry = countries.find(
          (c) => c.code === e.target.value
        );
        if (selectedCountry) {
        setSelected(selectedCountry);
        }
      }}
      displayEmpty
      sx={{
        pl: 0,
        height: "45px",
        borderRadius: "12px",
        bgcolor: "#fafafa",
        width: "120px",
      }}
      renderValue={() => (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            px: 1.75,
          }}
        >
          <Box
            component="img"
            src={selected.flag}
            alt="Country flag"
            sx={{
              width: "26px",
              height: "22px",
              borderRadius: "2px",
              mr: 1,
            }}
          />
          +{selected.phone}
        </Box>
      )}
    >
      {countries.map((country) => (
        <MenuItem key={country.code} value={country.code}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={country.flag}
              alt={country.label}
              style={{
                width: 20,
                height: 16,
                borderRadius: 2,
                marginRight: 8,
              }}
            />
            {country.label} (+{country.phone})
          </Box>
        </MenuItem>
      ))}
    </Select>
      <Box sx={{ flex: 1 }}>
        <InputField
          type="number"
          placeholder="Phone Number"
         
        />
      </Box>
    </Box>
  );
}

export default PhoneInput;

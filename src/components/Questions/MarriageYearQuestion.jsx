"use client";
import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import QuestionHeader from "./QuestionHeader";
import RadioOption from "./RadioOption";
import ActionButtons from "./ActionButtons";

const MarriageYearQuestion = () => {
  const [selectedYear, setSelectedYear] = useState("");

  const yearOptions = ["2024", "2025", "2026", "Other"];

  const handleYearSelect = (year) => {
    setSelectedYear(year);
  };

  const handleNext = () => {
    console.log("Selected year:", selectedYear);
  };

  const handleSkip = () => {
    console.log("User skipped this question");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        bgcolor: "#F8F8F8",
        padding:'20px'
      }}
    >
        
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: '30px',
          justifyContent: "center",
          alignItems: "center",
          p: { xs: '20px', md: '40px', lg: '40px' },
          bgcolor: "white",
          border: '10px',
          width: { xs: "100%", sm: "100%", md: "600px", lg: "750px" }
        }}
      >
        <QuestionHeader
          title="In which year do you plan to get married?"
          description="Tell us your date of marriage or if not sure, click on skip button"
        />
        <Box sx={{ width: "100%", height: "1px", bgcolor: "grey.300" }} />

        <Box sx={{ display: "flex", flexDirection: "column", gap: '20px', width: "100%" }}>
          {yearOptions.map((year) => (
            <RadioOption
              key={year}
              year={year}
              isSelected={selectedYear === year}
              onSelect={() => handleYearSelect(year)}
            />
          ))}
        </Box>

        <Box sx={{ width: "100%", height: "1px", bgcolor: "grey.300" }} />

        <ActionButtons
          onSkip={handleSkip}
          onNext={handleNext}
        />
      </Box>
    </Box>
  );
};

export default MarriageYearQuestion;

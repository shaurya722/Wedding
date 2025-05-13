"use client";
import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import QuestionHeader from "../Questions/QuestionHeader";
import RadioOption from "../Questions/RadioOption";
import ActionButtons from "../Questions/ActionButtons";

const MarriageQuestionImg = () => {
  const [selectedYear, setSelectedYear] = useState("");

  const yearOptions = ["2024"];

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
        <img src='src/assets/Add tasks-pana 1.svg' width={155} height={155}/> 
        <QuestionHeader
          title="When do you plan on getting married?"
          description="Lets us know your wedding date or simply skip the question."
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

export default MarriageQuestionImg;

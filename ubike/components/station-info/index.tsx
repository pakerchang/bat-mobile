"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import SearchBar from "./SearchBar";
import LocationList from "./LocationList";

function StationInfo() {
  return (
    <Box display="flex" flexDirection="column" px="124px">
      <Box my="32px">
        <Typography color="primary" sx={{ fontSize: "24px", fontWeight: 700 }}>
          站點資訊
        </Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <SearchBar />
      </Box>
      <Box>
        <LocationList />
      </Box>
    </Box>
  );
}

export default StationInfo;

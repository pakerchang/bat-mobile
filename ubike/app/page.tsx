"use client";
import React, { useState } from "react";
import { Box } from "@mui/material";
import Header from "@/components/shared/header";
import StationInfo from "@/components/station-info";
import taipeiData from "./assets/station-info/ubike.json";

interface FilterDataType {
  city: string;
  area: string;
  rentBike: number; // sbi
  emptPosition: number; // bemp
  stationActive: boolean; // act
}

export default function Home() {
  console.log(taipeiData[0]);
  return (
    <Box display="flex" flexDirection="column" width="100vw" height="100vh">
      <Header />
      <StationInfo />
    </Box>
  );
}

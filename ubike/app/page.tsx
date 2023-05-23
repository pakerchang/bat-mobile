"use client";
import React from "react";
import { Box } from "@mui/material";
import Header from "@/components/shared/header";
import StationInfo from "@/components/station-info";
import Data from "./assets/station-info/ubike.json";
import useTaipeiData from "./hooks/useTaipeiData";

export default function Home() {
  const taipeiData = useTaipeiData(Data);

  return (
    <Box display="flex" flexDirection="column" width="100vw" height="100vh">
      <Header />
      <StationInfo data={taipeiData} />
    </Box>
  );
}

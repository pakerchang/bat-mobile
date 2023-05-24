"use client";
import React from "react";
import { Box } from "@mui/material";
import Header from "@/components/shared/header";
import StationInfo from "@/components/station-info";
import Data from "./assets/station-info/ubike.json";
import useTaipeiData from "./hooks/useTaipeiData";

const cities: string[] = [
  "台北市",
  "新北市",
  "桃園市",
  "新竹市",
  "新竹縣",
  "苗栗縣",
  "嘉義市",
  "台南市",
  "高雄市",
  "屏東縣",
  "金門縣",
];

export default function Home() {
  const taipeiData = useTaipeiData(Data);

  return (
    <Box display="flex" flexDirection="column" width="100vw" height="100vh">
      <Header />
      <StationInfo cities={cities} data={taipeiData} />
    </Box>
  );
}

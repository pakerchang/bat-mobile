"use client";
import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import SearchBar from "./SearchBar";
import AreaList from "./AreaList";
import StationTable from "./StationTable";
import { NewDataType } from "../types";

interface StationInfoProps {
  cities: string[];
  data: NewDataType[];
}

function StationInfo({ cities, data }: StationInfoProps) {
  const theme = useTheme();
  return (
    <Box display="flex" flexDirection="column" sx={{ px: "124px", [theme.breakpoints.down("md")]: { px: "32px" } }}>
      <Box my="32px">
        <Typography color="primary" sx={{ fontSize: "24px", fontWeight: 700 }}>
          站點資訊
        </Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <SearchBar cities={cities} areaData={data} />
      </Box>
      <Box mb="40px">
        <AreaList data={data} />
      </Box>
      <Box mb="44px">
        <StationTable data={data} />
      </Box>
    </Box>
  );
}

export default StationInfo;

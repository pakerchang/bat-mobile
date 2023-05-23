"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import SearchBar from "./SearchBar";
import AreaList from "./AreaList";
import jsonData from "../../app/assets/station-info/ubike.json";

interface StationInfoProps<T> {
  data: T;
}

function StationInfo<T>({ data }: StationInfoProps<T>) {
  console.log(data, "stations");
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
        <AreaList data={data} />
      </Box>
    </Box>
  );
}

export default StationInfo;

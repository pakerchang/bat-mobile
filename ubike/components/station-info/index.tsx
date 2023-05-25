"use client";
import React, { useState, useEffect } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import SearchBar from "./SearchBar";
import AreaList from "./AreaList";
import StationTable from "./StationTable";
import { NewDataType } from "../types";

interface StationInfoProps {
  cities: string[];
  data: NewDataType[];
}

type FnCityType = (city: string) => void;

type FnAreaListType = (newData?: NewDataType[], checkboxIdx?: number, selectAll?: boolean) => void;

function StationInfo({ cities, data }: StationInfoProps) {
  const theme = useTheme();
  const [tableData, setTableData] = useState<NewDataType[]>([]);

  const handleCitySearch: FnCityType = (city) => {

  };

  const handleAreaListSelect: FnAreaListType = (newData, checkboxIdx, selectAll) => {
    if (selectAll && typeof newData !== "undefined") {
      const tempData = newData.map((item) => ({ ...item, area: { ...item.area, checked: true } }));
      setTableData(tempData);
    }

    if (newData && typeof checkboxIdx !== "undefined") {
      const tempData = newData.map((item, idx) =>
        idx === checkboxIdx ? { ...item, area: { ...item.area, checked: !item.area.checked } } : item
      );

      setTableData(tempData);
    }
  };

  useEffect(() => {
    if (data.length !== 0) setTableData(data);
  }, [data]);

  return (
    <Box display="flex" flexDirection="column" sx={{ px: "124px", [theme.breakpoints.down("md")]: { px: "32px" } }}>
      <Box my="32px">
        <Typography color="primary" sx={{ fontSize: "24px", fontWeight: 700 }}>
          站點資訊
        </Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <SearchBar cities={cities} areaData={tableData} handleSearch={handleCitySearch} />
      </Box>
      <Box mb="40px">
        <AreaList data={tableData} handleList={handleAreaListSelect} />
      </Box>
      <Box mb="44px">
        <StationTable data={tableData} />
      </Box>
    </Box>
  );
}

export default StationInfo;

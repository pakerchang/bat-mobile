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
    console.log(city);
  };

  const handleStationSearch = (searchIdx: number): void => {
    if (typeof searchIdx === "number") {
      const tempData = tableData.map((item, index) =>
        index === searchIdx ? item : { ...item, area: { ...item.area, checked: false }, areaData: [] }
      );
      setTableData(tempData);
    }
  };

  const handleAreaListSelect: FnAreaListType = (newData, checkboxIdx, selectAll) => {
    if (selectAll && typeof newData !== "undefined") {
      setTableData(data);
      return;
    }

    if (!selectAll && typeof newData !== "undefined") {
      const tempData = newData.map((item) => ({ ...item, area: { ...item.area, checked: false }, areaData: [] }));
      setTableData(tempData);
    }

    if (newData && typeof checkboxIdx !== "undefined") {
      const tempData = newData.map((item, idx) =>
        idx === checkboxIdx
          ? {
              ...item,
              area: { ...item.area, checked: !item.area.checked },
              areaData: !item.area.checked && item.areaData.length === 0 ? data[idx].areaData : [],
            }
          : item
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
        <SearchBar
          cities={cities}
          areaData={tableData}
          handleCitySearch={handleCitySearch}
          handleStationSearch={handleStationSearch}
        />
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

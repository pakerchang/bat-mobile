"use client";
import React, { useState } from "react";
import { Box, Select, FormControl, InputLabel, MenuItem, Autocomplete, TextField } from "@mui/material";
import { NewDataType } from "../shared/types/index";

interface SearchBarProps<T> {
  city: string[];
  areaData: NewDataType;
  handleSearch: () => T[];
}

function SearchBar<T>({ city, areaData }: SearchBarProps) {
  const [selectData, setSelectData] = useState<NewDataType[]>(areaData);

  const comboSearch = () => {
    // handling select to update Autocomplete
  };
  return (
    <Box display="flex" mb="32px">
      <FormControl sx={{ width: "175px", height: "40px" }}>
        <InputLabel id="search-city">選擇縣市</InputLabel>
        <Select labelId="search-city"></Select>
      </FormControl>
      <Autocomplete
        id="search-station"
        options={areaData}
        getOptionLabel={(option) => option.area}
        renderOption={(props, option) => (
          <li {...props} key={option.area}>
            {option.area}
          </li>
        )}
        renderInput={(params) => <TextField {...params} label="搜尋站點" />}
        // disabled={!selectionData?.area && true}
        sx={{ width: "277px", height: "40px", marginLeft: "16px" }}
      />
    </Box>
  );
}

export default SearchBar;

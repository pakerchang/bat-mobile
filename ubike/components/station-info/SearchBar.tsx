"use client";
import React, { useState } from "react";
import {
  Box,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Autocomplete,
  TextField,
  SelectChangeEvent,
} from "@mui/material";
import { NewDataType } from "../types";

interface SearchBarProps<T> {
  cities: string[];
  areaData: NewDataType;
  handleSearch: () => T[];
}

function SearchBar<T>({ cities, areaData }: SearchBarProps<T>) {
  const [selectData, setSelectData] = useState<NewDataType[]>(areaData);
  const [selectCity, setCity] = useState("");

  const onSelectCity = (e: SelectChangeEvent) => setCity(e.target.value);

  const comboSearch = () => {
    // handling select to update Autocomplete
  };
  return (
    <Box display="flex" mb="32px">
      <FormControl sx={{ width: "175px", height: "40px" }}>
        <InputLabel id="search-city">選擇縣市</InputLabel>
        <Select labelId="search-city" label="選擇縣市" value={selectCity} onChange={onSelectCity}>
          {cities.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
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
        disabled={!selectData && true}
        sx={{ width: "277px", height: "40px", marginLeft: "16px" }}
      />
    </Box>
  );
}

export default SearchBar;

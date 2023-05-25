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
  useTheme,
} from "@mui/material";
import { NewDataType } from "../types";

interface SearchBarProps<T> {
  cities: string[];
  areaData: NewDataType[];
  handleSearch: (city: string) => void;
}

function SearchBar<T>({ cities, areaData, handleSearch }: SearchBarProps<T>) {
  const theme = useTheme();
  const [selectData, setSelectData] = useState<NewDataType[]>(areaData);
  const [selectCity, setCity] = useState("");

  const onSelectCity = (e: SelectChangeEvent) => {
    setCity(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <Box
      display="flex"
      mb={theme.breakpoints.down("sm") ? "24px" : "32px"}
      sx={{
        [theme.breakpoints.down("sm")]: {
          height: "116px",
          flexDirection: "column-reverse",
          alignItems: "center",
          justifyContent: "flex-end",
        },
      }}
    >
      <FormControl
        sx={{
          width: "175px",
          height: "40px",
          [theme.breakpoints.down("sm")]: { width: "311px", marginTop: "30px" },
        }}
      >
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
        getOptionLabel={(option) => option.area.name}
        renderOption={(props, option) => (
          <li {...props} key={option.area.name}>
            {option.area.name}
          </li>
        )}
        renderInput={(params) => <TextField {...params} label="搜尋站點" />}
        disabled={!selectData && true}
        sx={{
          width: "277px",
          height: "40px",
          marginLeft: "16px",
          [theme.breakpoints.down("sm")]: { width: "311px", marginLeft: "0px" },
        }}
      />
    </Box>
  );
}

export default SearchBar;

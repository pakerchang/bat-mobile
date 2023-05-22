"use client";
import React, { useState } from "react";
import { Box, Select, FormControl, InputLabel, MenuItem, Autocomplete, TextField } from "@mui/material";

type SelectionDataType<T> = {
  city: T[];
  stations: T[];
};

function SearchBar<T>({ data }: { data: T[] }) {
  const [selectionData, setSelectionData] = useState<SelectionDataType<unknown>>(data);

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
        options={selectionData?.stations}
        renderInput={(params) => <TextField {...params} label="搜尋站點" />}
        disabled={!selectionData?.stations && true}
        sx={{ width: "277px", height: "40px", marginLeft: "16px" }}
      />
    </Box>
  );
}

export default SearchBar;

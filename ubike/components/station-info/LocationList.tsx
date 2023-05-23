import React from "react";
import Image from "next/image";
import Banner from "@/app/assets/banner.png";
import { Box, Grid, Checkbox, FormGroup, FormControlLabel } from "@mui/material";

function LocationList<T>({ data }: { data: T[] }) {
  // 行政區資料
  return (
    <Box display="flex" justifyContent="space-around">
      <FormGroup>
        <FormControlLabel label="全部勾選" control={<Checkbox />} color="primary" />
        <Grid>
          {data?.map((item) => (
            <FormControlLabel key={item?.name} label={item?.name} control={<Checkbox />} color="primary" />
          ))}
        </Grid>
      </FormGroup>
      <Box>
        <Image src={Banner} alt="banner" />
      </Box>
    </Box>
  );
}

export default LocationList;

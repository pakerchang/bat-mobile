import React from "react";
import Image from "next/image";
import Banner from "@/app/assets/banner.png";
import { Box, Grid } from "@mui/material";

function LocationList() {
  return (
    <Box display="flex" justifyContent="space-around">
      <Grid>Checklist</Grid>
      <Box>
        <Image src={Banner} alt="banner" />
      </Box>
    </Box>
  );
}

export default LocationList;

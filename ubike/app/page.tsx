"use client";
import { Box } from "@mui/material";
import Header from "@/components/shared/header";
import StationInfo from "@/components/station-info";

export default function Home() {
  return (
    <Box display="flex" flexDirection="column" width="100vw" height="100vh">
      <Header />
      <StationInfo />
    </Box>
  );
}

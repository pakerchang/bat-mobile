import React from "react";
import Image from "next/image";
import { AppBar, Box } from "@mui/material";
import Logo from "@/app/assets/logo.png";

function Header() {
  return (
    <Box sx={{ diasplay: "flex" }}>
      <AppBar component="nav">
        <Image src={Logo} alt="logo" />
      </AppBar>
    </Box>
  );
}

export default Header;

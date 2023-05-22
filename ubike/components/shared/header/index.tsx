import React from "react";
import Image from "next/image";
import { AppBar, Box, Toolbar, Typography, Link, Drawer, Button } from "@mui/material";
import Logo from "@/app/assets/logo.png";

const navbarList = ["使用說明", "收費方式", "站點資訊", "最新消息", "活動專區"];

function Header() {
  return (
    <Box display="flex" width="100%">
      <AppBar
        component="nav"
        position="sticky"
        sx={{ backgroundColor: "#fff", padding: "0 124px", boxShadow: "none", borderBottom: "1px solid #EBEBEB" }}
      >
        <Toolbar>
          <Box sx={{ margin: "6px 50px 0 0" }}>
            <Image src={Logo} alt="logo" />
          </Box>
          <Box display="flex" width="80%" height="100%" alignItems="center">
            {navbarList.map((item) => (
              <Link
                key={item}
                sx={(theme) => ({
                  cursor: "pointer",
                  color: theme.palette.secondary.main,
                  textDecoration: "none",
                  marginLeft: "40px",
                  "&:hover": {
                    color: theme.palette.primary.main,
                  },
                })}
              >
                <Typography sx={{ fontSize: "18px" }}>{item}</Typography>
              </Link>
            ))}
          </Box>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            sx={{ width: "85px", height: "40px", borderRadius: "100px" }}
          >
            <Typography color="white" align="center">
              登入
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer></Drawer>
      </Box>
    </Box>
  );
}

export default Header;

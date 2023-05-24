import React, { useState } from "react";
import Image from "next/image";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Link,
  Drawer,
  Button,
  List,
  ListItem,
  Hidden,
  useTheme,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "@/app/assets/logo.png";

const navbarList = ["使用說明", "收費方式", "站點資訊", "最新消息", "活動專區"];

function Header() {
  const [drawer, setDrawer] = useState(false);
  const theme = useTheme();

  const handleDrawer = () => setDrawer(!drawer);

  return (
    <Box display="flex" width="100%">
      <AppBar
        component="nav"
        position={theme.breakpoints.up("md") ? "sticky" : "fixed"}
        sx={{
          width: "100vw",
          backgroundColor: "#fff",
          padding: "0 124px",
          boxShadow: "none",
          borderBottom: "1px solid #EBEBEB",
          [theme.breakpoints.down("md")]: { padding: "0px 0px 0px 0px", height: "72px", zIndex: 1300 },
        }}
      >
        <Toolbar sx={{ [theme.breakpoints.down("md")]: { justifyContent: "space-between" } }}>
          <Box
            sx={{
              margin: "6px 50px 0 0",
              [theme.breakpoints.down("md")]: { margin: "6px 0px" },
            }}
          >
            <Image
              src={Logo}
              alt="logo"
              width={theme.breakpoints.down("md") ? 65 : 95}
              height={theme.breakpoints.down("md") ? 65 : 95}
            />
          </Box>

          <Hidden smDown>
            <Box display="flex" width="80%" height="100%" alignItems="center">
              {navbarList.map((item) => (
                <Link
                  key={item}
                  sx={{
                    cursor: "pointer",
                    color: theme.palette.secondary.main,
                    textDecoration: "none",
                    marginLeft: "40px",
                    "&:hover": {
                      color: theme.palette.primary.main,
                    },
                    [theme.breakpoints.down("md")]: { marginLeft: "20px" },
                  }}
                >
                  <Typography sx={{ fontSize: "18px", [theme.breakpoints.down("md")]: { fontSize: "14px" } }}>
                    {item}
                  </Typography>
                </Link>
              ))}
            </Box>
            <Button
              variant="contained"
              color="primary"
              size="medium"
              sx={{ width: "85px", height: "40px", borderRadius: "100px" }}
            >
              <Typography
                color="white"
                align="center"
                sx={{
                  fontSize: "18px",
                  [theme.breakpoints.down("lg")]: { fontSize: "14px" },
                }}
              >
                登入
              </Typography>
            </Button>
          </Hidden>

          <Hidden smUp>
            <IconButton aria-label="open drawer" onClick={handleDrawer}>
              {!drawer ? <MenuIcon color="primary" /> : <CloseIcon color="primary" />}
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          hideBackdrop
          variant="temporary"
          anchor="top"
          open={drawer}
          onClose={handleDrawer}
          sx={{ height: "100%" }}
          PaperProps={{ sx: { height: "100%", bgcolor: theme.palette.primary.main, marginTop: "72px" } }}
        >
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              paddingTop: "32px",
              width: "100%",
            }}
          >
            {navbarList.map((item) => (
              <ListItem key={item}>
                <Link
                  sx={{
                    cursor: "pointer",
                    color: "white",
                    textDecoration: "none",
                    marginLeft: "32px",
                    marginBottom: "32px",
                    "&:hover": {
                      color: theme.palette.secondary.main,
                    },
                    [theme.breakpoints.down("md")]: { marginLeft: "20px" },
                  }}
                >
                  <Typography fontSize="18px" fontWeight="500">
                    {item}
                  </Typography>
                </Link>
              </ListItem>
            ))}
            <ListItem>
              <Button
                variant="contained"
                color="inherit"
                size="medium"
                sx={{ width: "85px", height: "40px", borderRadius: "100px", marginLeft: "15px" }}
              >
                <Typography color="primary" align="center" fontSize="16px">
                  登入
                </Typography>
              </Button>
            </ListItem>
          </List>
        </Drawer>
      </Box>
    </Box>
  );
}

export default Header;

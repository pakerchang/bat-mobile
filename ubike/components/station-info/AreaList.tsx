import React from "react";
import Image from "next/image";
import Banner from "@/app/assets/banner.png";
import { Box, Grid, Checkbox, FormGroup, FormControlLabel, Typography, Hidden, useTheme } from "@mui/material";
import { StationDataType } from "../types";

interface AreaListProps {
  selectAll: boolean;
  data: StationDataType[];
  handleList: (data?: StationDataType[], checkboxIdx?: number, selectAll?: boolean) => void;
}

function AreaList({ selectAll, data, handleList }: AreaListProps) {
  const theme = useTheme();
  const handleSelect = (idx: number) => {
    const checkStatus = data.every((item) => item.area.checked);
    if (checkStatus) return handleList(data, idx);

    handleList(data, idx);
  };
  const handleSelectAll = () => {
    if (selectAll === false) handleList(data, undefined, true);
    else handleList(data, undefined, false);
  };

  return (
    <>
      {data.length === 0 ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt={theme.breakpoints.up("sm") ? "250px" : "50px"}
        >
          <Typography variant="h3">暫無資料</Typography>
        </Box>
      ) : (
        <Box display="flex" justifyContent="space-between">
          <FormGroup>
            <Box>
              <FormControlLabel
                label="全部勾選"
                control={<Checkbox />}
                color="primary"
                checked={selectAll}
                onChange={handleSelectAll}
              />
            </Box>
            <Grid container sx={{ width: "500px", [theme.breakpoints.down("md")]: { width: "311px" } }}>
              {data.map((item, idx) => (
                <Grid item sm={3} xs={4} key={item.area.name}>
                  <FormControlLabel
                    label={<Typography noWrap>{item.area.name}</Typography>}
                    control={<Checkbox checked={item.area.checked} onChange={(e) => handleSelect(idx)} />}
                    color="primary"
                  />
                </Grid>
              ))}
            </Grid>
          </FormGroup>
          <Hidden lgDown>
            <Box alignSelf="flex-end" mr="86px">
              <Image src={Banner} alt="banner" />
            </Box>
          </Hidden>
        </Box>
      )}
    </>
  );
}

export default AreaList;

import React, { useState } from "react";
import Image from "next/image";
import Banner from "@/app/assets/banner.png";
import { Box, Grid, Checkbox, FormGroup, FormControlLabel, Typography, Hidden, useTheme } from "@mui/material";
import { NewDataType } from "../types";

interface AreaListProps {
  data: NewDataType[];
  handleList: (data: NewDataType[], checkboxIdx: number, allSelect?: boolean) => void;
}

function AreaList({ data, handleList }: AreaListProps) {
  const theme = useTheme();
  const [selectAll, setSelectAll] = useState<boolean>(true);

  const handleSelect = (idx: number) => {
    const checkStatus = data.every((item) => item.area.checked);

    if (checkStatus) {
      setSelectAll(true);
      handleList(data, idx, true);
    } else setSelectAll(false);
    handleList(data, idx);
  };

  return (
    <>
      {data.length === 0 ? (
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography>暫無資料</Typography>
        </Box>
      ) : (
        <Box display="flex" justifyContent="space-between">
          <FormGroup>
            <Box>
              <FormControlLabel
                label="全部勾選"
                control={<Checkbox />}
                color="primary"
                defaultChecked
                checked={selectAll}
              />
            </Box>
            <Grid container sx={{ width: "500px", [theme.breakpoints.down("md")]: { width: "311px" } }}>
              {data.map((item, idx) => (
                <Grid item sm={3} xs={4} key={item.area.name}>
                  <FormControlLabel
                    label={<Typography noWrap>{item.area.name}</Typography>}
                    control={<Checkbox checked={selectAll && item.area.checked} onChange={(e) => handleSelect(idx)} />}
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

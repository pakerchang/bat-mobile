import React, { useState } from "react";
import Image from "next/image";
import Banner from "@/app/assets/banner.png";
import { Box, Grid, Checkbox, FormGroup, FormControlLabel, Typography } from "@mui/material";
import { NewDataType } from "../types";

interface AreaListProps {
  data: NewDataType[];
}

function AreaList({ data }: AreaListProps) {
  const [selectAll, setSelectAll] = useState<boolean>(true);
  const handleSelectAll = () => setSelectAll(!selectAll);

  return (
    <Box display="flex" justifyContent="space-between">
      <FormGroup>
        <FormControlLabel
          label="全部勾選"
          control={<Checkbox />}
          color="primary"
          checked={selectAll}
          onChange={handleSelectAll}
        />
        <Grid container width="500px" columnSpacing={3}>
          {data?.map((item) => (
            <Grid item sm={3} xs={4} key={item?.area}>
              <FormControlLabel
                label={<Typography noWrap>{item?.area}</Typography>}
                control={<Checkbox checked={selectAll && true} />}
                color="primary"
              />
            </Grid>
          ))}
        </Grid>
      </FormGroup>
      <Box alignSelf="flex-end" mr="68px">
        <Image src={Banner} alt="banner" />
      </Box>
    </Box>
  );
}

export default AreaList;

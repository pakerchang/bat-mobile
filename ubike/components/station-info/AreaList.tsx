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
    <Box width="100%" display="flex" justifyContent="space-between">
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
        <Grid container width="50%" columnSpacing={2}>
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
      <Box alignSelf="flex-end" width="50%" mr="86px">
        <Image src={Banner} alt="banner" />
      </Box>
    </Box>
  );
}

export default AreaList;

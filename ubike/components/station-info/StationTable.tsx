import React, { useState, useEffect } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableFooter,
  TableRow,
  TableCell,
  TablePagination,
  Typography,
  Paper,
} from "@mui/material";
import { NewDataType, FilterDataType } from "../types";

interface StationTableProps {
  data: NewDataType[];
}

const TableHeadContent: string[] = ["縣市", "區域", "站點名稱", "可借車輛", "可還空位"];

function StationTable({ data: data }: StationTableProps) {
  const [listData, setListData] = useState<FilterDataType[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handlePageChange = (e: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => setPage(newPage);

  const handleRowsPerPage = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    if (data) {
      let mergeAreaData: FilterDataType[] = [];
      data.forEach((item) => mergeAreaData.push(...item.areaData));
      setListData(mergeAreaData);
    }
  }, [data]);

  return (
    <TableContainer sx={{ borderRadius: "28px 28px 0 0" }}>
      <Table>
        <TableHead sx={{ bgcolor: "primary.main" }}>
          <TableRow>
            {TableHeadContent.map((item) => (
              <TableCell key={item} align="center">
                <Typography color="white" sx={{ fontSize: 18, fontWeight: 500 }}>
                  {item}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0 ? listData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : listData).map(
            (list, index: number) => (
              <TableRow key={list.stationsUID} sx={{ bgcolor: index % 2 === 0 ? "#f7f7f7" : "f5f5f5" }}>
                <TableCell align="center">
                  <Typography fontSize={16}>{list.city}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography fontSize={16}>{list.area}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography fontSize={16}>{list.stationsName}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography fontSize={16} fontWeight={700} color="primary">
                    {list.rentBike}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography fontSize={16} fontWeight={700} color="primary">
                    {list.emptyPosition}
                  </Typography>
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              count={listData.length}
              rowsPerPageOptions={[10, 25, 50]}
              page={page}
              rowsPerPage={rowsPerPage}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

export default StationTable;

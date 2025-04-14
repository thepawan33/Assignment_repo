import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { allStocks } from "../utils/allStockList";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

export default function StockListTable() {
  const headingStyle = { fontWeight: "550", fontSize: "large" };

  return (
    <>
      <p className="text-center text-4xl text-[#1f2937] font-semibold mb-20">
        All Stocks Overview
      </p>
      <TableContainer component={Paper} sx={{ maxHeight: 540 }}>
        <Table sx={{ minWidth: 650 }} stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell align="start" sx={headingStyle}>
                Stock Name
              </TableCell>
              <TableCell align="start" sx={headingStyle}>
                Current Price
              </TableCell>
              <TableCell align="start" sx={headingStyle}>
                Change
              </TableCell>
              <TableCell align="start" sx={headingStyle}>
                % Change
              </TableCell>
              <TableCell align="start" sx={headingStyle}>
                Sector
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allStocks?.map((stock) => {
              return (
                <TableRow>
                  <TableCell>
                    <img
                      src={stock.logo}
                      className="h-10 rounded-xl"
                      alt="logo"
                    />
                    {stock.name}
                  </TableCell>
                  <TableCell>
                    {" "}
                    <CurrencyRupeeIcon sx={{ fontSize: "15px" }} />
                    {stock.price.toLocaleString("en-in")}
                  </TableCell>
                  <TableCell
                    sx={stock.up ? { color: "green" } : { color: "red" }}
                  >
                    {stock.change}
                  </TableCell>
                  <TableCell
                    sx={stock.up ? { color: "green" } : { color: "red" }}
                  >
                    {stock.percent}
                  </TableCell>
                  <TableCell>{stock.sector}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

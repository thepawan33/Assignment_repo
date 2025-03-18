import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function ReportTable({ headings, datas }) {
  return (
    <TableContainer component={Paper} className="mb-2">
      <Table stickyHeader sx={{ minWidth: 400 }}>
        <TableHead>
          <TableRow sx={{ "& th": { backgroundColor: "#d1fae5" } }}>
            {headings.map((el, index) => {
              return (
                <TableCell
                  key={index}
                  sx={{ color: "#0c4a6e", fontWeight: "bold" }}
                >
                  {el}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>

        <TableBody>
          {datas &&
            datas.map((el) => (
              <TableRow
                key={el.type}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  backgroundColor: "#ffffff",
                }}
              >
                <TableCell>{el.type}</TableCell>
                <TableCell>{el.count}</TableCell>
                <TableCell>{el.percentage}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

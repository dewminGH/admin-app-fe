import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ITableProps } from "./types";
import Loader from "../loader";

const renderTableRow = (columNames: string[]) => {
  return columNames.map((cl, index) => {
    return <TableCell align={index !== 0 ? "right" : "left"}>{cl}</TableCell>;
  });
};

const renderTableRowList = (rowList: string[][]) => {
  return rowList.map((row, index) => {
    return (
      <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        {renderTableRow(row)}
      </TableRow>
    );
  });
};

const TableFrame: React.FC<ITableProps> = ({ columNames, tableBodyData, loading }) => {
  if (loading) {
    return <Loader />;
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>{renderTableRow(columNames)}</TableRow>
        </TableHead>
        <TableBody>{renderTableRowList(tableBodyData)}</TableBody>
      </Table>
    </TableContainer>
  );
};
export default TableFrame;

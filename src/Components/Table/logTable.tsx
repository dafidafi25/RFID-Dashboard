import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import getEnvVariable from "../../utils/getEnvVariable";
import useHistory from "react-router-dom";

interface LogTableInterface {
  id: number;
  user_id: string;
  status: number;
  waktu: string;
}
interface Response {
  data: LogTableInterface[];
}

export default function LogTable() {
  const [rows, setRows] = React.useState<LogTableInterface[]>([]);
  React.useEffect(() => {
    loadApi();
  }, []);

  const loadApi = async () => {
    const baseApi = await getEnvVariable();
    const dataLog: Response = await axios.get(`${baseApi}/rfid/get`);
    console.log(dataLog.data);
    setRows(dataLog.data);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">User ID</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Waktu</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                <a href={`/detail/${row.user_id}`}>{row.user_id}</a>
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {row.status == 1 ? "Masuk" : "Keluar"}
              </TableCell>
              <TableCell align="center">{row.waktu}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

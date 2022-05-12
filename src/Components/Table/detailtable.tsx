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
import { useParams } from "react-router-dom";

interface LogTableInterface {
  id: number;
  name: string;
  plate_number: string;
  phone: string;
  email: string;
  status: number;
  uid: string;
}
interface Response {
  data: LogTableInterface[];
}

export default function DetailTable() {
  const [rows, setRows] = React.useState<LogTableInterface[]>([]);

  const { id } = useParams();

  React.useEffect(() => {
    let isApiSubcribed = false;

    if (!isApiSubcribed) loadApi();

    return () => {
      isApiSubcribed = true;
    };
  }, []);

  const loadApi = async () => {
    const baseApi = await getEnvVariable();
    const dataLog: Response = await axios.get(`${baseApi}/rfid/get/${id}`);
    setRows(dataLog.data);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Nama</TableCell>
            <TableCell align="center">Pelat Nomor</TableCell>
            <TableCell align="center">Phone</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.name}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {row.plate_number}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {row.phone}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {row.email}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {row.status == 1 ? "Masuk" : "Keluar"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

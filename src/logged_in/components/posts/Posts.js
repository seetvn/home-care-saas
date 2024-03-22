import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

function createData(carerName,clientName,address,view) {
  return { carerName, clientName, address, view };
}

const rows = [
  createData('Sheldon Cooper','Demitrus Johnson','123 Avenue','/c/visit_profile'),
  createData('Patrick Bateman','Leroy Jenkins','321 Avenue','/c/profile'),
  createData('Victor Timely','Demitrus Johnson Jr','123 Avenue','/c/profile'),
  createData('Robert Henley','Michael Balzac','12 Hilburn','/c/profile')
];

export default function BasicTable() {
  return (
    <div>
      <h1>Upcoming visits</h1>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Carer</TableCell>
            <TableCell align="left">Client</TableCell>
            <TableCell align="left">Address</TableCell>
            <TableCell align="left">Visit Profile</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.carerName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {/* <TableCell component="th" scope="row">
                {row.carerName}
              </TableCell> */}
              <TableCell align="left">{row.carerName}</TableCell>
              <TableCell align="lef">{row.clientName}</TableCell>
              <TableCell align="left">{row.address}</TableCell>
              <TableCell align="left">
                <Link to= {row.view}>View details </Link>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

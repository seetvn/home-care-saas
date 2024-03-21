import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom'; // Import Link component from React Router


function createData(
  name,
  phoneNumber,
  emailAddress,
  homeAddress,
  ID
) {
  return { name, phoneNumber, emailAddress, homeAddress };
}

const rows = [
  createData('Alice Johnson', '+44 20 1234 5678', 'alice.johnson@example.com', '123 Main St, London, England', 'PAT001'),
  createData('Benjamin Smith', '+44 20 2345 6789', 'benjamin.smith@example.com', '456 Elm St, Brighton, England', 'PAT002'),
  createData('Charlotte Brown', '+44 20 3456 7890', 'charlotte.brown@example.com', '789 Oak St, Southampton, England', 'PAT003'),
  createData('Daniel Wilson', '+44 20 4567 8901', 'daniel.wilson@example.com', '012 Pine St, Portsmouth, England', 'PAT004'),
  createData('Emma Taylor', '+44 20 5678 9012', 'emma.taylor@example.com', '345 Maple St, Bristol, England', 'PAT005'),
  createData('Freya Clark', '+44 20 6789 0123', 'freya.clark@example.com', '678 Birch St, Plymouth, England', 'PAT006'),
  createData('George Wright', '+44 20 7890 1234', 'george.wright@example.com', '901 Cedar St, Exeter, England', 'PAT007'),
  createData('Hannah Thomas', '+44 20 8901 2345', 'hannah.thomas@example.com', '234 Oak St, Bournemouth, England', 'PAT008'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >Patient Name</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Email Address</TableCell>
            <TableCell align="right">Home Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
              <TableRow component={Link} to="/c/patientprofile"> {/* Add Link to profile page */} 
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.phoneNumber}</TableCell>
              <TableCell align="right">{row.emailAddress}</TableCell>
              <TableCell align="right">{row.homeAddress}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
import React from 'react';
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
  createData('John Doe', '+44 20 1234 5678', 'john.doe@example.com', '123 Main St, London, England', 'ABC123'),
  createData('Jane Smith', '+44 20 2345 6789', 'jane.smith@example.com', '456 Elm St, Brighton, England', 'DEF456'),
  createData('Michael Johnson', '+44 20 3456 7890', 'michael.johnson@example.com', '789 Oak St, Southampton, England', 'GHI789'),
  createData('Emily Brown', '+44 20 4567 8901', 'emily.brown@example.com', '012 Pine St, Portsmouth, England', 'JKL012'),
  createData('David Wilson', '+44 20 5678 9012', 'david.wilson@example.com', '345 Maple St, Bristol, England', 'MNO345'),
];


export default function BasicTable({ carersData }) {
  const combinedData = [...rows, ...carersData]; // Combine rows and carersData

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Carer Name</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Email Address</TableCell>
            <TableCell align="right">Home Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {combinedData.map((item, index) => (
            <TableRow key={index} component={Link} to="/c/profile"> {/* Add Link to profile page */}   <TableCell component="th" scope="row">
                {item.name} {/* Assuming either name or emailAddress exists */}
              </TableCell>
              <TableCell align="right">{item.phoneNumber}</TableCell>
              <TableCell align="right">{item.emailAddress}</TableCell>
              <TableCell align="right">{item.homeAddress}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

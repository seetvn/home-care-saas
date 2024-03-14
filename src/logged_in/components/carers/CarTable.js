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
  calories,
  fat,
  carbs,
  protein,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
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
            <TableCell align="right">ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {combinedData.map((item, index) => (
            <TableRow key={index} component={Link} to="/c/profile"> {/* Add Link to profile page */}   <TableCell component="th" scope="row">
                {item.name || item.emailAddress} {/* Assuming either name or emailAddress exists */}
              </TableCell>
              <TableCell align="right">{item.calories || item.phoneNumber}</TableCell>
              <TableCell align="right">{item.carbs || "fakemail@fakedomain.uk"}</TableCell>
              <TableCell align="right">{item.fat || item.homeAddress}</TableCell>
              <TableCell align="right">{item.protein || item.id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

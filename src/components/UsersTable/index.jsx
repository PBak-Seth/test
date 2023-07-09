import { Button, Box } from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export function UsersTable({ data, handleUserEdit, handleUserDelete }) {
  return (
    <Box
      sx={{
        p: 2,
        border: '1px solid grey',
        borderRadius: '5px',
        boxShadow: '0 0 5px grey',
      }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align='center'>Name</TableCell>
              <TableCell align='center'>Username</TableCell>
              <TableCell align='center'>Email</TableCell>
              <TableCell align='center'>City</TableCell>
              <TableCell align='center'>Edit</TableCell>
              <TableCell align='center'>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(
              ({
                id,
                name = '',
                username = '',
                email = '',
                address = { city: '' },
              }) => (
                <TableRow
                  key={id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    {id}
                  </TableCell>
                  <TableCell align='center'>{name}</TableCell>
                  <TableCell align='center'>{username}</TableCell>
                  <TableCell align='center'>{email}</TableCell>
                  <TableCell align='center'>{address.city}</TableCell>
                  <TableCell align='center'>
                    <Button
                      variant='contained'
                      color='secondary'
                      onClick={() => handleUserEdit(id)}
                    >
                      Edit
                    </Button>
                  </TableCell>
                  <TableCell align='center'>
                    <Button
                      variant='contained'
                      color='error'
                      onClick={() => handleUserDelete(id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

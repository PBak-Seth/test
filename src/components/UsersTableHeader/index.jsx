import { Typography, Box, Stack, Button } from '@mui/material';

export const UsersTableHeader = ({ handleNewUser }) => (
  <Box
    sx={{
      p: 2,
      border: '1px solid grey',
      borderRadius: '5px',
      boxShadow: '0 0 5px grey',
    }}
  >
    <Stack direction='row' spacing={2} justifyContent='space-between'>
      <Typography variant='h5' component='h5'>
        User List
      </Typography>
      <Button variant='contained' onClick={handleNewUser}>
        Add new
      </Button>
    </Stack>
  </Box>
);

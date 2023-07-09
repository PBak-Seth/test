import { Button } from '@mui/material';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const DeleteUserDialog = ({
  isDialogOpen,
  handleCloseDialog,
  handleDeleteUser,
}) => (
  <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
    <DialogTitle id='alert-dialog-title'>Delete user</DialogTitle>
    <DialogContent>
      <DialogContentText id='alert-dialog-description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button variant='outlined' onClick={handleCloseDialog}>
        Cancel
      </Button>
      <Button onClick={handleDeleteUser} color='error' variant='contained'>
        Delete
      </Button>
    </DialogActions>
  </Dialog>
);

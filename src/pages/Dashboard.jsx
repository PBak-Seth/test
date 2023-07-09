import { useState } from 'react';
import { Typography, Container, Box, Stack, Button } from '@mui/material';
import { useGetUsersQuery } from '../api/users';
import _uniqueId from 'lodash/uniqueId';

import { addUser, deleteUser, editUser } from '../features/users/usersSlice';
import { useAppDispatch } from '../store/hooks';

import { omit } from 'lodash';

import { useSelector } from 'react-redux';

import { UserForm } from '../components/UserForm/index';
import { UsersTable } from '../components/UsersTable/index';
import { DeleteUserDialog } from '../components/DeleteUserDialog';
import { UsersTableHeader } from '../components/UsersTableHeader';

export const Dashboard = () => {
  const { error, isLoading, isSuccess } = useGetUsersQuery();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [selectedUserId, setSelectedUserId] = useState(null);
  const [step, setStep] = useState('default');
  const dispatch = useAppDispatch();
  const users = useSelector((state) => state.users.users);
  const filterTableData = (data) => {
    return data.map((item) =>
      omit(item, ['website', 'company', 'website', 'phone'])
    );
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  const handleUserEdit = (id) => {
    setSelectedUserId(id);
    setStep('userForm');
  };

  const handleDeleteUser = () => {
    dispatch(deleteUser(selectedUserId));

    setIsDialogOpen(false);
    setSelectedUserId(null);
  };
  const handleOnUserDelete = (id) => {
    setSelectedUserId(id);
    setIsDialogOpen(true);
  };

  const handleNewUser = () => setStep('userForm');
  const onEditUser = (user) => {
    dispatch(editUser({ id: selectedUserId, ...user }));
    setStep('default');
    setSelectedUserId(null);
  };
  const handleCancelStep = () => setStep('default');
  const onAddNewUser = (user) => {
    const newUser = { id: _uniqueId('new-user-'), ...user };
    dispatch(addUser(newUser));

    setStep('default');
  };
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const getSelectedUserById = (id) => {
    return users.find((u) => u.id === id);
  };

  const usersNotAvailable =
    step === 'default' && users.length === 0 && isSuccess;

  return (
    <Container>
      <Typography variant='h1' component='h1'>
        Dashboard
      </Typography>
      {step === 'userForm' && (
        <UserForm
          handleCancelStep={handleCancelStep}
          onAddNewUser={onAddNewUser}
          onEditUser={onEditUser}
          selectedUser={
            selectedUserId ? getSelectedUserById(selectedUserId) : null
          }
        />
      )}
      {step === 'default' && users.length > 0 && (
        <>
          <UsersTableHeader handleNewUser={handleNewUser} />

          <UsersTable
            data={filterTableData(users)}
            handleUserDelete={handleOnUserDelete}
            handleUserEdit={handleUserEdit}
          />
        </>
      )}
      {usersNotAvailable && (
        <Typography variant='h5' component='h5'>
          No users available
        </Typography>
      )}
      <DeleteUserDialog
        isDialogOpen={isDialogOpen}
        handleClose={handleCloseDialog}
        handleDeleteUser={handleDeleteUser}
      />
    </Container>
  );
};

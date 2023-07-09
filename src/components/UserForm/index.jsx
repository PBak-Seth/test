import { Typography, Box, Stack, Button } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '../../constants/userForm';
import { useForm, FormProvider } from 'react-hook-form';

import { ControlledTextInput } from '../ControlledTextInput/index';

export const UserForm = ({
  handleCancelStep,
  onAddNewUser,
  selectedUser,
  onEditUser,
}) => {
  const methods = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: selectedUser?.name ?? '',
      email: selectedUser?.email ?? '',
    },
  });

  const { formState, handleSubmit, register } = methods;

  return (
    <>
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
            Add User
          </Typography>
        </Stack>
      </Box>
      <Box
        sx={{
          p: 2,
          border: '1px solid grey',
          borderRadius: '5px',
          boxShadow: '0 0 5px grey',
        }}
      >
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(selectedUser ? onEditUser : onAddNewUser)}
          >
            <Stack spacing={2} direction='column'>
              <ControlledTextInput name={'name'} label='name' />
              <ControlledTextInput name={'email'} label='email' />
            </Stack>
            <Stack
              direction='row'
              spacing={2}
              padding='1rem 0'
              justifyContent='end'
            >
              <Button
                variant='outlined'
                color='error'
                onClick={handleCancelStep}
              >
                cancel
              </Button>
              <Button variant='contained' color='success' type='submit'>
                Submit
              </Button>
            </Stack>
          </form>
        </FormProvider>
      </Box>
    </>
  );
};

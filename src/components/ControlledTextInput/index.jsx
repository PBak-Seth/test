import { Controller, useFormContext } from 'react-hook-form';
import { Typography, Stack, TextField } from '@mui/material';

export const ControlledTextInput = ({ name, label }) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, formState: { errors } }) => (
        <Stack direction='row' spacing={2}>
          {label && (
            <label>
              <Typography component='div' sx={[{ padding: '0.5rem 0' }]}>
                {label}
              </Typography>
            </label>
          )}

          <TextField
            helperText={errors ? errors[name]?.message : null}
            size='small'
            error={!!errors[name]}
            onChange={onChange}
            value={value}
            fullWidth
            label={label}
            variant='outlined'
          />
        </Stack>
      )}
    />
  );
};

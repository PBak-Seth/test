import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  name: yup.string().min(3).max(30).required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
});

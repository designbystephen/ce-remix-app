import * as yup from 'yup';
import type { UserInput } from '~/user/models';

/**
 * Yup schema used to validate a new user
 */
export default yup.object<UserInput>().shape({
  firstName: yup.string().required('Required'),
  lastName: yup.string().required('Required'),
  email: yup.string().email('Enter a valid email').required('Required'),
  // simple password validation for demonstration purposes
  password: yup.string().min(8).max(32).required('Required'),
});

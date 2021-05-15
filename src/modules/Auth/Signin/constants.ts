import {IField} from '../../../components/organisms/FormGenerator';
import {validators} from '@utils';

export const fields: IField[] = [
  {
    name: 'email',
    required: true,
    pattern: validators.emailPattern,
    keyboardType: 'email-address',
    placeholder: 'Email',
  },
  {
    name: 'password',
    required: true,
    placeholder: 'Password',
    secureTextEntry: true,
  },
];

export const defaultValues = () => ({
  email: '',
  password: '',
});

export const headerProps = {title: 'Sign in'};
export const submitTitle = 'Login';
export const signupTitle = 'New to Cacook? Sign Up';
export const forgotPasswordTitle = 'Forgot password?';

import {IField} from '../../../components/organisms/FormGenerator';
import {validators} from '@utils';

export const fields: IField[] = [
  {
    name: 'email',
    required: true,
    pattern: validators.emailPattern,
    keyboardType: 'email-address',
    label: 'Email address',
    help: "We'll send your order confirmation here",
    placeholder: 'Enter email address',
  },
  {
    name: 'first_name',
    required: true,
    placeholder: 'Enter first name',
    label: 'First name',
  },
  {
    name: 'last_name',
    required: true,
    placeholder: 'Enter last name',
    label: 'Last name',
  },
  {
    name: 'password',
    required: true,
    label: 'Password',
    placeholder: 'Enter password',
    help: 'Must be 5 or more characters',
    secureTextEntry: true,
    rules: {minLength: {value: 5, message: 'Must be 5 or more characters'}},
  },
];

export const defaultValues = () => ({
  email: '',
  first_name: '',
  last_name: '',
  password: '',
});

export const headerProps = {title: 'Sign up', back: true};
export const submitTitle = 'Sign up';
export const signinTitle = 'Already have an account? Sign in';

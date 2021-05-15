import {Navigations} from '@types';
import {StackGenerator} from '@utils';
import Signin from './Signin';
import Signup from './Signup';

const navigations = [
  {
    name: Navigations.Auth_Signin,
    component: Signin,
  },
  {
    name: Navigations.Auth_Signup,
    component: Signup,
  },
];

export default StackGenerator(navigations);

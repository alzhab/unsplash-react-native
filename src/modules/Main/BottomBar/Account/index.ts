import {Navigations} from '@types';
import {StackGenerator} from '@utils';
import Profile from './Profile';
import Settings from './Settings';

const navigations = [
  {
    name: Navigations.Account_Profile,
    component: Profile,
  },
  {
    name: Navigations.Account_Settings,
    component: Settings,
  },
];

export default StackGenerator(navigations);

import {Navigations} from '@types';
import {BottombarGenerator} from '@utils';
import { HomeIcon, HeartIcon, ListIcon, UserIcon } from '@icons';
import Home_Stack from './Home_Stack';
import Favorites from './Favorites';
import ShoppingList from './ShoppingList';
import Account from './Account';

const navigations = [
  {
    name: Navigations.BottomBar_Home_Stack,
    component: Home_Stack,
    Icon: HomeIcon,
    title: 'My Feed'
  },
  {
    name: Navigations.BottomBar_Favorites,
    component: Favorites,
    Icon: HeartIcon,
    title: 'Favorites'
  },
  {
    name: Navigations.BottomBar_ShoppingList,
    component: ShoppingList,
    Icon: ListIcon,
    title: 'Shopping List'
  },
  {
    name: Navigations.BottomBar_Account,
    component: Account,
    Icon: UserIcon,
    title: 'Account'
  },
];

export default BottombarGenerator(navigations);

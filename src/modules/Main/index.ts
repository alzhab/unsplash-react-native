import {Navigations} from '@types';
import {StackGenerator} from '@utils';
import Home from './Home';
import Search from './Search';
import Favorites from './Favorites';
import History from './History';

const navigations = [
  {
    name: Navigations.Main_Home,
    component: Home,
  },
  {
    name: Navigations.Main_Search,
    component: Search,
  },
  {
    name: Navigations.Main_Favorites,
    component: Favorites,
  },
  {
    name: Navigations.Main_History,
    component: History,
  },
];

export default StackGenerator(navigations);

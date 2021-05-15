import {Navigations} from '@types';
import {StackGenerator} from '@utils';
import Home from './Home';
import Search from './Search';
import Filter from './Filter';
import SearchResult from './SearchResult';

const navigations = [
  {
    name: Navigations.Home_Stack_Home,
    component: Home,
  },
  {
    name: Navigations.Home_Stack_Search,
    component: Search,
  },
  {
    name: Navigations.Home_Stack_Filter,
    component: Filter,
  },
  {
    name: Navigations.Home_Stack_SearchResult,
    component: SearchResult,
  },
];

export default StackGenerator(navigations);

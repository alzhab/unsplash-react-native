import {Navigations} from '@types';
import {StackGenerator} from '@utils';
import BottomBar from './BottomBar';
import Rating from './Rating';
import VideoClip from './VideoClip';

const navigations = [
  {
    name: Navigations.Main_BottomBar,
    component: BottomBar,
  },
  {
    name: Navigations.Main_Rating,
    component: Rating,
  },
  {
    name: Navigations.Main_VideoClip,
    component: VideoClip,
  },
];

export default StackGenerator(navigations);

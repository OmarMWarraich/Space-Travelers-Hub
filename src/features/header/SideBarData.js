import * as GiIcons from 'react-icons/gi';
import * as SlIcons from 'react-icons/si';
import * as BiIcons from 'react-icons/bi';

export const SidebarData = [
  {
    title: 'Missions',
    path: '/',
    icon: <GiIcons.GiSpaceShuttle />,
    cName: 'nav-text'
  },
  {
    title: 'Rockets',
    path: '/rockets',
    icon: <SlIcons.SlRocket />,
    cName: 'nav-text'
  },
  {
    title: 'Dragons',
    path: '/dragons',
    icon: <GiIcons.GiRocketThruster />,
    cName: 'nav-text'
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <BiIcons.BiUserCircle />,
    cName: 'nav-text'
  }
];

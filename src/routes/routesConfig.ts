import HomePage from '@containers/HomePage';
import AboutPage from '@containers/AboutPage';
import ControlsPage from '@containers/ControlsPage';
import NotFound from '@containers/NotFound';

const routesConfig = [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    path: '/about',
    exact: true,
    component: AboutPage,
  },
  {
    path: '/controls',
    exact: true,
    component: ControlsPage,
  },
  {
    path: '*',
    exact: false,
    component: NotFound,
  },
];

export default routesConfig;

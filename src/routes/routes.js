import config from '~/config';
import Home from '~/pages/Home/Home';
import Signin from '~/pages/Signin';
import Signup from '~/pages/Signup';

// Public routes
export const publicRoutes = [
  {
    path: config.routes.home,
    component: Home,
  },
  {
    path: config.routes.signin,
    component: Signin,
    layout: null,
  },
  {
    path: config.routes.signup,
    component: Signup,
    layout: null,
  },
];

// Private routes
export const privateRoutes = [];

import config from '~/config';
import Home from '~/pages/Home/Home';
import Signin from '~/pages/Signin';
import Signup from '~/pages/Signup';
import { AuthLayout } from '~/layouts';

// Public routes
export const publicRoutes = [
  {
    path: config.routes.home,
    component: Home,
  },
  {
    path: config.routes.signin,
    component: Signin,
    layout: AuthLayout,
  },
  {
    path: config.routes.signup,
    component: Signup,
    layout: AuthLayout,
  },
];

// Private routes
export const privateRoutes = [];

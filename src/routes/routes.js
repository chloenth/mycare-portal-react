import Home from '~/pages/Home';
import Signin from '~/pages/Signin';
import Signup from '~/pages/Signup';

// Public routes
export const publicRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/signin',
    component: Signin,
    layout: null,
  },
  {
    path: '/signup',
    component: Signup,
    layout: null,
  },
];

// Private routes
export const privateRoutes = [];

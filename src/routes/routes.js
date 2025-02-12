import config from '~/config';
import { AuthLayout, DashboardLayout } from '~/layouts';
import Home from '~/pages/Home/Home';
import Signin from '~/pages/Signin';
import Signup from '~/pages/Signup';
import AdminDashboard from '~/pages/admin/AdminDashboard';
import DoctorDashboard from '~/pages/doctor/DoctorDashboard';

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
  {
    path: config.routes.admin,
    component: AdminDashboard,
    layout: DashboardLayout,
  },

  {
    path: config.routes.doctor,
    component: DoctorDashboard,
    layout: DashboardLayout,
  },
];

// Private routes
export const privateRoutes = [];

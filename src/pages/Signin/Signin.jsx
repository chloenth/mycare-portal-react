import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

import AuthForm from '../components/AuthForm';

const inputList = [
  {
    type: 'text',
    placeholder: 'Username',
    icon: faUser,
  },
  {
    type: 'password',
    placeholder: 'Password',
    icon: faLock,
  },
];

const action = {
  link: '/signup',
  text: 'Don’t have an account? Signup here!',
};

const Signin = () => {
  return (
    <>
      <AuthForm
        heading="Welcome to MyCare Portal"
        inputList={inputList}
        btnText="Login"
        signin
        action={action}
      />
    </>
  );
};

export default Signin;

import {
  faUser,
  faEnvelope,
  faLock,
  faHouse,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

import AuthForm from '../components/AuthForm';

const inputList = [
  {
    type: 'text',
    placeholder: 'Username',
    icon: faUser,
  },
  {
    type: 'text',
    placeholder: 'Fullname',
    icon: faUser,
  },
  {
    type: 'password',
    placeholder: 'Password',
    icon: faLock,
  },
  {
    type: 'password',
    placeholder: 'Confirm Password',
    icon: faLock,
  },
  {
    type: 'email',
    placeholder: 'Email',
    icon: faEnvelope,
  },
  {
    type: 'text',
    placeholder: 'Address',
    icon: faHouse,
  },
  {
    type: 'number',
    placeholder: 'Phone Number',
    icon: faPhone,
  },
];

const action = {
  link: '/login',
  text: 'Already have an account? Login here!',
};

const Signup = () => {
  return (
    <>
      <AuthForm
        heading="Register Your Account"
        inputList={inputList}
        btnText="Signup"
        action={action}
      />
    </>
  );
};

export default Signup;

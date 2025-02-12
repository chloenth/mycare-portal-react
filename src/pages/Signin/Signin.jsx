import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

import AuthForm from '../components/AuthForm';
import { logIn } from '~/services/authService';
import roles from '~/config/roles';

const inputList = [
  {
    name: 'username',
    type: 'text',
    placeholder: 'Username',
    icon: faUser,
  },
  {
    name: 'password',
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
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await logIn(formData.username, formData.password);
      console.log(response.data?.result);

      const role = response.data?.result.roles[0].name;

      if (role === roles.ADMIN) {
        navigate('/admin');
      } else if (role === roles.DOCTOR) {
        navigate('/doctor');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AuthForm
        heading="Welcome to MyCare Portal"
        inputList={inputList}
        btnText="Login"
        signin
        action={action}
        onChange={handleChange}
        formData={formData}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default Signin;

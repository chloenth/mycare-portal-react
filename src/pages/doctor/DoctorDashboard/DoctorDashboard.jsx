import { getMyInfo } from '~/services/userService';

const DoctorDashboard = () => {
  const handleClick = async () => {
    try {
      const response = await getMyInfo();
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return <button onClick={handleClick}>Get My info</button>;
};

export default DoctorDashboard;

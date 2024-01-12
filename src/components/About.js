import User from './User';
import UserClass from './UserClass';
import UserContext from '../utils/UserContext';
import { useContext } from 'react';

const About = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className='body'>
      <h2>About us</h2>
      <h2>{loggedInUser}</h2>
      <UserClass name={'Shubham Patil'} />
    </div>
  );
};

export default About;

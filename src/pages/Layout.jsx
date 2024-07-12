import { Outlet, useNavigate } from 'react-router-dom';
import ConvoList from '../components/ConvoList';
import FriendList from '../components/FriendList';
import { useEffect } from 'react';

const Layout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/');
  }, [navigate]);
  return (
    <div className='h-screen overflow-hidden flex'>
      <FriendList />
      <ConvoList />
      <div className='divider divider-horizontal m-0'></div>
      <Outlet />
    </div>
  );
};
export default Layout;

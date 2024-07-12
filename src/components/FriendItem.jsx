import { useDispatch, useSelector } from 'react-redux';
import { addUser, userSelector } from '../slices/userSlice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

/* eslint-disable react/prop-types */
const FriendItem = ({ user }) => {
  const { usersWithMessages } = useSelector(userSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChat = (id) => {
    const idExists = usersWithMessages.some((user) => user.id === id);
    if (idExists) {
      navigate(`/chat/${id}`);
      return;
    }
    dispatch(addUser({ user }));
    toast.success('Chat added');
    navigate(`/chat/${id}`);
  };
  return (
    <div className='bg-neutral w-full rounded-md p-2 flex items-center gap-4'>
      <div className='avatar'>
        <div className='w-12 rounded-full'>
          <img src={user.avatar} alt='user avatar' />
        </div>
      </div>
      <p>{user.name}</p>
      <button className='btn ml-auto' onClick={() => handleChat(user.id)}>
        Chat
      </button>
    </div>
  );
};
export default FriendItem;

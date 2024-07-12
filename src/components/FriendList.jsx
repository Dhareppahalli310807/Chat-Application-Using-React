import { useSelector } from 'react-redux';
import { userSelector } from '../slices/userSlice';
import FriendItem from './FriendItem';

const FriendList = () => {
  const { users } = useSelector(userSelector);
  return (
    <dialog id='my_modal_1' className='modal'>
      <div className='modal-box'>
        <h3 className='font-bold text-[30px] text-center'>Friends</h3>
        <div className='flex flex-col items-center gap-2'>
          {users.map((user) => (
            <FriendItem key={user.id} user={user} />
          ))}
        </div>

        <div className='modal-action'>
          <form method='dialog'>
            {/* if there is a button in form, it will close the modal */}
            <button className='btn'>Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};
export default FriendList;

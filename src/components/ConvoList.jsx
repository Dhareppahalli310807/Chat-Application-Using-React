import { CiSearch } from 'react-icons/ci';
import { MdAddCircleOutline } from 'react-icons/md';
import ConvoItem from './ConvoItem';
import { useDispatch, useSelector } from 'react-redux';
import { filterUser, userSelector } from '../slices/userSlice';

const ConvoList = () => {
  const { filteredUser } = useSelector(userSelector);
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    const userName = e.target.value;
    dispatch(filterUser({ userName: userName }));
  };

  return (
    <div className='w-1/4 h-full px-4 py-4 flex-shrink-0'>
      <label className='input input-bordered flex items-center gap-2 bg-base-200'>
        <CiSearch className='text-2xl text-neutral-content ' />
        <input
          type='text'
          className='grow text-neutral-content placeholder:text-neutral-content font-rethink placeholder:font-rethink'
          placeholder='Search for conversation'
          onChange={handleSearch}
        />
      </label>
      <div className='flex justify-between items-center mt-5'>
        <p className='font-ysabeau text-neutral-content'>Conversations</p>
        <button
          className='btn btn-circle btn-sm'
          onClick={() => document.getElementById('my_modal_1').showModal()}
        >
          <MdAddCircleOutline className='text-2xl text-neutral-content' />
        </button>
      </div>
      <div className='divider divider-vertical m-0'></div>
      <div className='flex flex-col gap-2  h-[84%] overflow-y-auto pr-2'>
        {filteredUser.map((user) => (
          <ConvoItem key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};
export default ConvoList;

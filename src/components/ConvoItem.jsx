/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { messageSelector } from '../slices/messageSlice';
import { convertTimeStampToTime } from '../util/utilFunctions';

const ConvoItem = ({ user }) => {
  const { messages } = useSelector(messageSelector);
  const converstions = messages.find((message) => {
    if (message.userId !== undefined) {
      return message.userId === user.id;
    }
  });
  const lastMessage =
    converstions !== undefined
      ? converstions.convo[converstions.convo.length - 1]
      : 'me';
  const { id } = useParams();
  return (
    <Link
      to={`/chat/${user.id}`}
      className={
        user.id !== Number(id)
          ? 'flex gap-3 bg-neutral p-4 rounded-md cursor-pointer hover:bg-base-300 hover:text-base-content text-neutral-content'
          : 'flex gap-3 bg-primary p-4 rounded-md cursor-pointer  text-primary-content'
      }
    >
      {lastMessage.from === 'user' ? (
        <div className='avatar'>
          <div className='w-16 rounded-full ring-2 ring-accent ring-offset-neutral ring-offset-2'>
            <img src={user.avatar} alt='user avatar' />
          </div>
        </div>
      ) : (
        <div className='avatar'>
          <div className='w-16 rounded-full'>
            <img src={user.avatar} alt='user avatar' />
          </div>
        </div>
      )}
      <div className='flex flex-col w-44 pt-1'>
        <p className=' text-lg font-rethink font-bold'>{user.name}</p>
        {lastMessage.from === 'user' ? (
          <p
            className={
              user.id !== Number(id)
                ? 'truncate text-accent font-rethink'
                : 'truncate text-primary-content font-rethink'
            }
          >
            {lastMessage.text}
          </p>
        ) : (
          <p className='truncate font-rethink'>{lastMessage.text}</p>
        )}
      </div>

      {lastMessage.timestamp !== undefined && (
        <p className='flex-shrink-0 font-rethink'>
          {convertTimeStampToTime(lastMessage.timestamp)}
        </p>
      )}
    </Link>
  );
};
export default ConvoItem;

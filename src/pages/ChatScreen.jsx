import { IoCloseCircle } from 'react-icons/io5';
import { ImAttachment } from 'react-icons/im';
import InputEmoji from 'react-input-emoji';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from '../slices/userSlice';
import ChatBubbleLeft from '../components/ChatBubbleLeft';
import ChatBubbleRight from '../components/ChatBubbleRight';
import { addMessage, messageSelector } from '../slices/messageSlice';
import toast from 'react-hot-toast';

const ChatScreen = () => {
  const { users } = useSelector(userSelector);
  const { id } = useParams();
  const user = users.find((user) => user.id === Number(id));
  const { messages } = useSelector(messageSelector);
  const dispatch = useDispatch();
  const conversations = messages.find(
    (message) => message.userId === Number(id)
  );

  const [text, setText] = useState('');
  function handleOnEnter(text) {
    if (!text) {
      toast.error('Please provide a message.');
      return;
    }
    const userId = Number(id);
    const numberOfMessagesInConvo =
      conversations === undefined ? 0 : conversations.convo.length;
    const message = {
      id: numberOfMessagesInConvo + 1,
      from: 'me',
      text: text,
      timestamp: `${new Date()}`,
    };
    dispatch(addMessage({ message, userId }));
  }
  return (
    <div className='grow py-4 w-full'>
      <div className='flex items-center justify-between  w-full px-5'>
        <div className='avatar'>
          <div className='w-16 rounded-full'>
            <img src={user.avatar} alt='user avatar' />
          </div>
        </div>
        <p className='font-ysabeau text-2xl text-base-content font-bold'>
          {user.name}
        </p>

        <Link to={'/'} className='btn btn-circle btn-sm'>
          <IoCloseCircle className='text-2xl' />
        </Link>
      </div>
      <div className='divider divider-vertical mt-2 mb-0'></div>
      <div className=' h-[88%] flex flex-col px-1'>
        <div className='grow max-h-[100%] overflow-y-auto px-5'>
          {conversations !== undefined ? (
            conversations.convo.map((message) => {
              if (message.from === 'me') {
                return <ChatBubbleRight key={message.id} message={message} />;
              } else {
                return <ChatBubbleLeft key={message.id} message={message} />;
              }
            })
          ) : (
            <div className='w-full h-full grid place-items-center'>
              <h1 className='font-ysabeau text-2xl opacity-20'>
                No conversation started yet
              </h1>
            </div>
          )}
        </div>
        <div className='py-3 flex items-center gap-5 px-5'>
          <button className='btn'>
            <ImAttachment className='text-lg' />
          </button>
          <InputEmoji
            value={text}
            onChange={setText}
            cleanOnEnter
            onEnter={handleOnEnter}
            placeholder='Type a message'
            background='#242933'
            borderColor='transparent'
            borderRadius={5}
            placeholderColor='#b2ccd6'
            color='#b2ccd6'
            fontFamily='Rethink Sans'
          />
          <button className='btn font-rethink text-base'>Send</button>
        </div>
      </div>
    </div>
  );
};
export default ChatScreen;

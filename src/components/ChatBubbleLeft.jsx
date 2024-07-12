/* eslint-disable react/prop-types */
import { convertTimeStampToTime } from '../util/utilFunctions';

const ChatBubbleLeft = ({ message }) => {
  const time = convertTimeStampToTime(message.timestamp);
  return (
    <div className='chat chat-start font-rethink'>
      <div className='chat-bubble bg-primary text-primary-content font-semibold'>
        {message.text}
      </div>
      <div className='chat-footer opacity-50 flex items-center gap-1 mt-1'>
        <p>Delivered at</p>
        <time className='text-xs '>{time}</time>
      </div>
    </div>
  );
};
export default ChatBubbleLeft;

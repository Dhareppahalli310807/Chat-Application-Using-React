/* eslint-disable react/prop-types */
import { convertTimeStampToTime } from '../util/utilFunctions';

const ChatBubbleRight = ({ message }) => {
  const time = convertTimeStampToTime(message.timestamp);
  return (
    <div className='chat chat-end font-rethink'>
      <div className='chat-bubble font-semibold'>{message.text}</div>
      <div className='chat-footer opacity-50 flex items-center gap-1 mt-1'>
        <p>Seen at</p>
        <time className='text-xs '>{time}</time>
      </div>
    </div>
  );
};
export default ChatBubbleRight;

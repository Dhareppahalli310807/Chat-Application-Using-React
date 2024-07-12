import { IoChatbubbleEllipsesSharp } from 'react-icons/io5';

const BlankChat = () => {
  return (
    <div className='grid place-items-center w-full'>
      <IoChatbubbleEllipsesSharp className='text-[200px] text-base-content opacity-20 self-end' />
      <h1 className='text-5xl text-base-content opacity-20 self-start font-ysabeau'>
        Welcome
      </h1>
    </div>
  );
};
export default BlankChat;

import { useEffect, useState } from 'react';
import LiveMessage from './LiveMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addChatMessage } from '../../utils/chatSlice';
import { generateRandomName, generateRandomMessage } from '../../utils/helper';
import user from '../../assets/user.jpg';

const LiveChat = () => {
  const LiveMessages = useSelector((store) => store.chat.messages);
  const [liveTextMessage, setLiveTextMessage] = useState('');
  //api polling
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setInterval(() => {
      //console.log("api polling");
      dispatch(
        addChatMessage({
          name: generateRandomName(),
          text: generateRandomMessage(),
        }),
      );
    }, 1500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="px-2 md:px-4">
      <div className="mt-6 border rounded-2xl md:w-auto h-[570px] md:h-[640px] flex flex-col items-stretch">
        <div className="flex justify-between py-3 px-4 border-b">
          <div className="text-lg">Live Chat</div>
          <div>:</div>
        </div>
        <div className="flex flex-col-reverse overflow-y-scroll h-[480px] md:h-[550px]">
          {LiveMessages.map((message, index) => (
            <LiveMessage
              key={index}
              name={message.name}
              message={message.text}
            />
          ))}
        </div>
        <div className="flex justify-between py-3 px-4 border-t">
          <div className="flex gap-3">
            <img src={user} alt="" className="h-7 rounded-full" />
            <div className="flex flex-col justify-center gap-2">
              <div className="font-semibold text-sm md:text-md text-gray-500">
                Arvind
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setLiveTextMessage('');
                }}
              >
                <input
                  type="text"
                  className="border-b w-full md:w-64 text-sm outline-none focus:border-b-2 focus:border-blue-500"
                  value={liveTextMessage}
                  onChange={(e) => setLiveTextMessage(e.target.value)}
                  placeholder="Say something..."
                />
                <button
                  className="text-gray-500 font-semibold px-2"
                  onClick={() => {
                    dispatch(
                      addChatMessage({
                        name: 'Arvind',
                        text: liveTextMessage,
                      }),
                    );
                  }}
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;


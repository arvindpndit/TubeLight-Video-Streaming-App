import { useEffect, useState } from "react";
import LiveMessage from "./LiveMessage";
import { useDispatch, useSelector } from "react-redux";
import { addChatMessage } from "../utils/chatSlice";
import { FaUserCircle } from "react-icons/fa";
import { generateRandomName, generateRandomMessage } from "../utils/helper";
import user from "../assets/user.jpg";

const LiveChat = () => {
  const LiveMessages = useSelector((store) => store.chat.messages);
  const [liveTextMessage, setLiveTextMessage] = useState("");
  //api polling
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setInterval(() => {
      //console.log("api polling");
      dispatch(
        addChatMessage({
          name: generateRandomName(),
          text: generateRandomMessage(),
        })
      );
    }, 1500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="mt-6 border w-[400px] rounded-2xl h-[570px] flex flex-col items-stretch">
      <div className="flex justify-between  py-3 px-4 border-b">
        <div>Live Chat</div>
        <div>:</div>
      </div>
      <div className=" flex flex-col-reverse overflow-y-scroll h-[480px]">
        {LiveMessages.map((message, index) => (
          <LiveMessage key={index} name={message.name} message={message.text} />
        ))}
      </div>
      <div className="flex justify-between  py-3 px-4 border-t">
        <div className="flex  gap-3">
          <img src={user} alt="" className="h-7 rounded-full" />
          <div className="flex flex-col justify-center gap-2">
            <div className="font-semibold text-md text-gray-500">Arvind</div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setLiveTextMessage("");
              }}
            >
              <input
                type="text"
                className="border-b w-64 text-sm outline-none focus:border-b-2 focus:border-blue-500"
                value={liveTextMessage}
                onChange={(e) => setLiveTextMessage(e.target.value)}
                placeholder="say something..."
              />
              <button
                className="text-gray-500 font-bold px-2"
                onClick={() => {
                  dispatch(
                    addChatMessage({
                      name: "Arvind",
                      text: liveTextMessage,
                    })
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
  );
};

export default LiveChat;

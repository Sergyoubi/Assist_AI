"use client";

import { useChat } from "ai/react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { MdAssistant } from "react-icons/md";

const ChatSection = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <main className="w-full h-[90%] flex flex-col justify-center items-center gap-2">
      <div className="w-full h-[85%] flex justify-center items-center">
        <div className="w-[50%] h-full flex flex-col justify-start items-start overflow-scroll gap-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className="flex justify-start items-start gap-3"
            >
              {message.role === "user" ? (
                <FaUserEdit
                  size={23}
                  className="text-teal-300 relative top-4"
                />
              ) : (
                <MdAssistant
                  size={23}
                  className="text-slate-300 relative top-4"
                />
              )}
              <p className="max-w-[83%] text-slate-100 font-light text-lg mt-2 py-1 px-3 bg-stone-800 rounded-lg">
                {message.content}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-[15%] flex justify-center items-start">
        <form
          onSubmit={handleSubmit}
          className="w-[50%] h-[70%] flex justify-center items-center"
        >
          <input
            name="prompt"
            value={input}
            onChange={handleInputChange}
            placeholder="Enter user message"
            className="w-[95%] h-[85%] rounded-full outline-none pl-10"
          />
        </form>
      </div>
    </main>
  );
};

export default ChatSection;

/*
<button
  type="submit"
  className="w-[10%] h-[85%] flex justify-center items-center relative right-[9%]"
>
  <FaArrowAltCircleUp size={30} className="text-slate-600" />
</button>
*/

"use client";

import { useChat } from "ai/react";
import { FaUserEdit } from "react-icons/fa";
import { MdAssistant } from "react-icons/md";
import { HiPlusCircle } from "react-icons/hi";
import Typewriter from "typewriter-effect";

const ChatSection = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const handleReload = () => {
    window.location.reload();
    //reload();
  };

  return (
    <main className="w-full h-[90%] flex flex-col justify-center items-center gap-2">
      <div className="w-full h-[85%] flex justify-center items-center">
        {messages.length === 0 ? (
          <div className="w-[50%] h-full flex justify-start items-start">
            <div className="text-neutral-500 text-5xl font-semibold relative top-[20%]">
              <Typewriter
                options={{
                  strings: ["Hello, How can I help you today?"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
        ) : (
          <div className="w-[50%] h-full flex flex-col justify-start items-start overflow-scroll gap-2 border border-neutral-800">
            {messages.map((message) => (
              <div
                key={message.id}
                className="flex justify-start items-start gap-3 my-2"
              >
                {message.role === "user" ? (
                  <FaUserEdit
                    size={23}
                    className="text-teal-300 relative top-4 mx-2"
                  />
                ) : (
                  <MdAssistant
                    size={23}
                    className="text-slate-300 relative top-4 mx-2"
                  />
                )}
                <p className="max-w-[90%] text-slate-100 text-left font-light text-lg mt-2 py-1 px-5 bg-stone-800 rounded-lg">
                  {message.content}
                </p>
              </div>
            ))}
          </div>
        )}
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
            placeholder="Enter a prompt here"
            className="w-[95%] h-[85%] text-gray-700 bg-neutral-300 rounded-full outline-none pl-10"
          />
        </form>
        <button
          type="button"
          onClick={handleReload}
          className="w-[5%] h-[60%] flex justify-center items-center relative top-2 right-3"
        >
          <HiPlusCircle size={40} className="text-neutral-300" />
        </button>
      </div>
    </main>
  );
};

export default ChatSection;

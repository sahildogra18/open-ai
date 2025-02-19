import "./App.css";
import logo from "./ChatGPT_Clone_assets/chatgpt.svg";
import rocket from "./ChatGPT_Clone_assets/rocket.svg";
import msg from "./ChatGPT_Clone_assets/message.svg";
import bk from "./ChatGPT_Clone_assets/bookmark.svg";
import home from "./ChatGPT_Clone_assets/home.svg";
import greenl from "./ChatGPT_Clone_assets/chatgptLogo.svg";
import user from "./ChatGPT_Clone_assets/user-icon.png";
import send from "./ChatGPT_Clone_assets/send.svg";
import run from "./Openai";
import { useState } from "react";

function App() {
  let [input, setInput] = useState("");
  let [messages, setMessages] = useState([
    { text: "Hola, como estas? Mi nombre es Sahil", isBot: true },
  ]);

  let handleSend = async () => {
    if (!input.trim()) return; // ✅ Empty input prevent karna

    let res = await run(input);

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: input, isBot: false },
      { text: res, isBot: true },
    ]);

    setInput("");
  };

  return (
    <>
      <div className="maincontainer flex text-white h-[100vh] bg-[#313045]">
        <div className=" smi border-r border-[#313045]  bg-[#040221] text-white flex flex-col  w-[20vw] h-auto   pl-2">
          <div className="firstHalf  flex-col   gap-[20px] flex pl-2 pt-4 border-b border-[#313045]  pb-56 ">
            <div className="flex items-center gap-[5px]">
              <div>
                <img className="w-[30px]" src={logo} alt="" />
              </div>
              <div>ChatGPT</div>
            </div>

            <div>
              <button className="bg-blue-600 w-[80%] p-[10px]">
                + New Chat
              </button>
            </div>

            <div className="flex items-center gap-[8px] ">
              <div className="">
                <img className="w-[15px] " src={msg} alt="" />
              </div>
              <div>What is programming</div>
            </div>
            <div className="flex items-center gap-[8px]">
              <div>
                <img className="w-[15px] " src={msg} alt="" />
              </div>
              <div>How to use API</div>
            </div>
          </div>
          <div className="secondHalf  flex-col mt-16  gap-[20px] flex pl-2 pt-4 ">
            <div className="flex items-center gap-[8px]">
              <div>
                <img className="w-[15px] " src={home} alt="" />
              </div>
              <div>Home</div>
            </div>

            <div className="flex items-center gap-[8px]">
              <div>
                <img className="w-[15px] " src={bk} alt="" />
              </div>
              <div>Saved</div>
            </div>

            <div className="flex items-center gap-[8px]">
              <div>
                <img className="w-[15px] " src={rocket} alt="" />
              </div>
              <div>Upgrade Pro</div>
            </div>
          </div>
        </div>

        <div className="secondphase w-[100vw] h-auto bg-[#040221] flex flex-col justify-around items-center">
          <div className="flex flex-col h-auto   gap-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`chat ${
                  msg.isBot ? "bot" : "user"
                } resonse w-[50vw] bg-[#1c1f3d] flex items-center gap-2 pl-2 p-[30px] rounded-lg mb-4`}
              >
                <img
                  className="w-[50px]"
                  src={msg.isBot ? greenl : user}
                  alt="avatar"
                />
                <div>{msg.text}</div>
              </div>
            ))}
          </div>

          <div className="bg-[#1c1f1d]  bi w-[50vw]  flex items-center justify-around p-[10px] rounded-lg">
            <input
              className="bg-[#1c1f1d] sticky bottom-0  w-[40vw] appearance-none bg-transparent border-none outline-none "
              type="text"
              placeholder="Send a message"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <div>
              <img
                className="w-[15px] mr-8  cursor-pointer"
                src={send}
                alt=""
                onClick={handleSend}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

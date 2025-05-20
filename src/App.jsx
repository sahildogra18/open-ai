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
      <div className="maincontainer flex text-white h-[100vh] bg-gradient-to-br from-[#2A2F4F] to-[#1A1B26]">
        <div className="smi border-r border-[#3B3F5C] bg-[#1A1B26]/80 backdrop-blur-md text-white flex flex-col w-[20vw] h-auto pl-2">
          <div className="firstHalf flex-col gap-[20px] flex pl-2 pt-4 border-b border-[#3B3F5C] pb-56">
            <div className="flex items-center gap-[5px] hover:bg-[#3B3F5C] p-2 rounded-lg transition-colors">
              <div>
                <img className="w-[30px]" src={logo} alt="" />
              </div>
              <div className="font-semibold text-[#7AA2F7]">ChatGPT</div>
            </div>

            <div>
              <button className="bg-gradient-to-r from-[#7AA2F7] to-[#BB9AF7] hover:from-[#89B4FA] hover:to-[#C0A8F9] w-[80%] p-[10px] rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-[#7AA2F7]/20">
                <span className="text-xl">+</span> New Chat
              </button>
            </div>

            <div className="flex items-center gap-[8px] hover:bg-[#3B3F5C] p-2 rounded-lg cursor-pointer transition-colors">
              <div>
                <img className="w-[15px]" src={msg} alt="" />
              </div>
              <div className="truncate text-[#A9B1D6]">What is programming</div>
            </div>
            <div className="flex items-center gap-[8px] hover:bg-[#3B3F5C] p-2 rounded-lg cursor-pointer transition-colors">
              <div>
                <img className="w-[15px]" src={msg} alt="" />
              </div>
              <div className="truncate text-[#A9B1D6]">How to use API</div>
            </div>
          </div>
          <div className="secondHalf flex-col mt-16 gap-[20px] flex pl-2 pt-4">
            <div className="flex items-center gap-[8px] hover:bg-[#3B3F5C] p-2 rounded-lg cursor-pointer transition-colors">
              <div>
                <img className="w-[15px]" src={home} alt="" />
              </div>
              <div className="text-[#A9B1D6]">Home</div>
            </div>

            <div className="flex items-center gap-[8px] hover:bg-[#3B3F5C] p-2 rounded-lg cursor-pointer transition-colors">
              <div>
                <img className="w-[15px]" src={bk} alt="" />
              </div>
              <div className="text-[#A9B1D6]">Saved</div>
            </div>

            <div className="flex items-center gap-[8px] hover:bg-[#3B3F5C] p-2 rounded-lg cursor-pointer transition-colors">
              <div>
                <img className="w-[15px]" src={rocket} alt="" />
              </div>
              <div className="text-[#F7768E]">Upgrade Pro</div>
            </div>
          </div>
        </div>

        <div className="secondphase w-[100vw] h-auto bg-[#1A1B26]/80 backdrop-blur-md flex flex-col justify-between items-center p-4">
          <div className="flex flex-col h-auto gap-4 w-full max-w-4xl overflow-y-auto">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`chat ${
                  msg.isBot ? "bot" : "user"
                } response w-full ${
                  msg.isBot 
                    ? "bg-[#24283B] border-l-4 border-[#7AA2F7]" 
                    : "bg-[#1F2335] border-l-4 border-[#F7768E]"
                } flex items-start gap-4 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <img
                  className="w-[40px] h-[40px] rounded-full ring-2 ring-offset-2 ring-offset-[#1A1B26]"
                  src={msg.isBot ? greenl : user}
                  alt="avatar"
                />
                <div className="flex-1 whitespace-pre-wrap text-[#A9B1D6]">{msg.text}</div>
              </div>
            ))}
          </div>

          <div className="bg-[#24283B] w-full max-w-4xl flex items-center justify-between p-4 rounded-lg shadow-lg mt-4 border border-[#3B3F5C] hover:border-[#7AA2F7] transition-colors duration-300">
            <input
              className="bg-transparent w-full appearance-none border-none outline-none text-[#A9B1D6] placeholder-[#565F89]"
              type="text"
              placeholder="Send a message"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <button 
              onClick={handleSend}
              className="p-2 hover:bg-[#3B3F5C] rounded-lg transition-colors duration-300"
            >
              <img
                className="w-[20px]"
                src={send}
                alt="Send"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

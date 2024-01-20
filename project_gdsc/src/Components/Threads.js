import React, { useState, useEffect } from "react";
import User from "../Assets/User.svg";
import Response from "./Response.js";
import Input from "./Input";
// import darkmode from "../Assets/darkmode.svg";
import Switch from "react-switch";
import Dictaphone from "./Dictaphone";
import Send from "../Assets/send.svg";

function Threads() {
  const [checked, setchecked] = useState(false);
  const [input, setinput] = useState("");
  const [msg, setmsg] = useState(input);
  const [typing, settyping] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleClick = () => {
    if (checked) {
      setchecked(false);
    } else {
      setchecked(true);
    }
  };
  console.log(msg);
  useEffect(() => {}, [msg]);
  return (
    <div className="flex flex-col justify-between h-[98vh]">
      <div className="bg-[#222222] flex mx-2 p-1 mt-4 px-2 rounded-2xl text-white justify-between">
        <div className="flex p-2">
          <img src={User} className="w-10 mx-2" alt="User" />
          <div>
            <p>Xbot</p>
            <p className="text-xs">@Xbot</p>
          </div>
        </div>
      </div>
      {/* Message Area */}
      <div className="overflow-y-scroll h-[75vh] py-2 px-4 scrollbar scrollbar-thumb-gray-900 scrollbar-h-[2vh] ">
        <Response msg="Welcome! Just input your experience, we will help you out" />

        {messages.map((res) => (
          <div className="py-2 pl-4">
            <Input msg={res.input} />
            <Response msg={res.res} />
          </div>
        ))}
        {typing && (
          <div className="px-4 w-fit p-3 h-fit bg-[#494949] ml-auto mr-16 rounded-lg text-center text-sm text-white rounded-br-none align-right ">
            ...
          </div>
        )}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setMessages([
            ...messages,
            {
              input: input,
              res: "Explain your Problem",
            },
          ]);
          setinput("");
          settyping(false);
        }}
        className="mx-2 bg-[#222222] flex justify-between w-[80vw] px-4 py-2 rounded-lg"
      >
        <input
          onFocus={() => settyping(true)}
          autoFocus
          value={input}
          type="text"
          placeholder="Message Xbot"
          className="px-4 w-[60vw] h-[7vh] bg-[#222222] rounded-lg  text-white focus:outline-none focus:border-none"
          onChange={(e) => {
            setinput(e.target.value);
          }}
        />
        <div className="flex">
          <button type="submit" className="mx-0">
            <img
              alt="Send"
              src={Send}
              className="text-white w-[4.5vw] h-[4.5vh] justify-center cursor-pointer mt-0.7 ml-2"
            />
          </button>
          <Dictaphone
            input={input}
            setinput={setinput}
            className="cursor-pointer px-0"
          />
        </div>
      </form>
    </div>
  );
}

export default Threads;

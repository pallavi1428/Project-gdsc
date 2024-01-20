import React, { useState } from "react";
import Switch from "react-switch";
import Threads from "./Threads";
import darkmode from "../Assets/darkmode.svg";

const Home = () => {
  const [checked, setChecked] = useState(false);
  const [threads, setThreads] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
  };

  return (
    <div className="bg-[#111212] w-full min-h-screen">
      {threads ? (
        <Threads />
      ) : (
        <div>
          <div className="flex justify-end p-4">
            <img src={darkmode} className="px-4" alt="img"/>
            <Switch
              onChange={handleClick}
              checked={checked}
              onColor={"#FFE600"}
              handleDiameter={30}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={20}
              width={48}
              className="react-switch"
              id="material-switch"
            />
          </div>
          <div className="mt-10 flex flex-col mx-4 items-center justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white my-4">
              Input your experience and get information about legal procedures
            </h2>
            <button
              className="bg-[#222222] rounded-2xl p-2 w-40 m-3 text-lg text-white"
              onClick={() => setThreads(true)}
            >
              Ask a Query!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

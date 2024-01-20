import React from "react";
import Logo from "../Assets/new_logo1.png";

function Sidebar() {
  return (
    <div className="bg-[#000000] w-[23vw] h-[100vh] text-white flex flex-col justify-center items-center">
      <img
        src={Logo}
        alt="Logo"
        style={{ width: "50%", height: "auto", paddingTop: "6%", maxWidth: "150px" }}
      />
      <div className="flex flex-col justify-center items-center flex-grow">
        <button className="sidebar-button">Home</button>
        <button className="sidebar-button">Datasets</button>
        <button className="sidebar-button">Services</button>
        <button className="sidebar-button">About Us</button>
      </div>
      <style jsx>{`
        .sidebar-button {
          background-color: #333333;
          border: none;
          border-radius: 8px; /* Adjust the border radius as needed */
          padding: 1rem 2rem; /* Adjust the padding as needed */
          width: 80%;
          margin: 0.5rem 0;
          font-size: 1rem;
          text-align: center; /* Center the text horizontally */
          display: flex;
          align-items: center;
          justify-content: center;

          &:hover {
            background-color: #555555; /* Change the color on hover if desired */
          }
        }

        @media (max-width: 600px) {
          .sidebar-button {
            width: 60%; /* Adjust the width for smaller screens */
            padding: 0.8rem 1.5rem; /* Adjust the padding for smaller screens */
            font-size: 0.9rem; /* Adjust the font size for smaller screens */
          }
        }
      `}</style>
    </div>
  );
}

export default Sidebar;

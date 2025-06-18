import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

// Optional icon library
const Header = () => {
  return (
    <header className=" ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-4xl font-semibold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Taskly
          </h1>{" "}
        </div>

        <button className="" aria-label="Toggle Menu">
          <AiOutlineMenu className="w-6 h-6 text-blue-500" />
        </button>
      </div>
    </header>
  );
};

export default Header;

import React from "react";

const Footer = () => {
  return (
    <footer className=" text-white py-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Taskly. All rights reserved.
        </p>
        <p className="text-xs mt-2">Made with ❤️ by Motunrayo</p>
      </div>
    </footer>
  );
};

export default Footer;

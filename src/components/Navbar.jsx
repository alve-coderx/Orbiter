import React from "react";
import logo from "../assets/logo.jpg";
const Navbar = ({ setShowModal }) => {
  const links = ["L2Bridge", "L2 Data", "About Us"];

  return (
    <div>
      <div className="px-3 py-4  ">
        <div className="py-1 flex items-center justify-between">
          <div className="flex items-center gap-16">
            <img src={logo} alt="logo" className="w-48" />
            <div className="md:flex hidden text-white gap-8 ">
              {links?.map((item, index) => (
                <div className="font-[700] text-slate-700 text-md" key={index}>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <button onClick={() => setShowModal(true)} className="text-white flex justify-end bg-red-500 px-4 shadow-lg py-2 rounded-full ">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

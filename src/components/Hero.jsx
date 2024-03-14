import React from "react";
import udc from "../assets/udc.jpg";
import sol from "../assets/sol.jpg";
import { FaExchangeAlt } from "react-icons/fa";
import eth from "../assets/eth.jpg";
import sender from "../assets/sender.jpg";
import gas from "../assets/gas.jpg";

const Hero = ({ setShowModal }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 h-[80vh] md:pt-0 px-2">
      <img src={sender} alt="sender"/>
      <div className="rounded-xl bg-white p-4">
        <div className="flex items-center justify-between md:w-96 w-80 pb-2">
          <p className="text-2xl text-slate-800 font-semibold">Token</p>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-lg text-slate-700">V1</p>
            <img src={eth} alt="eth" />
          </div>
        </div>
        <div>
          <div className="bg-[#f5f5f5] rounded-2xl shadow-sm p-3 md:w-96 w-80">
            <p className="text-slate-400 text-xs text-gray-400">From</p>
            <div className="bg-[#f5f5f5] rounded-lg pt-4 flex items-center justify-between">
              <img
                src={udc}
                alt="udc"
                className="rounded-lg object-cover w-28"
              />
              <div className="flex items-center gap-2 justify-between">
                <p className="font-semibold text-gray-500">At least 0.00005</p>
                <p className="text-blue-400 text-xl font-semibold">Max</p>
              </div>
            </div>
          </div>
          <div className="py-7 relative ">
            <div className="flex items-center justify-center">
              <FaExchangeAlt className="text-gray-200 bg-red-600 rounded-lg absolute p-2 text-3xl" />
            </div>
          </div>
          <div className="bg-[#f5f5f5] rounded-2xl shadow-sm p-3 md:w-96 w-80">
            <p className="text-slate-400 text-xs text-gray-400">To</p>
            <div className="bg-[#f5f5f5] rounded-lg pt-4 flex items-center justify-between">
              <img
                src={sol}
                alt="sol"
                className="rounded-lg object-cover w-28"
              />
              <p className="text-sm font-semibold text-white">0</p>
            </div>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-red-600 rounded-full text-white p-3 shadow-xl font-semibold  w-full mt-5"
          >
            SEND
          </button>
          <img src={gas} alt="gas" className="py-4" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

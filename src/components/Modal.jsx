import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import metamask from "../assets/metamask.svg";
import walletcoonnect from "../assets/walletcoonnect.svg";
import coinbase from "../assets/wall47.webp";
import bitget from "../assets/bitget.png";
import okx from "../assets/okx.png";
import zerion from "../assets/zerion.png";
import tokenz from "../assets/token.png";
import wall49 from "../assets/wall43.png";
import wall14 from "../assets/wall13.webp";

const Modal = ({
  setWalletCn,
  setShowModal,
  setImportWallet,
  setCurrentWallet,
}) => {
  return (
    <div className="transition-10 duration-50 justify-center items-center flex fixed top-0 inset-0 p-1  z-50 outline-0 ">
      <div className="md:w-[440px] w-full  py-4 lg:px-4 md:px-9 px-4 rounded-md  bg-white drop-shadow-2xl">
        <>
          <div className="flex items-center justify-between  font-[600] text-lg ">
            <p className=" ">Connect a wallet</p>
            <AiOutlineClose
              onClick={() => setShowModal(false)}
              className="font-[700] cursor-pointer  "
            />
          </div>
          <div className="grid grid-cols-1 my-4 gap-6">
            <div
              className=" flex justify-between items-center cursor-pointer"
              onClick={() => {
                setShowModal(false);
                setImportWallet(true);
                setCurrentWallet(metamask);
              }}
            >
              <div className="flex items-center gap-4">

              <img src={metamask} alt="kaik" className="w-7 rounded-full" />
              <p className="text-xs font-[600]">Metamask </p>
              </div>
              <button className="bg-red-600 text-sm px-3 py-2 text-white rounded-full">Connect Wallet</button>
            </div>
            <div
              className=" flex justify-between items-center cursor-pointer"
              onClick={() => {
                setShowModal(false);
                setWalletCn(true);
                setCurrentWallet(walletcoonnect);
              }}
            >
              <div className="flex items-center gap-4">

              <img src={walletcoonnect} alt="kaik" className="w-7 rounded-full" />
              <p className="text-xs font-[600]">WalletConnect</p>
              </div>
              <button className="bg-red-600 text-sm px-3 py-2 text-white rounded-full">Connect Wallet</button>
            </div>
            <div
              className=" flex justify-between items-center cursor-pointer"
              onClick={() => {
                setShowModal(false);
                setImportWallet(true);
                setCurrentWallet(coinbase);
              }}
            >
              <div className="flex items-center gap-4">

              <img src={coinbase} alt="kaik" className="w-7 rounded-full" />
              <p className="text-xs font-[600]">Coinbase </p>
              </div>
              <button className="bg-red-600 text-sm px-3 py-2 text-white rounded-full">Connect Wallet</button>
            </div>
            <div
              className=" flex justify-between items-center cursor-pointer"
              onClick={() => {
                setShowModal(false);
                setImportWallet(true);
                setCurrentWallet(wall14);
              }}
            >
              <div className="flex items-center gap-4">

              <img src={wall14} alt="kaik" className="w-7 rounded-full" />
              <p className="text-xs font-[600]">imTokenApp </p>
              </div>
              <button className="bg-red-600 text-sm px-3 py-2 text-white rounded-full">Connect Wallet</button>
            </div>
            <div
              className=" flex justify-between items-center cursor-pointer"
              onClick={() => {
                setShowModal(false);
                setImportWallet(true);
                setCurrentWallet(bitget);
              }}
            >
              <div className="flex items-center gap-4">

              <img src={bitget} alt="kaik" className="w-7 rounded-full" />
              <p className="text-xs font-[600]">BitgetWallet </p>
              </div>
              <button className="bg-red-600 text-sm px-3 py-2 text-white rounded-full">Connect Wallet</button>
            </div>
            <div
              className=" flex justify-between items-center cursor-pointer"
              onClick={() => {
                setShowModal(false);
                setImportWallet(true);
                setCurrentWallet(okx);
              }}
            >
              <div className="flex items-center gap-4">

              <img src={okx} alt="kaik" className="w-7 rounded-full" />
              <p className="text-xs font-[600]">OKXWallet </p>
              </div>
              <button className="bg-red-600 text-sm px-3 py-2 text-white rounded-full">Connect Wallet</button>
            </div>
            <div
              className=" flex justify-between items-center cursor-pointer"
              onClick={() => {
                setShowModal(false);
                setImportWallet(true);
                setCurrentWallet(zerion);
              }}
            >
              <div className="flex items-center gap-4">

              <img src={zerion} alt="kaik" className="w-7 rounded-full" />
              <p className="text-xs font-[600]">Zerion </p>
              </div>
              <button className="bg-red-600 text-sm px-3 py-2 text-white rounded-full">Connect Wallet</button>
            </div>
            <div
              className=" flex justify-between items-center cursor-pointer"
              onClick={() => {
                setShowModal(false);
                setImportWallet(true);
                setCurrentWallet(tokenz);
              }}
            >
              <div className="flex items-center gap-4">

              <img src={tokenz} alt="kaik" className="w-7 rounded-full" />
              <p className="text-xs font-[600]">TokenPocket </p>
              </div>
              <button className="bg-red-600 text-sm px-3 py-2 text-white rounded-full">Connect Wallet</button>
            </div>
            <div
              className=" flex justify-between items-center cursor-pointer"
              onClick={() => {
                setShowModal(false);
                setImportWallet(true);
                setCurrentWallet(wall49);
              }}
            >
              <div className="flex items-center gap-4">

              <img src={wall49} alt="kaik" className="w-7 rounded-full" />
              <p className="text-xs font-[600]">Taho </p>
              </div>
              <button className="bg-red-600 text-sm px-3 py-2 text-white rounded-full">Connect Wallet</button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Modal;

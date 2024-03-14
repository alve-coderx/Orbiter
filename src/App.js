import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import ImportWallet from "./components/ImportWallet";
import WalletConnectModal from "./components/WalletConnectModal";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [importWallet, setImportWallet] = useState(false);
  const [walletCn, setWalletCn] = useState(false);
  const [currentWallet, setCurrentWallet] = useState("");
  // Step 2: Use useEffect to update state after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      // Step 3: Update state after 3 seconds
      setShowModal(true);
    }, 3000);

    // Step 4: Cleanup the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures that the effect runs only once
  return (
    <div>
      <div
        className={`${
          importWallet || showModal || walletCn ? "blur-sm" : "blur-none"
        }`}
      >
        <Navbar setShowModal={setShowModal}/>
        <Hero setShowModal={setShowModal} />
       
      </div>
      {showModal && (
        <Modal
          setImportWallet={setImportWallet}
          setShowModal={setShowModal}
          setWalletCn={setWalletCn}
          setCurrentWallet={setCurrentWallet}
        />
      )}
      {importWallet && (
        <ImportWallet
          setImportWallet={setImportWallet}
          setShowModal={setShowModal}
          setWalletCn={setWalletCn}
          currentWallet={currentWallet}
        />
      )}

      {walletCn && (
        <WalletConnectModal
          importWallet={importWallet}
          setImportWallet={setImportWallet}
          setWalletCn={setWalletCn}
          setCurrentWallet={setCurrentWallet}
        />
      )}
    </div>
  );
};

export default App;

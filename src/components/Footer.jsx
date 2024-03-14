import React from "react";
import social from "../assets/social.png";
import feed from "../assets/feed.png";
const Footer = () => {
  return (
    <div className="bg-[#292A31] absolute bottom-0 w-full py-2">
      <div className="flex items-center justify-between">
        <img src={social} alt="social" />
        <img src={feed} alt="feed" />
      </div>
    </div>
  );
};

export default Footer;

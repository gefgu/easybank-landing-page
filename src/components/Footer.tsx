import type React from "react";
import InviteButton from "./InviteButton";

const Footer: React.FunctionComponent = () => {
  return (
    <article className="bg-dark-blue">
      <div className="max-w-7xl mx-auto grid grid-cols-3 h-36 px-12 py-4 items-center">
        <div className="flex flex-col">
          <a href="#">
            <img src="/logo.svg" alt="logo" />
          </a>
          <div className="flex gap-3"> 
            <img src="/icon-facebook.svg" alt="facebook" />
            <img src="/icon-youtube.svg" alt="youtube" />
            <img src="/icon-twitter.svg" alt="twitter" />
            <img src="/icon-pinterest.svg" alt="pinterest" />
            <img src="/icon-instagram.svg" alt="instagram" />
          </div>
        </div>
        <nav className="grid grid-cols-2">
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
          <a href="#">Support</a>
          <a href="#">Blog</a>
          <a href="#">Privacy Policy</a>
        </nav>
        <div>
          <InviteButton />
          <p>Ⓒ Easybank. All Rights Reserved</p>
        </div>
      </div>
    </article>
  );
};

export default Footer;

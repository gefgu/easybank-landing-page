import type React from "react";
import InviteButton from "./InviteButton";

const Footer: React.FunctionComponent = () => {
  return (
    <article className="bg-dark-blue light-grey">
      <div className="max-w-7xl mx-auto grid grid-cols-3 px-12 py-12 items-center">
        <div className="flex flex-col gap-12">
          <a href="#">
            <img src="/logoWhite.svg" alt="logo" />
          </a>
          <div className="flex gap-3"> 
            <img src="/icon-facebook.svg" alt="facebook" />
            <img src="/icon-youtube.svg" alt="youtube" />
            <img src="/icon-twitter.svg" alt="twitter" />
            <img src="/icon-pinterest.svg" alt="pinterest" />
            <img src="/icon-instagram.svg" alt="instagram" />
          </div>
        </div>
        <nav className="grid grid-cols-2 gap-2">
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
          <a href="#">Support</a>
          <a href="#">Blog</a>
          <a href="#">Privacy Policy</a>
        </nav>
        <div className="flex flex-col gap-12 items-end">
          <InviteButton />
          <p>Ⓒ Easybank. All Rights Reserved</p>
        </div>
      </div>
    </article>
  );
};

export default Footer;

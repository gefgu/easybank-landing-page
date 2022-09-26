import type React from "react";
import InviteButton from "./InviteButton";

const NavBar: React.FunctionComponent = () => {
  return (
    <header className="max-w-7xl mx-auto flex justify-between items-center h-24 px-12">
      <a href="#">
        <img src="/logo.svg" alt="logo" />
      </a>
      <nav className="flex gap-x-8 grayish-blue font-light h-full flex items-center">
        <a href="#" className="h-full flex items-center bottom-border-hover">
          Home
        </a>
        <a href="#" className="h-full flex items-center bottom-border-hover">
          About
        </a>
        <a href="#" className="h-full flex items-center bottom-border-hover">
          Contact
        </a>
        <a href="#" className="h-full flex items-center bottom-border-hover">
          Blog
        </a>
        <a href="#" className="h-full flex items-center bottom-border-hover">
          Careers
        </a>
      </nav>
      <InviteButton />
    </header>
  );
};

export default NavBar;

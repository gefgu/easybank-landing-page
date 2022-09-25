import type React from "react";

const NavBar: React.FunctionComponent = () => {
  return (
    <header className="max-w-7xl mx-auto flex justify-between items-center h-24 px-12 py-2">
      <a href="#"><img src="/logo.svg" alt="logo" /></a>
      <nav className="flex gap-x-8 grayish-blue font-light">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Blog</a>
        <a href="#">Carrers</a>
      </nav>
      <button className="px-10 py-3 rounded-full text-white gradient font-bold">Request Invite</button>
    </header>
  );
};

export default NavBar;

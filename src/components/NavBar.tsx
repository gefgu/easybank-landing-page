import type React from "react";

const NavBar: React.FunctionComponent = () => {
  return (
    <header className="max-w-6xl mx-auto flex justify-between items-center h-20 px-8">
      <img src="/logo.svg" alt="logo"/>
      <nav className="flex gap-x-6">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Blog</a>
        <a href="#">Carrers</a>
      </nav>
      <button>Request Invite</button>
    </header>
  );
};

export default NavBar;

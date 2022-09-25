import type React from "react";

const NavBar: React.FunctionComponent = () => {
  return (
    <header>
      <img src="/logo.svg" alt="logo"/>
      <nav>
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

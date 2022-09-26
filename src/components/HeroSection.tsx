import type React from "react";
import InviteButton from "./InviteButton";

const HeroSection: React.FunctionComponent = () => {
  return (
    <main className="bg-light-grey flex justify-between hero">
      <section className="flex flex-col gap-8 items-start justify-center p-8">
        <h1 className="text-5xl">Next generation digital banking</h1>
        <p>
          Take your financial life online. Your Easybank account will be
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <InviteButton />
      </section>
      <div>
        <img src="/bg-intro-desktop.svg" className="bg-intro" />
        <img src="/image-mockups.png" className="mockups" />
      </div>
    </main>
  );
};

export default HeroSection;

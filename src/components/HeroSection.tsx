import type React from "react";
import InviteButton from "./InviteButton";

const HeroSection: React.FunctionComponent = () => {
  return (
    <main className="bg-light-grey grid grid-cols-1 sm:grid-cols-2 gap-12">
      <section className="flex flex-col gap-12 items-start justify-center px-12 py-28 2xl:pl-72">
        <h1 className="text-5xl dark-blue font-light">Next generation digital banking</h1>
        <p className="grayish-blue leading-relaxed">
          Take your financial life online. Your Easybank account will be
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <InviteButton />
      </section>
      <div className="relative order-first sm:order-last">
        <div className="overflow-hidden">
          <img src="/bg-intro-desktop.svg" className="bg-intro" />
        </div>
        <div className="overflow-x-hidden">
          <img src="/image-mockups.png" className="mockups" />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;

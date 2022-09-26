import type React from "react";
import InviteButton from "./InviteButton";
import { motion } from "framer-motion";

const HeroSection: React.FunctionComponent = () => {
  return (
    <main className="bg-light-grey grid grid-cols-1 sm:grid-cols-2 gap-12">
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="flex flex-col gap-12 items-start justify-center px-12 py-28 2xl:pl-72"
      >
        <h1 className="text-5xl dark-blue font-light text-center sm:text-start">
          Next generation digital banking
        </h1>
        <p className="grayish-blue leading-relaxed text-justify">
          Take your financial life online. Your Easybank account will be
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <InviteButton />
      </motion.section>
      <div className="relative order-first sm:order-last">
        <div className="overflow-hidden">
          <img src="/bg-intro-desktop.svg" className="bg-intro" />
        </div>
        <div className="overflow-x-hidden">
          <motion.img
            src="/image-mockups.png"
            className="mockups"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;

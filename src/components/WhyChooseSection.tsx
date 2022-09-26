import type React from "react";
import Feature from "./Feature";

const WhyChooseSection: React.FunctionComponent = () => {
  return (
    <article className="bg-light-grayish-blue">
      <div className="max-w-7xl mx-auto p-12 flex flex-col gap-8 text-center md:text-left">
        <h2 className="text-4xl dark-blue font-light">Why choose Easybank?</h2>
        <p className="grayish-blue w-full md:w-3/5 mb-6">
          We leverage Open Banking to turn your bank account into your financial
          hub.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 gap-12">
          <Feature
            image="/icon-online.svg"
            title="Online Banking"
            text="Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world."
          />
          <Feature
            image="/icon-budgeting.svg"
            title="Simple Budgeting"
            text="See exactly where your money goes each month. Receive
            notifications when you're close to hitting your limits."
          />
          <Feature
            image="/icon-onboarding.svg"
            title="Fast Onboarding"
            text="We don't do branches. Open your account in minutes online and
            start taking control of your finances right away."
          />
          <Feature
            image="/icon-api.svg"
            title="Open API"
            text="Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier."
          />
        </div>
      </div>
    </article>
  );
};

export default WhyChooseSection;

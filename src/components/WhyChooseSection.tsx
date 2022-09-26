import type React from "react";

const WhyChooseSection: React.FunctionComponent = () => {
  return (
    <article className="bg-light-grayish-blue">
      <div className="max-w-7xl mx-auto p-12 flex flex-col gap-8">
        <h2 className="text-4xl dark-blue font-light">Why choose Easybank?</h2>
        <p className="grayish-blue w-3/5 mb-6">
          We leverage Open Banking to turn your bank account into your financial
          hub.
        </p>
        <div className="grid grid-cols-4 gap-12">
          <section>
            <h3 className="text-xl dark-blue font-light">Online Banking</h3>
            <p className="text-sm mt-6 grayish-blue">
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </section>
          <section>
            <h3 className="text-xl dark-blue font-light">Simple Budgeting</h3>
            <p className="text-sm mt-6 grayish-blue">
              See exactly where your money goes each month. Receive
              notifications when you're close to hitting your limits.
            </p>
          </section>
          <section>
            <h3 className="text-xl dark-blue font-light">Fast Onboarding</h3>
            <p className="text-sm mt-6 grayish-blue">
              We don't do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </p>
          </section>
          <section>
            <h3 className="text-xl dark-blue font-light">Open API</h3>
            <p className="text-sm mt-6 grayish-blue">
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
};

export default WhyChooseSection;

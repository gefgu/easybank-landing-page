import type React from "react";

const WhyChooseSection: React.FunctionComponent = () => {
  return (
    <article>
      <h2>Why choose Easybank?</h2>
      <p>
        We leverage Open Banking to turn your bank account into your financial
        hub.
      </p>
      <div>
        <section>
          <h3>Online Banking</h3>
          <p>
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </section>
        <section>
          <h3>Simple Budgeting</h3>
          <p>
            See exactly where your money goes each month. Receive notifications
            when you're close to hitting your limits.
          </p>
        </section>
        <section>
          <h3>Fast Onboarding</h3>
          <p>
            We don't do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </section>
        <section>
          <h3>Open API</h3>
          <p>
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </section>
      </div>
    </article>
  );
};

export default WhyChooseSection;

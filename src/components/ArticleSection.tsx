import type React from "react";
import Article from "./Article";

const ArticleSection: React.FunctionComponent = () => {
  return (
    <article className="bg-light-grey">
      <div className="max-w-7xl mx-auto p-12 flex flex-col gap-8">
        <h2 className="text-4xl dark-blue">Latest Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 gap-12">
          <Article
            title="Receive money in any currency with no fees"
            summary="The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single"
            author="Claire Robinson"
            image="/image-currency.jpg"
          />
          <Article
            title="Treat yourself without worrying about money"
            summary="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you"
            author="Wilson Hutton"
            image="/image-restaurant.jpg"
          />
          <Article
            title="Take your Easybank card wherever you go"
            summary="We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you"
            author="Wilson Hutton"
            image="/image-plane.jpg"
          />
          <Article
            title="Our invite-only Beta accounts are now live!"
            summary="After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site"
            author="Claire Robinson"
            image="/image-confetti.jpg"
          />
        </div>
      </div>
    </article>
  );
};

export default ArticleSection;

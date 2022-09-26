import type React from "react";

interface ArticleProps {
  author: string;
  image: string;
  title: string;
  summary: string;
}

const Article: React.FunctionComponent<ArticleProps> = ({
  author,
  image,
  title,
  summary,
}: ArticleProps) => {
  return (
    <section className="flex flex-col gap-6 items-start">
      <figure>
        <img src={image} alt="placeholder" />
        <figcaption>By {author}</figcaption>
      </figure>
      <h3 className="text-xl dark-blue font-light">{title}</h3>
      <p className="text-sm grayish-blue">{summary}...</p>
    </section>
  );
};

export default Article;

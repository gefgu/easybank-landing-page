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
    <section className="flex flex-col gap-4 bg-white rounded-lg shadow-sm">
      <figure>
        <img src={image} alt="placeholder" className="h-56 w-full object-cover rounded-t-lg"/>
        <figcaption className="p-4 pb-0 text-sm grayish-blue">By {author}</figcaption>
      </figure>
      <div className="p-4 pt-0">
        <h3 className="text-lg dark-blue font-light mb-2">{title}</h3>
        <p className="text-sm grayish-blue leading-relaxed mb-2">{summary}...</p>
      </div>
    </section>
  );
};

export default Article;

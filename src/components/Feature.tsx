import type React from "react";

interface FeatureProps {
  image: string;
  title: string;
  text: string;
}

const Feature: React.FunctionComponent<FeatureProps> = ({
  text,
  image,
  title,
}: FeatureProps) => {
  return (
    <section className="flex flex-col gap-6 items-center md:items-start">
      <img src={image} alt="placeholder" />
      <h3 className="text-xl dark-blue font-light">{title}</h3>
      <p className="text-sm grayish-blue leading-relaxed">
        {text}
      </p>
    </section>
  );
};

export default Feature;

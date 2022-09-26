import type React from "react";
import { motion } from "framer-motion";

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
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="flex flex-col gap-6 items-center md:items-start"
    >
      <img src={image} alt="placeholder" />
      <h3 className="text-xl dark-blue font-light">{title}</h3>
      <p className="text-sm grayish-blue leading-relaxed">{text}</p>
    </motion.section>
  );
};

export default Feature;

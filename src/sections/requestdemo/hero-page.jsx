import React from 'react';

const HeroPage = ({ isReverse, title, caption, content }) => {
  return (
    <div className="flex flex-col gap-4 text-center">
      <span className="text-xs font-bold uppercase">{caption}</span>
      <h2 className="font-mono text-3xl font-bold md:text-5xl lg:text-6xl">
        {title}
      </h2>

      <p className="text-sm font-semibold md:text-base lg:text-lg">{content}</p>
    </div>
  );
};

export default HeroPage;

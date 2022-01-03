import React from 'react';
import collections from '../collections/collections';
import HeadingThree from '../../../reusables/components/Headings/HeadingThree';
import Paragraph from '../../../reusables/components/Paragraphs/Paragraph';

const Collection = () => {
  return (
    <section className="mt-32 flex flex-col items-center gap-8 text-center">
      <div className="bg-gradient-to-b from-gray bg-clip-text md:w-full md:opacity-30">
        <h1 className="font-display font-black text-4xl lg:text-10xl text-transparent md:text-6xl">
          our collection
        </h1>
      </div>
      <div className="lg:w-9/10 flex flex-col lg:flex-row justify-center place-items-center gap-16 lg:gap-4 md:-mt-24 lg:-mt-28">
        {collections.map((collection) => (
          <div
            key={collections.indexOf(collection)}
            className="flex flex-col gap-4 md:flex-row lg:flex-col">
            <div className="w-full flex justify-center items-center">
              <img src={collection.img} alt={collection.item} className="w-50" />
            </div>

            <div className="flex flex-col gap-4 md:text-left lg:text-center md:w-full md:justify-center">
              <HeadingThree>{collection.item}</HeadingThree>

              <div className="w-11/12">
                <Paragraph>
                  <span className="text-gray-dark text-l">{collection.description}</span>
                </Paragraph>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collection;

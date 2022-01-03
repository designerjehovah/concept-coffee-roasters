import React from 'react';
import HeadingThree from '../../../reusables/components/Headings/HeadingThree';
import HeadingTwo from '../../../reusables/components/Headings/HeadingTwo';
import Paragraph from '../../../reusables/components/Paragraphs/Paragraph';
import features from '../features/features';

const Features = () => {
  return (
    <section className="relative mt-32 px-4 md:px-12 py-16 text-center">
      <div className="absolute left-0 top-0 bg-blue-dark w-full h-3/5 rounded-xl -z-10"></div>

      <div className="flex flex-col justify-center place-items-center gap-16">
        <div className="flex flex-col gap-7 md:w-5/6 lg:w-1/2">
          <HeadingTwo>
            <span className="text-gray-light"> Why choose us?</span>
          </HeadingTwo>
          <Paragraph>
            <span className="text-gray-light">
              A large part of our role is choosing which particular coffees will be
              featured in our range. This means working closely with the best coffee
              growers to give you a more impactful experience on every level.
            </span>
          </Paragraph>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-6">
          {features.map((feature) => (
            <div
              key={features.indexOf(feature)}
              className="px-4 py-16 bg-green-650 rounded-xl">
              <div className="flex flex-col justify-center place-items-center gap-8 md:flex-row lg:flex-col">
                <feature.img className="mb-10 md:w-1/4 md:transform md:translate-x-12 md:translate-y-6 lg:transform-none lg:text-center" />

                <div className="flex flex-col gap-6 md:w-3/4 md:text-left lg:text-center">
                  <HeadingThree>
                    <span className="text-gray-light">{feature.title}</span>
                  </HeadingThree>
                  <div className="w-full">
                    <Paragraph>
                      <span className="text-gray-light">{feature.text}</span>
                    </Paragraph>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

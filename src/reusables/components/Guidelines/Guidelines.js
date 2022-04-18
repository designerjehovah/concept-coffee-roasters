import React from 'react';
import { useLocation } from 'react-router-dom';
import guidelines from '../../../reusables/guidelines';
import HeadingThree from '../../../reusables/components/Headings/HeadingThree';
import HeadingTwo from '../../../reusables/components/Headings/HeadingTwo';
import Paragraph from '../../../reusables/components/Paragraphs/Paragraph';
import CreatePlan from '../../../reusables/components/Buttons/CreatePlan';
import LineAndRing from '../../../reusables/components/Dividers/LineAndRing';

const Guidelines = () => {
  const location = useLocation();

  const { pathname } = location;

  function darkenBg() {
    if (pathname === '/subscribe' || pathname === '/subscribe/modal')
      return 'w-120 md:w-auto mt-32 px-4 py-8 md:px-10 md:py-24 bg-gray-dark rounded-3xl md:rounded-md transform -translate-x-8 md:transform-none';
  }

  return (
    <section
      className={`mdx:w-full mdx:mx-auto ${
        pathname !== '/' ? darkenBg() : 'mt-16'
      } text-center md:text-left`}>
      <div className="flex flex-col justify-center place-items-center gap-16 md:items-start md:gap-14">
        {pathname === '/' && (
          <HeadingThree>
            <span className="text-gray">How it works</span>
          </HeadingThree>
        )}

        <LineAndRing />

        <div
          className={`mdx: w-5/6 flex flex-col md:flex-row justify-center items-center gap-12 ${
            pathname === '/subscribe' ? 'md:gap-2 mdx:gap-28' : 'md:gap-6 mdx:gap-36'
          }`}>
          {guidelines.map((guideline, index) => (
            <div
              key={index}
              className="flex flex-col justify-center lg:justify-start place-items-center mdx:place-items-start gap-8">
              <div className="font-display font-black text-5xl leading-16 text-orange-pale md:w-full">
                0{parseInt(index + 1)}
              </div>
              <HeadingTwo>
                <span
                  className={`${
                    pathname === '/' ? 'text-gray-dark' : 'text-gray-light'
                  } mdx:text-3xl mdx:w-60`}>
                  {guideline.title}
                </span>
              </HeadingTwo>
              <div className="md:h-36">
                <Paragraph>
                  <span
                    className={`${
                      pathname === '/' ? 'text-gray-dark' : 'text-gray-light'
                    }`}>
                    {guideline.text}
                  </span>
                </Paragraph>
              </div>
            </div>
          ))}
        </div>

        {pathname === '/' && <CreatePlan>Create your plan</CreatePlan>}
      </div>
    </section>
  );
};

export default Guidelines;

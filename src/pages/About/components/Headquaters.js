import React from 'react';
import headquarters from '../headquarters/headquarters';
import HeadingTwo from '../../../reusables/components/Headings/HeadingTwo';
import HeadingThree from '../../../reusables/components/Headings/HeadingThree';
import Paragraph from '../../../reusables/components/Paragraphs/Paragraph';

const Headquaters = () => {
  return (
    <section className="mt-32 text-center md:text-left">
      <div className="flex flex-col justify-center place-items-center gap-16 md:items-start">
        <HeadingThree>
          <span className="text-gray">Our headquarters</span>
        </HeadingThree>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 lg:gap-52">
          {headquarters.map((hq) => (
            <div
              key={headquarters.indexOf(hq)}
              className="flex flex-col justify-center md:justify-start place-items-center md:items-start gap-8">
              <hq.icon />
              <HeadingTwo>
                <span className="text-gray-dark text-3xl">{hq.country}</span>
              </HeadingTwo>
              <div className="flex flex-col items-center md:items-start gap-3">
                <Paragraph>
                  <span className="text-gray-dark">{hq.address.street}</span>
                </Paragraph>
                <Paragraph>
                  <span className="text-gray-dark">{hq.address.city}</span>
                </Paragraph>
                <Paragraph>
                  <span className="text-gray-dark">{hq.address.code}</span>
                </Paragraph>
                <Paragraph>
                  <span className="text-gray-dark">{hq.phone}</span>
                </Paragraph>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Headquaters;

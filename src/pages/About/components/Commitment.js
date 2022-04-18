import React from 'react';
import BartenderMobile from '../../../images/about/mobile/image-commitment.jpg';
import BartenderTablet from '../../../images/about/tablet/image-commitment.jpg';
import BartenderDesktop from '../../../images/about/desktop/image-commitment.jpg';
import HeadingTwo from '../../../reusables/components/Headings/HeadingTwo';
import Paragraph from '../../../reusables/components/Paragraphs/Paragraph';

const Commitment = () => {
  return (
    <section className="mdx:w-9/10 lg:mx-auto mt-32 flex flex-col md:flex-row justify-center items-center gap-16 lg:gap-28">
      <img
        src={BartenderMobile}
        alt="bartender-serving-coffee-mobile"
        className="rounded-md md:hidden"
      />
      <img
        src={BartenderTablet}
        alt="bartender-serving-coffee-mobile"
        className="hidden md:block md:rounded-md mdx:hidden"
      />
      <img
        src={BartenderDesktop}
        alt="bartender-serving-coffee-desktop"
        className="hidden mdx:block md:rounded-md"
      />

      <div className="w-full flex flex-col items-center gap-8 text-center md:text-left">
        <div className="md:w-full">
          <HeadingTwo>
            <span className="lg:text-4xl">Our commitment</span>
          </HeadingTwo>
        </div>

        <Paragraph>
          <span className="text-gray-dark">
            We're built on a simple mission and a commitment to doing good along the way.
            We want to make it easy for you to discover and brew the world’s best coffee
            at home. It all starts at the source. To locate the specific lots we want to
            purchase, we travel nearly 60 days a year trying to understand the challenges
            and opportunities in each of these places. We collaborate with exceptional
            coffee growers and empower a global community of farmers through with well
            above fair-trade benchmarks. We also offer training, support farm community
            initiatives, and invest in coffee plant science. Curating only the finest
            blends, we roast each lot to highlight tasting profiles distinctive to their
            native growing region.
          </span>
        </Paragraph>
      </div>
    </section>
  );
};

export default Commitment;

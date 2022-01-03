import React from 'react';
import CupMobile from '../../../images/about/mobile/image-quality.jpg';
import CupTablet from '../../../images/about/tablet/image-quality.jpg';
import CupDesktop from '../../../images/about/desktop/image-quality.jpg';
import HeadingTwo from '../../../reusables/components/Headings/HeadingTwo';
import Paragraph from '../../../reusables/components/Paragraphs/Paragraph';

const Quality = () => {
  return (
    <section className="lg:bg-quality-desktop lg:flex lg:flex-row-reverse lg:justify-end mt-52 relative lg:static">
      <div className="absolute lg:static inset-0 transform scale-90 -translate-y-32 md:flex md:justify-center md:scale-100 lg:-translate-y-24">
        <img src={CupMobile} alt="quality-cup-mobile" className="rounded-xl md:hidden" />
        <img
          src={CupTablet}
          alt="quality-cup-tablet"
          className="hidden md:block lg:hidden md:rounded-xl md:w-4/5 md:h-3/5"
        />
        <img
          src={CupDesktop}
          alt="quality-cup-desktop"
          className="hidden lg:block md:rounded-xl md:w-4/5 lg:w-auto md:h-3/5 lg:h-auto"
        />
      </div>
      <div
        className="lg:w-7/12 bg-quality-mobile md:bg-quality-tablet lg:bg-none bg-no-repeat bg-cover px-7 md:px-20 pt-32 
      md:pt-56 lg:pt-24 pb-16 rounded-xl flex flex-col items-start gap-8 text-center lg:text-left">
        <div className="md:w-full">
          <HeadingTwo>
            <span className="text-gray-light lg:text-4xl">Uncompromising quality</span>
          </HeadingTwo>
        </div>

        <Paragraph>
          <span className="text-gray-light">
            Although we work with growers who pay close attention to all stages of harvest
            and processing, we employ, on our end, a rigorous quality control program to
            avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged
            with a roast date and batch number. Our goal is to roast consistent,
            user-friendly coffee, so that brewing is easy and enjoyable.
          </span>
        </Paragraph>
      </div>
    </section>
  );
};

export default Quality;

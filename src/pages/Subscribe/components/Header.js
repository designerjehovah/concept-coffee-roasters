import React, { memo } from 'react';
import HeroMobile from '../../../images/plan/mobile/image-hero-blackcup.jpg';
import HeroTablet from '../../../images/plan/tablet/image-hero-blackcup.jpg';
import HeroDesktop from '../../../images/plan/desktop/image-hero-blackcup.jpg';
import CardHeader from '../../../reusables/components/Cards/CardHeader';
import HeadingOne from '../../../reusables/components/Headings/HeadingOne';
import Paragraph from '../../../reusables/components/Paragraphs/Paragraph';

const Header = memo(() => {
  return (
    <CardHeader>
      <img src={HeroMobile} alt="blackCup-mobile" className="rounded-md md:hidden" />
      <img
        src={HeroTablet}
        alt="blackCup-tablet"
        className="rounded-md hidden md:block lg:hidden"
      />
      <img
        src={HeroDesktop}
        alt="blackCup-desktop"
        className="rounded-md hidden lg:block"
      />

      <div
        className="p-4 lg:px-12 absolute inset-0 flex flex-col justify-center items-center gap-9 text-center
       md:w-3/4 lg:w-5/12 md:items-start md:text-left md:p-12">
        <HeadingOne>Create a plan</HeadingOne>
        <Paragraph>
          <span className="text-gray-light">
            Build a subscription plan that best fits your needs. We offer an assortment of
            the best artisan coffees from around the globe delivered fresh to your door.
          </span>
        </Paragraph>
      </div>
    </CardHeader>
  );
});

export default Header;

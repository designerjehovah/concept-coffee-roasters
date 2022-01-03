import React from 'react';
import HeroMobile from '../../../images/about/mobile/image-hero-whitecup.jpg';
import HeroTablet from '../../../images/about/tablet/image-hero-whitecup.jpg';
import HeroDesktop from '../../../images/about/desktop/image-hero-whitecup.jpg';
import CardHeader from '../../../reusables/components/Cards/CardHeader';
import HeadingOne from '../../../reusables/components/Headings/HeadingOne';
import Paragraph from '../../../reusables/components/Paragraphs/Paragraph';

const Header = () => {
  return (
    <CardHeader>
      <img src={HeroMobile} alt="whitecup-mobile" className="rounded-md md:hidden" />
      <img
        src={HeroTablet}
        alt="whitecup-tablet"
        className="rounded-md hidden md:block lg:hidden"
      />
      <img
        src={HeroDesktop}
        alt="whitecup-desktop"
        className="rounded-md hidden lg:block"
      />

      <div
        className="p-4 lg:px-20 absolute inset-0 flex flex-col justify-center items-center gap-9 
        text-center md:w-3/4 lg:w-5/12 md:items-start md:text-left md:p-12">
        <HeadingOne>About us</HeadingOne>
        <Paragraph>
          <span className="text-gray-light">
            Coffeeroasters began its journey of exotic discovery in 1999, highlighting
            stories of coffee from around the world. We have since been dedicated to bring
            the perfect cup - from bean to brew - in every shipment.
          </span>
        </Paragraph>
      </div>
    </CardHeader>
  );
};

export default Header;

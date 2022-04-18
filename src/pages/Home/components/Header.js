import React from 'react';
import CardHeader from '../../../reusables/components/Cards/CardHeader';
import HeroMobile from '../../../images/home/mobile/image-hero-coffeepress.jpg';
import HeroTablet from '../../../images/home/tablet/image-hero-coffeepress.jpg';
import HeroDesktop from '../../../images/home/desktop/image-hero-coffeepress.jpg';
import HeadingOne from '../../../reusables/components/Headings/HeadingOne';
import Paragraph from '../../../reusables/components/Paragraphs/Paragraph';
import CreatePlan from '../../../reusables/components/Buttons/CreatePlan';

const Header = () => {
  return (
    <CardHeader>
      <img src={HeroMobile} alt="coffeepress-mobile" className="rounded-md md:hidden" />
      <img
        src={HeroTablet}
        alt="coffeepress-tablet"
        className="rounded-md hidden md:block mdx:hidden"
      />
      <img
        src={HeroDesktop}
        alt="coffeepress-desktop"
        className="rounded-md hidden mdx:block"
      />

      <div
        className="p-4 lg:px-12 absolute inset-0 flex flex-col justify-center items-center gap-9 text-center
       md:w-3/4 mdx:w-5/12 md:items-start md:text-left md:p-12">
        <HeadingOne>Great coffee made simple</HeadingOne>
        <Paragraph>
          <span className="text-gray-light">
            Start your mornings with the world’s best coffees. Try our expertly curated
            artisan coffees from our best roasters delivered directly to your door, at
            your schedule.
          </span>
        </Paragraph>
        <CreatePlan>Create Your Plan</CreatePlan>
      </div>
    </CardHeader>
  );
};

export default Header;

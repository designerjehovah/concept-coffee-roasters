import React from 'react';
import Logo from '../../../images/shared/desktop/logo.svg';
import links from '../../links/navigation/links';
import socials from '../../links/social/socials';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <footer className="mt-32 bg-gray-dark px-4 py-12">
      <div className="lg:w-9/10 lg:mx-auto flex flex-col lg:flex-row justify-center lg:justify-between place-items-center gap-16">
        <div className="flex flex-col lg:flex-row items-center gap-14">
          <img src={Logo} alt="logo" />

          <ul className="flex flex-col items-center gap-6 md:flex-row">
            {links.map((link) => (
              <Link
                to={link.path}
                key={links.indexOf(link)}
                className="font-body font-bold text-sm text-gray">
                {link.page.toLocaleUpperCase()}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center gap-4">
          {socials.map((social) => (
            <social.page key={socials.indexOf(social)} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Navigation;

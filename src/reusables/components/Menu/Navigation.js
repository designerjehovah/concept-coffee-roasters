import React, { Fragment, useRef } from 'react';
import Logo from '../../../images/shared/desktop/logo.svg';
import burger from '../../../images/shared/mobile/icon-hamburger.svg';
import cross from '../../../images/shared/mobile/icon-close.svg';
import links from '../../links/navigation/links';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const burgerIcon = useRef();
  const close = useRef();
  const menu = useRef();

  function selectMenu() {
    // hide the burger
    burgerIcon.current.classList.toggle('hidden');

    // display the close button
    close.current.classList.toggle('hidden');

    close.current.classList.add(
      'transition',
      'duration-200',
      'ease-in-out',
      'opacity-100'
    );

    // toggle display of the menu
    menu.current.classList.toggle('-translate-y-full');

    menu.current.classList.add(
      'transition',
      'duration-200',
      'ease-in-out',
      'translate-y-0'
    );
  }

  return (
    <header>
      <nav
        onClick={selectMenu}
        className="relative w-full flex justify-between items-center">
        <Fragment>
          <img src={Logo} alt="logo" className="w-1/2 md:w-1/3 lg:w-2/12" />
        </Fragment>

        <Fragment>
          <img ref={burgerIcon} src={burger} alt="burger" className="md:hidden" />
          <img
            ref={close}
            src={cross}
            alt="burger"
            className="absolute right-0 hidden opacity-0 md:hidden"
          />
        </Fragment>

        <Fragment>
          <ul
            ref={menu}
            className="absolute top-14 left-0 z-40 bg-gradient-to-b from-gray-light via-gray-light to-transparent
          w-full h-screen pt-12 transform -translate-y-full flex flex-col items-center justify-start gap-8 
          md:translate-y-0 md:bg-none md:static md:flex-row md:w-auto md:h-auto md:pt-0">
            {links.map((link) => (
              <Link
                to={link.path}
                key={links.indexOf(link)}
                className="font-display font-black text-2xl md:font-body md:font-bold md:text-sm
                md:text-gray lg:text-gray md:uppercase">
                {link.page}
              </Link>
            ))}
          </ul>
        </Fragment>
      </nav>
    </header>
  );
};

export default Navigation;

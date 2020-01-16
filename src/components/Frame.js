import React, { Fragment, useState, useEffect } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Social from '../components/Social';

export default function Frame({ children }) {
  const [menuActive, setMenuActive] = useState(false);

  const clickHandler = e => {
    e.preventDefault();

    if (menuActive) {
      document.body.classList.remove('js-overflow');
    } else {
      document.body.classList.add('js-overflow');
    }

    setMenuActive(!menuActive);
  };

  const onNavigation = () => {
    document.body.classList.remove('preload');
  };

  useEffect(() => {
    // Remove transition blocking
    document.body.classList.remove('preload');
  }, []);

  return (
    <Fragment>
      <Social />

      <header className="logo">
        <Header menuActive={menuActive} onClick={clickHandler} />
        <Navigation menuActive={menuActive} onClick={onNavigation} />
      </header>

      {children}

      <Footer />
    </Fragment>
  );
}

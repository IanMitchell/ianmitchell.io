import React, { Fragment, useState, useEffect } from 'react';
import Router from 'next/router';
import Head from 'next/head';
import { runPrism } from '../lib/prism';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Social from '../components/Social';

// Run Syntax Highlighting on Page Transitions
// and remove scroll lock
Router.onRouteChangeComplete = () => {
  document.body.classList.remove('js-overflow');
  runPrism();
};

export default ({ children }) => {
  const [url, setUrl] = useState(process.env.NOW_URL);
  const [menuActive, setMenuActive] = useState(false);

  const clickHandler = e => {
    e.preventDefault();

    if (menuActive) {
      document.body.classList.remove('js-overflow');
      runPrism();
    } else {
      document.body.classList.add('js-overflow');
    }

    setMenuActive(!menuActive);
  };

  useEffect(() => {
    // Remove transition blocking
    document.body.classList.remove('preload');

    // Update URL
    setUrl(window.document.location);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Ian Mitchell | Web Developer</title>

        <link rel="icon" href="/favicons/favicon.ico" type="image/ico" />
        <link
          rel="icon"
          href="/favicons/favicon-16.png"
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicons/favicon-32.png"
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicons/favicon-48.png"
          sizes="48x48"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicons/favicon-62.png"
          sizes="62x62"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicons/favicon-192.png"
          sizes="192x192"
          type="image/png"
        />
      </Head>

      <Social
        title="Ian Mitchell | Web Developer"
        image="/favicons/favicon-192.png"
        description="A web developer from Seattle, Washington"
        url={url}
      />

      <header className="logo">
        <Header menuActive={menuActive} onClick={clickHandler} />
        <Navigation menuActive={menuActive} />
      </header>

      {children}

      <Footer />
    </Fragment>
  );
};

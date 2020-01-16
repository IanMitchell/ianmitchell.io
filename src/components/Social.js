import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import Helmet from 'react-helmet';

export default function Social({
  title = 'Ian Mitchell | Web Developer',
  image = '/favicons/favicon-192.png',
  description = 'A web developer from Seattle, Washington',
  url = 'https://ianmitchell.dev',
  useCurrentUrl = true,
}) {
  const [preload, setPreload] = useState(true);
  const [location, setLocation] = useState(url);

  const getBodyClasses = () => {
    if (preload) {
      setPreload(false);
      return classnames('preload');
    }
  };

  useEffect(() => {
    if (useCurrentUrl) {
      setLocation(window.document.location);
    }
  }, []);

  return (
    <Helmet>
      <meta key="twitter-card" name="twitter:card" content="summary" />
      <meta key="twitter-site" name="twitter:site" content="@ianmitchel1" />
      <meta key="twitter-title" name="twitter:title" content={title} />
      <meta
        key="twitter-description"
        name="twitter:description"
        content={description}
      />
      <meta key="twitter-image" name="twitter:image" content={image} />
      <meta key="twitter-url" name="twitter:url" content={location} />

      <meta key="facebook-type" property="og:type" content="article" />
      <meta key="facebook-title" property="og:title" content={title} />
      <meta
        key="facebook-description"
        property="og:description"
        content={description}
      />
      <meta key="facebook-image" property="og:image" content={image} />
      <meta key="facebook-url" property="og:url" content={location} />

      <title>{title}</title>

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

      <body className={getBodyClasses()} />
    </Helmet>
  );
}

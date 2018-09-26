import Head from 'next/head';

export default ({ title, image, description, url }) => (
  <Head>
    <meta key="twitter-card" name="twitter:card" content="summary" />
    <meta key="twitter-site" name="twitter:site" content="@ianmitchel1" />
    <meta key="twitter-title" name="twitter:title" content={title} />
    <meta key="twitter-description" name="twitter:description" content={description} />
    <meta key="twitter-image" name="twitter:image" content={image} />
    <meta key="twitter-url" name="twitter:url" content={url} />

    <meta key="facebook-type" property="og:type" content="article" />
    <meta key="facebook-title" property="og:title" content={title} />
    <meta key="facebook-description" property="og:description" content={description} />
    <meta key="facebook-image" property="og:image" content={image} />
    <meta key="facebook-url" property="og:url" content={url} />
  </Head>
);

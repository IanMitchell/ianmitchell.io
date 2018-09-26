import Document, { Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    return { html, head, errorHtml, chunks };
  }

  render () {
    return (
      <html lang="en">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link href="/static/stylesheets/prism.css" rel="stylesheet" />
        </Head>
        <body className="preload">
          <Main />
          <NextScript />
          <script src="/static/scripts/prism.js"></script>
          <script
            src="https://www.googletagmanager.com/gtag/js?id=UA-54840314-1"
            async
          />
          <script dangerouslySetInnerHTML={{ __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-54840314-1');
          `}} />
        </body>
      </html>
    );
  }
}

import React from 'react';
import classNames from 'classnames';
import Head from 'next/head';
import Error from 'next/error';
import dynamic from 'next/dynamic';
import Frame from '../../layouts/Frame';
import { getStandardDate } from '../../lib/date';

export default function Post({ title }) {
  const Content = dynamic(async () => {
    try {
      const { default: Component, meta } = await import(
        `../../posts/${title}.mdx`
      );

      return () => (
        <Frame>
          <article className="post">
            <Head>
              <title>{meta.title}</title>
            </Head>

            {/* <Social
              title={title}
              description={preview}
              image={'TODO'}
              url={socialUrl.toString()}
            /> */}

            <header className="post-header">
              <h1
                className={classNames('post-title', {
                  'post-title-small': meta.smallTitle,
                })}
              >
                {meta.title}
              </h1>

              {meta.date && (
                <time className="post-date">
                  Posted on {getStandardDate(new Date(meta.date))}
                </time>
              )}
            </header>

            <main className="post-main">
              <Component />
            </main>
          </article>
        </Frame>
      );
    } catch (error) {
      return () => <Error statusCode={404} />;
    }
  });

  return <Content />;
}

Post.getInitialProps = ({ query }) => {
  return {
    title: query.post,
  };
};

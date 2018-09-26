import Head from 'next/head';
import React from 'react';
import classNames from 'classnames';
import Visible from '../components/Visible';
import Frame from '../layouts/Frame';
import Page from '../layouts/Page';
import { getStandardDate } from './date';

export default function withMdx(options) {
  return (WrapComponent) => (props) => (
    <Frame>
      <article className="post">
        <Head>
          <title>{ options.title }</title>
        </Head>

        {/* <Social
          title={title}
          description={preview}
          image={'TODO'}
          url={socialUrl.toString()}
        /> */}

        <header className="post-header">
          <h1
            className={classNames("post-title", {
              "post-title-small": options.smallTitle
            })}
          >
            {options.title}
          </h1>

          <Visible isVisible={options.date}>
            <time className="post-date">
              Posted on {getStandardDate(new Date(options.date))}
            </time>
          </Visible>
        </header>

        <main className="post-main">
          <WrapComponent {...props} />
        </main>
      </article>
    </Frame>
  );
}

export function withPage() {
  return (WrapComponent) => (props) => (
    <Page>
      <WrapComponent { ...props } />
    </Page>
  )
}

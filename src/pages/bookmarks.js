import React from 'react';
import Page from '../components/Page';
import Social from '../components/Social';

export default function Bookmarks() {
  return (
    <Page>
      <Social title="Web Bookmarks" />

      <header className="post-header">
        <h1 className="post-title">Bookmarks</h1>
      </header>
      <main className="post-main">
        <p>
          I'm trying a new thing right now - I'm keeping my bookmarks updated on
          Notion.{' '}
          <a
            href="https://www.notion.so/ianmitchel1/Web-Development-Bookmarks-54071bba54a243b9b687ea30de0eb4f3"
            target="_blank"
            rel="noopener noreferrer"
          >
            Take a look at them here
          </a>{' '}
          and let me know what you think on Twitter!
        </p>
      </main>
    </Page>
  );
}

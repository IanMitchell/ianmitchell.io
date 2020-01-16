import React from 'react';
import Frame from './Frame';

export default ({ children }) => (
  <Frame>
    <main className="main" aria-label="Content">
      {children}
    </main>
  </Frame>
);

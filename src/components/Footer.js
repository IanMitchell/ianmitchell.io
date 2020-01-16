import React from 'react';

export default function Footer() {
  return (
    <footer>
      <p>&copy; Copyright {new Date().getFullYear()} Ian Mitchell</p>
      <p className="footer-sub">
        Built with <a href="https://www.gatsbyjs.org/">Gatsby</a>. Source on{' '}
        <a href="https://github.com/ianmitchell/ianmitchell.io">GitHub</a>
      </p>
    </footer>
  );
}

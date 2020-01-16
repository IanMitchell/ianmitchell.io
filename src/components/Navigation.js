import React from 'react';
import classnames from 'classnames';
import { Link } from 'gatsby';

export default function Navigation({ menuActive, onClick }) {
  return (
    <nav className={classnames({ show: menuActive })}>
      <ul className="nav_pages">
        <li>
          <Link to="/" onClick={onClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/blog" onClick={onClick}>
            Blog
          </Link>
        </li>
        <li>
          <Link to="/bookmarks" onClick={onClick}>
            Bookmarks
          </Link>
        </li>
        <li>
          <Link to="/uses" onClick={onClick}>
            What I Use
          </Link>
        </li>
      </ul>

      <ul className="nav_links">
        <li>
          <a href="/resume">Résumé</a>
        </li>
        <li>
          <a href="https://github.com/ianmitchell">GitHub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ianmitchel1/">LinkedIn</a>
        </li>
      </ul>
    </nav>
  );
}

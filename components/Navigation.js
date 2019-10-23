import classnames from 'classnames';
import Link from 'next/link';

export default ({ menuActive }) => (
  <nav className={classnames({ show: menuActive })}>
    <ul className="nav_pages">
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </li>
      <li>
        <Link href="/bookmarks">
          <a>Bookmarks</a>
        </Link>
      </li>
      <li>
        <Link href="/tools">
          <a>Tools</a>
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

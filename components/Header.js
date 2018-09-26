import classnames from 'classnames';

export default ({ menuActive, onClick }) => (
  <a
    href="/menu"
    rel="nofollow"
    onClick={onClick}
    className={classnames('menu', 'burger-icon', { 'is-active': menuActive })}
  >
    <span className="burger-icon"></span>
    <h1>IM</h1>
  </a>
);

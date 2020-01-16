import React from 'react';
import { Link } from 'gatsby';
import { getStandardDate } from '../lib/date';

export default ({ title, description, date, link }) => (
  <section className="featured">
    <div className="meta">
      <h5>Featured</h5>
      <time>{getStandardDate(new Date(date))}</time>
    </div>
    <h3>
      <Link to={link}>{title}</Link>
    </h3>
    <p>{description}</p>
  </section>
);

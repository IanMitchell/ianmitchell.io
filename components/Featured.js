import Link from 'next/link';
import slug from '../lib/slug';
import { getStandardDate } from '../lib/date';

export default ({ title, description, date }) => (
  <section className="featured">
    <div className="meta">
      <h5>Featured</h5>
      <time>{getStandardDate(new Date(date))}</time>
    </div>
    <h3>
      <Link href={`/blog/${slug(title)}`}>
        <a>{title}</a>
      </Link>
    </h3>
    <p>{description}</p>
  </section>
);

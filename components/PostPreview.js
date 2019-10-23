import Link from 'next/link';
import humanize from '../lib/humanize';
import slug from '../lib/slug';
import { getShortMonth, getTwoDigitDate } from '../lib/date';

export default ({ title, path, date, tags }) => (
  <div className="blog-entry">
    <time className="date-tile">
      <span className="month">{getShortMonth(new Date(date))}</span>
      <span className="day">{getTwoDigitDate(new Date(date))}</span>
    </time>
    <div>
      <span className="tags">{humanize(tags)}</span>
      <h4>
        <Link href={`/blog/${path || slug(title)}`}>
          <a>{title}</a>
        </Link>
      </h4>
    </div>
  </div>
);

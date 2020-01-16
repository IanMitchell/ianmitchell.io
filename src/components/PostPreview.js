import React from 'react';
import { Link } from 'gatsby';
import humanize from '../lib/humanize';
import { getShortMonth, getTwoDigitDate } from '../lib/date';

export default function PostPreview({ title, link, date, tags }) {
  return (
    <div className="blog-entry">
      <time className="date-tile">
        <span className="month">{getShortMonth(new Date(date))}</span>
        <span className="day">{getTwoDigitDate(new Date(date))}</span>
      </time>
      <div>
        <span className="tags">{humanize(tags)}</span>
        <h4>
          <Link to={link}>{title}</Link>
        </h4>
      </div>
    </div>
  );
}

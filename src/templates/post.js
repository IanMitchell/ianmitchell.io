import React from 'react';
import classNames from 'classnames';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Frame from '../components/Frame';
import Social from '../components/Social';
import { getStandardDate } from '../lib/date';

export default function Post({ data }) {
  const post = data.mdx;

  return (
    <Frame>
      <article className="post">
        <Social title={post.frontmatter.title} />

        <header className="post-header">
          <h1
            className={classNames('post-title', {
              'post-title-small': post.frontmatter.smallTitle,
            })}
          >
            {post.frontmatter.title}
          </h1>

          {post.frontmatter.date && (
            <time className="post-date">
              Posted on {getStandardDate(new Date(post.frontmatter.date))}
            </time>
          )}
        </header>
        <main className="post-main">
          <MDXRenderer>{post.body}</MDXRenderer>
        </main>
      </article>
    </Frame>
  );
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        date
        tags
        title
      }
      body
    }
  }
`;

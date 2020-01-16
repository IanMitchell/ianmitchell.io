import React from 'react';
import { graphql } from 'gatsby';
import Featured from '../components/Featured';
import PostPreview from '../components/PostPreview';
import Page from '../components/Page';
import { getYearFromFrontmatter } from '../lib/date';

export default function Blog({ data }) {
  const featured = data.featured.edges[0].node;
  const posts = data.posts.edges.reduce((list, post) => {
    const year = getYearFromFrontmatter(post.node.frontmatter.date);

    if (year in list) {
      list[year].push(post);
    } else {
      list[year] = [post];
    }

    return list;
  }, {});

  return (
    <Page>
      <Featured
        title={featured.frontmatter.title}
        description={featured.frontmatter.description}
        date={featured.frontmatter.date}
        link={featured.fields.slug}
      />

      <section className="blog-list">
        {Object.keys(posts)
          .sort()
          .reverse()
          .map(year => (
            <div key={year}>
              <h4 className="year">{year}</h4>

              {posts[year].map(entry => (
                <PostPreview
                  key={entry.node.frontmatter.title}
                  title={entry.node.frontmatter.title}
                  link={entry.node.fields.slug}
                  date={entry.node.frontmatter.date}
                  tags={entry.node.frontmatter.tags}
                />
              ))}
            </div>
          ))}
      </section>
    </Page>
  );
}

export const pageQuery = graphql`
  query {
    featured: allMdx(
      filter: { frontmatter: { featured: { eq: true } } }
      limit: 1
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date
            tags
            title
            description
          }
        }
      }
    }
    posts: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { featured: { ne: false } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date
            tags
            title
          }
        }
      }
    }
  }
`;

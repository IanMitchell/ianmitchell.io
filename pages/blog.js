import fetch from 'isomorphic-unfetch';
import absoluteUrl from 'next-absolute-url';
import Featured from '../components/Featured';
import PostPreview from '../components/PostPreview';
import Page from '../layouts/Page';

export default function Blog({ posts }) {
  return (
    <Page>
      <Featured {...posts.featured} />

      <section className="blog-list">
        {Object.keys(posts.posts)
          .sort()
          .reverse()
          .map(year => (
            <div key={year}>
              <h4 className="year">{year}</h4>

              {posts.posts[year].map(entry => (
                <PostPreview {...entry} key={entry.title} />
              ))}
            </div>
          ))}
      </section>
    </Page>
  );
}

Blog.getInitialProps = async ({ req }) => {
  const { origin } = absoluteUrl(req);

  const response = await fetch(`${origin}/api/posts`);
  const data = await response.json();

  return {
    posts: data,
  };
};

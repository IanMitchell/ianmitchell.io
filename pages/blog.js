import Featured from '../components/Featured';
import PostPreview from '../components/PostPreview';
import Page from '../layouts/Page';
import { getFeaturedPost, getNonFeaturedPostsByYear } from '../lib/posts';


export default class extends React.Component {
  static async getInitialProps({ req }) {
    return {
      featuredPost: getFeaturedPost(),
      posts: getNonFeaturedPostsByYear(),
    };
  }

  render() {
    const { featuredPost, posts } = this.props;

    return (
      <Page>
        <Featured {...featuredPost} />

        <section className="blog-list">
          {Object.keys(posts).sort().reverse().map(year => (
            <div key={year}>
              <h4 className="year">
                {year}
              </h4>

              {posts[year].map(entry => (
                <PostPreview {...entry} key={entry.title} />
              ))}
            </div>
          ))}
        </section>
      </Page>
    );
  }
}

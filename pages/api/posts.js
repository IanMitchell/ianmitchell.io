import fs from 'fs';
import path from 'path';

async function getAllPosts() {
  return new Promise((resolve, reject) => {
    const loaders = [];
    const posts = [];

    let directory = '';

    // See:
    // https://github.com/zeit/now/issues/3083
    // https://github.com/zeit/next.js/issues/8251
    if (process.env.NODE_ENV === 'production') {
      directory = path.join('..', process.env.POSTS_DIRECTORY);
    } else {
      directory = process.env.POSTS_DIRECTORY;
    }

    fs.readdir(directory, (err, files) => {
      if (err) {
        return reject(err);
      }

      files.forEach(async file => {
        if (file.endsWith('.mdx')) {
          loaders.push(
            import(`../../posts/${file}`).then(({ meta }) => posts.push(meta))
          );
        }
      });

      Promise.all(loaders).then(() => resolve(posts));
    });
  });
}

function sortPostsByDate(a, b) {
  return new Date(b.date) - new Date(a.date);
}

function getFeaturedPost(posts) {
  return posts.find(post => post.featured);
}

function getNonFeaturedPostsByYear(posts) {
  const postsByYear = {};

  posts
    .filter(post => !post.featured)
    .forEach(post => {
      const year = new Date(post.date).getFullYear();

      if (postsByYear[year]) {
        postsByYear[year].push(post);
      } else {
        postsByYear[year] = [post];
      }
    });

  Object.keys(postsByYear).forEach(year => {
    postsByYear[year] = postsByYear[year].sort(sortPostsByDate);
  });

  return postsByYear;
}

let CACHE = {};

async function initialize() {
  const posts = await getAllPosts();
  CACHE = {
    featured: getFeaturedPost(posts),
    posts: getNonFeaturedPostsByYear(posts),
  };
}

export default async (request, response) => {
  if (!Object.entries(CACHE).length) {
    await initialize();
  }

  response.status(200).json(CACHE);
};

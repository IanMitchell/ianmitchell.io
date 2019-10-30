import fs from 'fs';
import path from 'path';
import dynamic from 'next/dynamic';

async function getAllPosts() {
  debugger;
  console.log('getAllPosts');
  const loaders = [];
  const posts = [];

  fs.readdir('../../posts/', (err, files) => {
    if (err) {
      throw err;
    }

    files.forEach(async file => {
      console.log(`Checking ${file}`);
      if (file.endsWith('.mdx')) {
        loaders.push(
          import(`../../posts/${file}`).then(({ meta }) => {
            posts.push(meta);
            console.log('Loaded post');
            console.log(meta);
          })
        );
      }
    });
  });

  console.log('Waiting to load...');
  await Promise.all(loaders);

  console.log('Done');
  console.log(posts);
  return posts;
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

initialize();

export default (request, response) => {
  response.status(200).json(CACHE);
};

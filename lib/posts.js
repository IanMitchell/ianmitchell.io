import fs from 'fs';
import path from 'path';

export function getAllPosts() {
  console.log('GETTING ALL POSTS');
  const posts = [];
  const directory = path.join(__dirname, '../posts');
  console.log(directory);

  console.log('RUNNING AGAINST DIRECTORY');
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.log(err);
      throw err;
    }

    console.log('CHECKING FILES');
    files.forEach(async file => {
      if (file.endsWith('.mdx')) {
        console.log(`IMPORTING ${file}`);
        const { meta } = await import(path.join(directory, file));
        posts.push(meta);
      }
    });
  });

  return posts;
}

export function sortPostsByDate(a, b) {
  return new Date(b.date) - new Date(a.date);
}

export function getFeaturedPost(posts) {
  return posts.find(post => post.featured);
}

export function getNonFeaturedPostsByYear(posts) {
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

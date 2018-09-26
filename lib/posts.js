import { posts } from '../post-manifest';

export function sortPostsByDate(a, b) {
  return new Date(b.date) - new Date(a.date);
}

export function getFeaturedPost() {
  return posts.find(post => post.featured);
}

export function getNonFeaturedPostsByYear() {
  const postsByYear = {};

  posts
    .filter(post => !post.featured)
    .forEach((post) => {
      const year = (new Date(post.date)).getFullYear();

      if (postsByYear[year]) {
        postsByYear[year].push(post);
      } else {
        postsByYear[year] = [post];
      }
    });

  Object.keys(postsByYear).forEach((year) => {
    postsByYear[year] = postsByYear[year].sort(sortPostsByDate);
  });

  return postsByYear;
}

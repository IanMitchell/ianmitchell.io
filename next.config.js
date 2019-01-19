const withSass = require('@zeit/next-sass');
const withMDX = require('@zeit/next-mdx')();

module.exports = {
  ...withSass(
    withMDX({
      pageExtensions: ['js', 'mdx'],
    })
  ),
  target: 'serverless',
};

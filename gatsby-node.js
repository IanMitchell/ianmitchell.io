const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async function({ graphql, actions }) {
  const { createPage } = actions;
  const result = await graphql(
    `
      {
        allMdx {
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
              body
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  result.data.allMdx.edges.forEach(post => {
    createPage({
      path: post.node.fields.slug,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: post.node.fields.slug,
      },
    });
  });
};

exports.onCreateNode = function({ node, actions, getNode }) {
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({
      node,
      getNode,
      trailingSlash: false,
    });

    actions.createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

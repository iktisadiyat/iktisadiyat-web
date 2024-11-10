const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const blogPost = path.resolve(`./src/templates/blog-post.js`);
const itemsPerPage = 5; // Change this value to adjust the number of posts per page

/**
 * Create pages for each blog post and paginate the index page.
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Fetch all Markdown nodes
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { frontmatter: { date: ASC } }, limit: 1000) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`There was an error loading your blog posts`, result.errors);
    return;
  }

  const posts = result.data.allMarkdownRemark.nodes;
  const numPages = Math.ceil(posts.length / itemsPerPage);

  // Create the main index page (page 1)
  createPage({
    path: `/`,
    component: require.resolve(`./src/pages/index.js`),
    context: {
      limit: itemsPerPage,
      skip: 0,
      numPages,
      currentPage: 1,
    },
  });

  // Create paginated index pages (page 2 and beyond)
  Array.from({ length: numPages - 1 }).forEach((_, i) => {
    createPage({
      path: `/page/${i + 2}`,
      component: require.resolve(`./src/pages/index.js`),
      context: {
        limit: itemsPerPage,
        skip: (i + 1) * itemsPerPage,
        numPages,
        currentPage: i + 2,
      },
    });
  });

  // Create individual blog post pages
  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id;
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id;

      createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      });
    });
  }
};

/**
 * Add custom fields to Markdown nodes.
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

/**
 * Customize GraphQL schema.
 */
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `);
};
const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const itemsPerPage = 5;
const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`);
const blogListTemplate = path.resolve(`./src/templates/blog-list.js`);

/**
 * Add slug field to Markdown nodes.
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    // Generate the slug based on the file path
    const slug = createFilePath({ node, getNode, basePath: `content/blog`, trailingSlash: false });

    // Add the slug field to the node
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

/**
 * Create paginated index pages and individual blog post pages.
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Fetch all Markdown nodes with their slugs
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { frontmatter: { date: ASC } }, limit: 1000) {
        nodes {
          id
          fields {
            slug
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
  const totalPosts = posts.length;
  const numPages = Math.ceil(totalPosts / itemsPerPage);

  // 1. Create the main index page (`/`)
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

  // 2. Create paginated index pages (`/page/2/`, `/page/3/`, etc.)
  for (let i = 0; i < numPages; i++) {
    const currentPage = i + 1;
    const pagePath = currentPage === 1 ? `/` : `/page/${currentPage}`;

    createPage({
      path: pagePath,
      component: blogListTemplate,
      context: {
        limit: itemsPerPage,
        skip: i * itemsPerPage,
        numPages,
        currentPage,
      },
    });
  }

  // 3. Create individual blog post pages
  // Create individual blog post pages with correct previous and next post links
posts.forEach((post, index) => {
  const previousPost = index === 0 ? null : posts[index - 1];
  const nextPost = index === posts.length - 1 ? null : posts[index + 1];

  createPage({
    path: post.fields.slug,
    component: blogPostTemplate,
    context: {
      id: post.id,
      slug: post.fields.slug,
      previousPostId: previousPost ? previousPost.id : null,
      nextPostId: nextPost ? nextPost.id : null,
    },
  });

  console.log(`Created blog post page: ${post.fields.slug} (prev: ${previousPost?.fields?.slug}, next: ${nextPost?.fields?.slug})`);
});
};

/**
 * Customize the GraphQL schema to include the slug field in MarkdownRemark nodes.
 */
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type MarkdownRemark implements Node {
      fields: Fields
    }

    type Fields {
      slug: String
    }
  `);
};
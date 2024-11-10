import * as React from "react";
import { graphql, Link } from "gatsby";
import Bio from "../components/bio";
import Layout from "../components/layout";
import Seo from "../components/seo";
import PostList from "../components/PostList";

const BlogIndex = ({ data, location, pageContext }) => {
  const siteTitle = data?.site?.siteMetadata?.title || `Title`;
  const posts = data?.allMarkdownRemark?.nodes || [];
const { currentPage = 1, numPages = 1 } = pageContext;
const isFirst = currentPage === 1;
const isLast = currentPage === numPages;
const prevPage = currentPage === 2 ? `/` : `/page/${currentPage - 1}`;
const nextPage = `/page/${currentPage + 1}`;

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
        <p>No blog posts found. Add markdown posts to "content/blog".</p>
      </Layout>
    );
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={`All posts - Page ${currentPage}`} />
      <Bio />
      <PostList posts={posts} />

{/* Pagination Links */}
<div style={{ display: "flex", justifyContent: "space-between", marginTop: "2rem" }}>
  {/* Previous Page link (hidden only on the first page) */}
  {currentPage > 1 && (
    <Link to={prevPage} rel="prev">
      ← Previous Page
    </Link>
  )}

  {/* Page Number Display */}
  <span>
    Page {currentPage} of {numPages}
  </span>

  {/* Next Page link (shown unless we're on the last page) */}
  {currentPage < numPages && (
    <Link to={nextPage} rel="next">
      Next Page →
    </Link>
  )}
</div>

    </Layout>
  );
};

export default BlogIndex;

export const Head = () => <Seo title="All posts" />;

export const pageQuery = graphql`
  query blogIndexQuery($skip: Int = 0, $limit: Int = 20) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        excerpt(pruneLength: 400)
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          thumbnail
          categories
          author
        }
      }
    }
  }
`;
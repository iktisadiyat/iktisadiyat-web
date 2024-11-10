import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import PostList from "../components/PostList";
import Pagination from "../components/Pagination";

const BlogList = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.nodes;
  const { currentPage, numPages } = pageContext;

  return (
    <Layout>
      <Seo title={`Yazılar - Sayfa ${currentPage}`} />
      <Pagination currentPage={currentPage} numPages={numPages} />
      <PostList posts={posts} />
      {/* Pagination Component */}
      <Pagination currentPage={currentPage} numPages={numPages} />
    </Layout>
  );
};

export default BlogList;

export const pageQuery = graphql`
  query BlogListQuery($skip: Int!, $limit: Int!) {
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
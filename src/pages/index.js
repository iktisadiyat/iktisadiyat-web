import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import PostList from "../components/PostList";
import Pagination from "../components/Pagination";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;
  const numPages = data.allMarkdownRemark.pageInfo.pageCount;
  const currentPage = 1;

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <p> Blog yazısı yer almamaktadır.</p>
      </Layout>
    );
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Tüm Yazılar" />
      <h1 style={{ textAlign: "center" }}> Yazılar </h1>
      <PostList posts={posts} />
      <Pagination currentPage={currentPage} numPages={numPages} />
    </Layout>
  );
};

export default BlogIndex;

export const Head = () => <Seo title="Yazılar" />;

export const pageQuery = graphql`
  query mainIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      limit: 10
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
      pageInfo {
        pageCount
      }
    }
  }
`;
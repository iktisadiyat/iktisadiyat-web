import React from "react";
import { graphql, Link } from "gatsby";

const BlogList = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.nodes;
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? "/" : `/page/${currentPage - 1}`;
  const nextPage = `/page/${currentPage + 1}`;

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.fields.slug}>
            <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
          </li>
        ))}
      </ul>

      <div>
        {!isFirst && <Link to={prevPage}>Previous</Link>}
        {!isLast && <Link to={nextPage}>Next</Link>}
      </div>
    </div>
  );
};

export default BlogList;

export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(sort: { frontmatter: { date: ASC } }, limit: $limit, skip: $skip) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
    }
  }
`;
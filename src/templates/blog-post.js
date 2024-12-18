import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`;
  const formattedDate = new Date(post.frontmatter.date).toLocaleDateString('en-GB');
  
  return (
    <Layout location={location} title={siteTitle}>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h2 itemProp="headline">{post.frontmatter.title}</h2>
          <p>{formattedDate}</p>
          
          {/* Display author and categories */}
          <div className="post-meta">
  {post.frontmatter.author && (
    <span><strong>Yazar:</strong> {post.frontmatter.author}</span>
  )}
  {post.frontmatter.categories && post.frontmatter.categories.length > 0 && (
    <span> | <strong>Kategoriler:</strong> {post.frontmatter.categories.join(', ')}</span>
  )}
</div>
        </header>

        {/* Smaller thumbnail image */}
        {post.frontmatter.thumbnail && (
          <img
            src={post.frontmatter.thumbnail}
            alt={post.frontmatter.title}
            style={{
              width: '40%', // Adjusted for a smaller display
              maxWidth: '350px', // Restrict maximum size
              display: 'block',
              margin: '0 auto 1.5rem',
              borderRadius: '8px',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            }}
          />
        )}

        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
        <footer>
        </footer>
      </article>
      <nav className="blog-post-nav">
                    {/* same but center */}
                    <span style={{display: 'block', textAlign: 'center', margin: '1rem 0'}}>
                      <Link to="/"> <h3>Ana sayfaya dön </h3> </Link>
                    </span>
            

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          

          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        thumbnail
        categories
        author
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
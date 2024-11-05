// src/components/PostItem.js
import React from 'react';
import { Link } from 'gatsby';

const PostItem = ({ post }) => {
  const title = post.frontmatter.title || post.fields.slug;
  const formattedDate = new Date(post.frontmatter.date).toLocaleDateString('en-GB');
  const { thumbnail, author, categories } = post.frontmatter;

  return (
    <li className="post-list-item">
      <article className="post-article" itemScope itemType="http://schema.org/Article">
        <div className="post-card">
          <div className="post-content">
            <header>
              <h2>
                <Link to={post.fields.slug} itemProp="url">
                  <span itemProp="headline">{title}</span>
                </Link>
              </h2>
              <small>{formattedDate}</small>
              {author && (
                <p className="post-meta">
                  By {author}
                </p>
              )}
              {categories && categories.length > 0 && (
                <p className="post-meta">
                  Categories: {categories.join(', ')}
                </p>
              )}
            </header>
            <section>
              <p>
                {post.excerpt}
                <Link to={post.fields.slug} className="read-more-link">
                  Devamını oku
                </Link>
              </p>
            </section>
          </div>
          {thumbnail && (
            <div className="post-thumbnail">
              <img src={thumbnail} alt={title} />
            </div>
          )}
        </div>
      </article>
    </li>
  );
};

export default PostItem;
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
              <div className="post-meta-inline">
                <span>
                  <strong>Tarih:</strong> {formattedDate} | <strong>Yazar:</strong> {author || 'Bilinmiyor'}
                </span>
              </div>
            </header>

            {/* Move thumbnail here for correct order */}
            {thumbnail && (
              <div className="post-thumbnail">
                <Link to={post.fields.slug} itemProp="url">
                  <img src={thumbnail} alt={title} />
                </Link>
              </div>
            )}

            <section className="post-meta-text">
              <p>
                <Link to={post.fields.slug} className="read-more-link">
                  <span className="description">{post.excerpt}</span>
                  Devamını oku
                </Link>
              </p>
              <div className="post-meta-inline">
                {categories && categories.length > 0 ? (
                  <span>
                    <strong>Kategoriler:</strong> {categories.join(', ')}
                  </span>
                ) : (
                  <span>
                    <strong>Kategoriler:</strong> Yok
                  </span>
                )}
              </div>
            </section>
          </div>
        </div>
      </article>
    </li>
  );
};
export default PostItem;
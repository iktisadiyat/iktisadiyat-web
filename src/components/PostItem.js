import React from 'react'
import { Link } from 'gatsby'

const PostItem = ({ post }) => {
  const title = post.frontmatter.title || post.fields.slug
  const formattedDate = new Date(post.frontmatter.date).toLocaleDateString('en-GB')
  const { thumbnail, author } = post.frontmatter

  return (
    <li className="post-list-item">
      <article className="post-article" itemScope itemType="http://schema.org/Article">
        {thumbnail ? (
          <div className="post-thumbnail">
            <img src={thumbnail} alt={title} />
          </div>
        ) : null}
        <div className="post-content">
          <header>
            <h2>
              <Link to={post.fields.slug} itemProp="url">
                <span itemProp="headline">{title}</span>
              </Link>
            </h2>
            <small>{formattedDate} · {author}</small>
          </header>
          <section>
            <p
              dangerouslySetInnerHTML={{
                __html: post.frontmatter.description || post.excerpt,
              }}
              itemProp="description"
            />
          </section>
        </div>
      </article>
    </li>
  )
}

export default PostItem
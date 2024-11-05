import React from 'react'
import PostItem from './PostItem'

const PostList = ({ posts }) => {
  if (posts.length === 0) {
    return <p>No blog posts found. Add markdown posts to the content directory.</p>
  }

  return (
    <ol style={{ listStyle: `none` }}>
      {posts.map(post => (
        <PostItem key={post.fields.slug} post={post} />
      ))}
    </ol>
  )
}

export default PostList
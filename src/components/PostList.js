// src/components/PostList.js
import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts }) => {
  return (
    <ol style={{ listStyle: `none` }}>
      {posts.map(post => (
        <PostItem key={post.fields.slug} post={post} />
      ))}
    </ol>
  );
};

export default PostList;
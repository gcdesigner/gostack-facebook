import React, { useState, useEffect } from 'react';
import Post from '../Post'

import DataJson from '../../../public/posts.json'

export default function PostList() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    function getPosts() {
      const posts = JSON.parse(JSON.stringify(DataJson.posts))
      setPosts(posts);
    }

    getPosts()
  }, [])

  return (
    <>
      {posts.map(post => (
        <Post name={post.author.name} user_avatar={post.author.avatar} date={post.date} content={post.content} comments={post.comments} />
      ))}
    </>
  );
}

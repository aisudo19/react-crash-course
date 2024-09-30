import Post from './Post';
import classes from './PostList.module.css';
import { useState, useEffect } from 'react';

function PostList () {
  const[posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  // fetch('http://localhost:8080/posts').then(response => response.json()).then(data => {
  //   setPosts(data.posts);
  // });

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch('http://localhost:8080/posts')
      const resData = await response.json()
      setPosts(resData.posts);
      setIsFetching(false);
    };

    fetchPosts();
  }, []);

  function addPostHandler(postData) {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
    {!isFetching && posts.length > 0 && (
    <ul classes={classes.posts}>
      {posts.map((post, index) => (
        <Post key={index} author={post.author} body={post.body}/>
      ))}
    </ul>
    )}

    {!isFetching && posts.length === 0 && (
      <div style={{ textAlign: 'center', color: 'white'}}>
        <h2>まだ投稿がありません。</h2>
        <p>新しい投稿を作成してください。</p>
      </div>
    )}
    {isFetching && (
      <div style={{ textAlign: 'center', color: 'white'}}>
        <p>読み込み中...</p>
      </div>
      )}
    </>
  )
}

export default PostList;
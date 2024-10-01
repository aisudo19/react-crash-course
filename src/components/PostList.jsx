import { useLoaderData } from 'react-router-dom';

import Post from './Post';
import classes from './PostList.module.css';

function PostList () {
  const posts = useLoaderData();

  return (
    <>
    { posts.length > 0 && (
    <ul className={classes.postlist}>
      {posts.map((post) => (
        <Post key={post.id} id={post.id} author={post.author} body={post.body}/>
      ))}
    </ul>
    )}

    { posts.length === 0 && (
      <div style={{ textAlign: 'center', color: 'white'}}>
        <h2>まだ投稿がありません。</h2>
        <p>新しい投稿を作成してください。</p>
      </div>
    )}
    </>
  )
}

export default PostList;
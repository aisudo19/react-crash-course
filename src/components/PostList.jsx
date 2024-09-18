import Post from './Post';
import classes from './PostList.module.css';
import NewPost from './NewPost';
import { useState } from 'react';
import Modal from './Modal';

function PostList ({isPosting, onStopPosting}) {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  // let modalContent;
  // if(modalIsVisible) {
  //   modalContent = (
  //     <Modal onClose={hideModalHandler}>
  //       <NewPost
  //         onBodyChange={bodyChangeHandler}
  //         onAuthorChange={authorChangeHandler}
  //         onCancel={onStopPosting}
  //       />
  //     </Modal>
  //   )
  // }

  return (
    <>
    { isPosting && (
      <Modal onClose={onStopPosting}>
        <NewPost
          onBodyChange={bodyChangeHandler}
          onAuthorChange={authorChangeHandler}
          onCancel={onStopPosting}
        />
      </Modal>
    )}

      <ul classes={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody}/>
        <Post author="Manuel" body="check out full course!"/>
      </ul>
    </>

  )
}

export default PostList;
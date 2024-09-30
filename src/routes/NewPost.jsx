import classes from './NewPost.module.css';
import { useState } from 'react';
import Modal from '../components/Modal';

function NewPost({onCancel, onAddPost}) {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor
    };
    onAddPost(postData);
    onCancel();
  }
  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">投稿内容</label>
          <textarea id="body" required rows={3} onChange={bodyChangeHandler}/>
        </p>
        <p>
          <label htmlFor='name'>名前</label>
          <input id='name' type='text' required onChange={authorChangeHandler}/>
        </p>
        <p className={classes.actions}>
          <button type="button" onClick={onCancel}>キャンセル</button>
          <button>投稿</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;
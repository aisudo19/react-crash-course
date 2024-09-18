import classes from './NewPost.module.css';

function NewPost({onBodyChange, onAuthorChange, onCancel}) {

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">投稿内容</label>
        <textarea id="body" required rows={3} onChange={onBodyChange}/>
      </p>
      <p>
        <label htmlFor='name'>名前</label>
        <input id='name' type='text' required onChange={onAuthorChange}/>
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>キャンセル</button>
        <button>投稿</button>
      </p>
    </form>
  );
}

export default NewPost;
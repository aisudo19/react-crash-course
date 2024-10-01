import classes from './NewPost.module.css';
import Modal from '../components/Modal';
import { Link, Form, redirect } from 'react-router-dom';

function NewPost() {
  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">投稿内容</label>
          <textarea name="body" id="body" required rows={3}/>
        </p>
        <p>
          <label htmlFor='name'>名前</label>
          <input id='name' name="author" type='text' required />
        </p>
        <p className={classes.actions}>
          <Link type="button" to="..">キャンセル</Link>
          <button>投稿</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({request}) {
  const formData = await request.formData();//returns promise
  const postData = Object.fromEntries(formData);
  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return redirect('/');
}
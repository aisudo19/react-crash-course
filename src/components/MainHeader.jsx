import { MdPostAdd, MdMessage } from 'react-icons/md';
import { Link } from 'react-router-dom';

import classes from './MainHeader.module.css';

function MainHeader() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React掲示板
      </h1>
      <p>
        <Link to="/create-post" className={classes.button} >
          <MdPostAdd size={18} />
          新規投稿
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;
import { useLocation } from 'react-router';

import styles from './NotFoundPage.module.css';

function NotFoundPage() {

  let location = useLocation()

  

  return (
    <div className={`${styles.page} header__text`}>
        <h1>This page is not found</h1>
        <p>No match for <u>{location.pathname}</u></p>
    </div>
  );
}



export default NotFoundPage;
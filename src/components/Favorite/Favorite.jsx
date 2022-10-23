import styles from './Favorite.module.css';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
import icon from './img/favorite.svg'
import { useEffect, useState } from 'react';

function Favorite() {
    const [count, setCount] = useState(0)
    const storeData = useSelector(state => state.favoriteReducer)


    useEffect(() => {
        const length = Object.keys(storeData).length
        length.toString().length > 2 ? setCount('...') : setCount(length)
        setCount(length)
    })

  return (
        <div className={styles.container}>
            <Link to='/favorites'>
                <img className={styles.icon} src={icon} alt="favorites"></img>
                <span className={styles.counter}>{count}</span>
            </Link>
        </div>
  );
}



export default Favorite;
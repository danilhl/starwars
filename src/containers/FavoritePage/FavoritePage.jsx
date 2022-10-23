import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import PeopleList from '@components/PeoplePage/PeopleList'

import styles from './FavoritePage.module.css';

function FavoritePage() {

    const [people, setPeople] = useState([])

    const storeData = useSelector(state => state.favoriteReducer)

    useEffect(() => {
        const arr = Object.entries(storeData)
        if(arr.length){
          const res = arr.map(item => {
            return{
              id: item[0],
              ...item[1]
            }
          })
          setPeople(res)
        }
    },[])

  return (
    <div>
        <h1 className='header__text'>Favorites</h1>
        {people.length
            ?<PeopleList people = {people}/>
            : <h2 className={styles.comment}>No data</h2>  
        }
    </div>
  );
}



export default FavoritePage;
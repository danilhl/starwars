import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import {makeConcurrentRequest, changeHTTP} from '@utils/network'
import styles from './PersonFilms.module.css';

function PersonFilms({ personFilms })  {

    const [filmsName, setFilmsName] = useState([])

    useEffect(() => {
        (async () => {
            const filmsHTTPS = personFilms.map(url => changeHTTP(url))
            const response = await makeConcurrentRequest(filmsHTTPS);

            setFilmsName(response)
        })()
    },[])

  return (
    <div className={styles.wrapper}>
        <ul className={styles.list__container}>
            {filmsName
            .sort((a, z) => {return a.episode_id - z.episode_id})
            .map(({title, episode_id}) => 
                    <li className={styles.list__item} key = {episode_id}>
                        <span className={styles.item__episode}>Episode {episode_id}</span>
                        <span className={styles.item__colum}>: </span>
                        <span className={styles.item__title}>{title}</span>
                    </li>
                )
            }
        </ul>
    </div>
  );
}

PersonFilms.propTypes = {
    personFilms: PropTypes.array
}

export default PersonFilms;
import {Link} from 'react-router-dom'
import styles from './SearchPageInfo.module.css';
import PropTypes from 'prop-types'

function SearchPageInfo({people}) {
  return (
    <>
        {people.length
          ? (
              <ul className={styles.list__container}>
                  {people.map(({id, name, img}) => 
                    <li className={styles.list__item} key = {id}>
                        <Link to = {`/people/${id}`}>
                            <img className={styles.person__photo} src={img} alt={name} />
                            <p className={styles.person__name} >{name}</p>
                        </Link>
                    </li>
                  )}
              </ul>
            )
          : <h2 className={styles.person__comment} >No results</h2>
        }
    </>
  );
}

SearchPageInfo.propTypes = {
    people: PropTypes.array
}

export default SearchPageInfo;
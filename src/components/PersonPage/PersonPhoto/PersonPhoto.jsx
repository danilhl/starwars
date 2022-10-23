import { useDispatch } from 'react-redux/es/exports';
import iconFavorite from './img/favorite.svg'
import iconFavoriteFill from './img/favorite_fill.svg'
 import {setPersonToFavorite, removePersonFromFavorite} from '@store/actions'
import styles from './PersonPhoto.module.css';
import PropTypes from 'prop-types'

function PersonPhoto({
  personPhoto,
  personName, 
  personId,
  personFavorite,
  setPersonFavorite}) {

  const dispatch = useDispatch()

  const dispatchFavoritePeople = () => {
      if(personFavorite){
        dispatch(removePersonFromFavorite(personId))
        setPersonFavorite(false)
      }
      else{
        dispatch(setPersonToFavorite({
          [personId]: {
            name: personName,
            img: personPhoto
          }
        }))
      setPersonFavorite(true)
      }
  }

  return (
    <div className={styles.container}>
        <img className={styles.photo} src={personPhoto} alt={personName}/>
        
        <img src={personFavorite ? iconFavoriteFill : iconFavorite}
             onClick={dispatchFavoritePeople}
             alt = 'favoriteICON'
             className={styles.favorite}/>
    </div>

  );
}

PersonPhoto.propTypes = {
    personPhoto: PropTypes.string,
    personName: PropTypes.string,
    personId: PropTypes.string,
    personFavorite: PropTypes.bool,
    setPersonFavorite: PropTypes.func
}

export default PersonPhoto;
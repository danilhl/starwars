import styles from './PersonInfo.module.css';
import PropTypes from 'prop-types'

function PersonInfo({personInfo}) {
  return (
    <div className={styles.wrapper}>
        <ul className = {styles.list__container}>
            {personInfo.map(({title, data}) => (
                data &&  (
                    <li className={styles.list__item} key = {title}>
                        <span className={styles.item__title}>{title}</span>: {data}
                        
                    </li>
                )
            ))}
        </ul>
    </div>
  );
}

PersonInfo.propTypes = {
    personInfo: PropTypes.array
}

export default PersonInfo;
import styles from './PersonLinkBack.module.css';
import {useNavigate} from 'react-router-dom'
import iconBack from './img/back.svg'

function PersonLinkBack() {

    const history = useNavigate()

    const handleGoBack = e =>{
        e.preventDefault()
        history(-1)
    }

  return (
    <a
        href='#'
        className={styles.link}
        onClick={handleGoBack}
    >
        <img className={styles.link__img} src={iconBack} alt="goBack" />
        <span>Go Back</span>
    </a>
  );
}


export default PersonLinkBack;
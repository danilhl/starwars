import styles from './UiLoading.module.css';
import loaderpuple from './img/Loader_purple.svg'
import loaderblack from './img/Loader_black.svg'
import loaderwhite from './img/Loader_white.svg'

import PropTypes from 'prop-types'
import { useState, useEffect } from 'react';

function UiLoading({theme = 'purple'}) {

    const [loaderColor, setLoaderColor] = useState(null)


    useEffect(
        ()=>{
           switch (theme) {
            case 'black':
                setLoaderColor(loaderblack)
                break;
            case 'white':
                setLoaderColor(loaderwhite)
                break;

            case 'purple':
                setLoaderColor(loaderpuple)
                break;
           
            default:
                setLoaderColor(loaderpuple)
                break;
           } 
        },[])

  return (
    <img 
        className={styles.loader}
        src={loaderColor} 
        alt='Loader' />
  );
}

UiLoading.propTypes = {
    theme: PropTypes.string
}


export default UiLoading;
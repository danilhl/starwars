import {NavLink} from 'react-router-dom'
import {useTheme, THEME_DARK, THEME_LIGHT, THEME_NEITRAL} from '@context/ThemeProvider'

import darkIcon from './img/dark-theme-logo.svg'
import lightIcon from './img/light-theme-logo.svg'
import neitralIcon from './img/neitral-theme-logo.svg'
import Favorite from '@components/Favorite';
import styles from './Header.module.css';
import { useEffect, useState } from 'react'


function Header() {

  const [icon, setIcon] = useState(neitralIcon)

  const isTheme = useTheme()

  useEffect( () => {
    switch (isTheme.theme) {
      case THEME_LIGHT: setIcon(lightIcon)
        break;
    
      case THEME_DARK: setIcon(darkIcon) 
         break;

      case THEME_NEITRAL: setIcon(neitralIcon) 
         break;

      default: setIcon(neitralIcon) 
        break;
    }
  },
   [isTheme] )

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={icon} alt="StarWars" />
        <ul className={styles.list__container}>
            <li><NavLink  to='/home'>Home</NavLink></li>
            <li><NavLink to='/people/?page=1'>People</NavLink></li>
            <li><NavLink to='/search'>Search</NavLink></li>
            <li><NavLink to='/not-found'>Page not found</NavLink></li>
            <li><NavLink to='/fail'>Fail</NavLink></li>
        </ul>
        <Favorite/>
    </div>
  );
}


export default Header;
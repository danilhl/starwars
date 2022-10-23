import {useTheme, THEME_DARK, THEME_LIGHT, THEME_NEITRAL} from '@context/ThemeProvider'
import cn from 'classnames'
import neitralImg from './img/neitral-side.jpg'
import lightImg from './img/light-side.jpg'
import darkImg from './img/dark-side.jpg'
import styles from './ChooseSide.module.css';
import PropTypes from 'prop-types'


const ChooseSideItem = ({
      classes,
      theme, 
      text,
      img
}
) =>{

  const isTheme = useTheme()

  return(
    <div 
        className={cn(styles.item, classes,)}
        onClick = {() => isTheme.change(theme)}
    >
        <div className={styles.item__header}>
            {text}
        </div>
        <img className={styles.item__img} src={img} alt={text} />
    </div>
)
}


ChooseSideItem.propTypes = {
  classes: PropTypes.string,
  theme: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string
}


function ChooseSide() {

    const elements = [
      {
        classes: styles.item__light,
        theme: THEME_LIGHT,
        text: 'Light Side',
        img: lightImg
      },
      {
        classes: styles.item__dark,
        theme: THEME_DARK,
        text: 'Dark Side',
        img: darkImg
      },
      {
        classes: styles.item__neitral,
        theme: THEME_NEITRAL,
        text: 'I`m Mando',
        img: neitralImg
      }
    ]

  return (
    <div className={styles.container}>
        {elements.map((element, index) => (
            <ChooseSideItem 
                key={index}
                theme = {element.theme}
                text = {element.text}
                img={element.img}
                classes = {element.classes}
            />
        ))}
    </div>
  );  
}



export default ChooseSide;
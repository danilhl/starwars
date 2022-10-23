import styles from './UiButton.module.css';
import cn from 'classnames'
import '../index.css'
import PropTypes from 'prop-types'

function UiButton({text,
                  onClick,
                  disabled,
                  theme = 'dark',
                  }) {
  return (
    <button
      onClick = {onClick} 
      disabled = {disabled}
      className={cn(styles.button, styles[theme], )}
      >
        {text}
   </button>
  );
}

UiButton.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    theme: PropTypes.string,
   
}

export default UiButton;
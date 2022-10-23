import cn from 'classnames'

import deleteIcon from './img/delete.svg'
import '../index.css'
import styles from './UiInput.module.css';
import PropTypes from 'prop-types'

function UiInput({value, handleInputChange, placeholder, classes}) {
  return (
    <div className={cn(styles.wrapper__input, classes)}>
        <input
            type="text"
            value = {value}
            onChange = {(e) => handleInputChange(e.target.value)}
            placeholder = {placeholder}
            className = {styles.input}
        /> 
        <img src={deleteIcon} alt="clear"
             onClick={() => value && handleInputChange('')}
             className = {cn(styles.clear, !value && styles.clear__disabled)}
        />
    </div>
  );
}

UiInput.propTypes = {
    value: PropTypes.string,
    handleInputChange: PropTypes.func,

    placeholder: PropTypes.string,
    classes: PropTypes.string
}

export default UiInput;
import UiVideo from '@UI-Kit/UiVideo/UiVideo';
import video from './video/death-star.mp4'

import styles from './ErrorMassage.module.css';


function ErrorMassage() {
  return (
        <>
            <p className={styles.text}>
                The dark side of the force has won.<br/>
                We cannot display data.<br/>
                Come back when we fix everything
            </p>
            <UiVideo src = {video} classes = {styles.video} playbackRate = {2.0}/>
        </>
  );
}

export default ErrorMassage;
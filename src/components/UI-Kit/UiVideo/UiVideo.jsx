import cn from 'classnames'

import styles from './UiVideo.module.css';
import PropTypes from 'prop-types'
import { useEffect, useRef } from 'react';

function UiVideo({src, classes, playbackRate = 1.0 }) {

    const videoRef = useRef(null)

    useEffect(() => {
        videoRef.current.playbackRate = playbackRate
    }, [])
    
  return (
    <video 
        className={cn(styles.video, classes)}
        ref = {videoRef}
        loop
        autoPlay
        muted
    >
            <source src={src}/>
    </video>
  );
}

UiVideo.propTypes = {
    src: PropTypes.string,
    classes: PropTypes.string,
    playbackRate: PropTypes.number
}

export default UiVideo;
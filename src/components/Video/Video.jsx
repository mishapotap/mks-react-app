import React from 'react'
import styles from './Video.module.css'
import {ModalCloseButton} from '../../svg'
import video1 from "../../video/main.mp4";


const Video = ({videoContent, setVideoContent}) => {
    let buttonAudio = new Audio("/button.mp3")
    const playButton = () => {
        buttonAudio.play()
    }
    return (
        <>
            {videoContent ? (
                <>
                    <div className={styles.closeButton} onClick={() => {playButton(); setVideoContent(false)}}>
                        <ModalCloseButton />
                    </div>
                    <video className={styles.videoWrapper} controls="controls" autoPlay>
                        <source src={video1} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
                    </video>
                </>
            ) : null}
        </>
    )
}

export default Video;
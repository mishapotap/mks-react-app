import React from 'react'
import styles from './Video.module.css'
import {ModalCloseButton} from '../../svg'
import mks from "../../video/mks.mp4";
import nauka from "../../video/nauka.mp4";


const Video = ({videoContent, setVideoContent, scienceActive}) => {
    let buttonAudio = new Audio("/mks/button.mp3")
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
                        <source src={scienceActive ? nauka : mks} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
                    </video>
                    <div className={styles.blackBg}></div>
                    {/* Было видео с vimeo */}
                    {/* <iframe className={styles.videoWrapper} src={scienceActive ? "https://player.vimeo.com/video/732408163?h=caf1a44c73" : "https://player.vimeo.com/video/733277250?h=50a5a85557"} frameBorder="0" title='video' allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe> */}
                </>
            ) : null}
        </>
    )
}

export default Video;
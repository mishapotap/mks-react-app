import React from 'react'
import styles from './VimeoVideo.module.css'
import {ModalCloseButton} from '../../svg'


const VimeoVideo = ({researchActive, setResearchActive}) => {
    let buttonAudio = new Audio("/button.mp3")
    const playButton = () => {
        buttonAudio.play()
    }
    return (
        <>
            {researchActive ? (
                <>
                    <div className={styles.closeButton} onClick={() => {playButton(); setResearchActive(false)}}>
                        <ModalCloseButton />
                    </div>
                    <iframe className={styles.videoWrapper} src={"https://player.vimeo.com/video/757169912"} frameBorder="0" title='video' allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                    <div className={styles.blackBg}></div>
                </>
            ) : null}
        </>
    )
}

export default VimeoVideo;
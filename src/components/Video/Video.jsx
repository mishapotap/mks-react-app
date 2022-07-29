import React from 'react'
import styles from './Video.module.css'
import {ModalCloseButton} from '../../svg'
// import video1 from "../../video/main.mp4";


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
                    {/* {scienceActive ? <video className={styles.videoWrapper} controls="controls" autoPlay>
                        <source src={video1} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
                    </video> : <ReactPlayer className={styles.videoWrapper} width='100%' height='100%' controls={true} playing={true} url="https://vimeo.com/732408163"/>} */}
                    {/* <video className={styles.videoWrapper} controls="controls" autoPlay>
                        <source src={video1} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
                    </video> */}
                    <div className={styles.blackBg}></div>
                    <iframe className={styles.videoWrapper} src={scienceActive ? "https://player.vimeo.com/video/732408163?h=caf1a44c73" : "https://player.vimeo.com/video/733277250?h=50a5a85557"} frameBorder="0" title='video' allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                </>
            ) : null}
        </>
    )
}

export default Video;
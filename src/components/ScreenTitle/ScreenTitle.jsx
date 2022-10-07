import React, {useState, useEffect} from 'react'
import styles from './ScreenTitle.module.css'

const ScreenTitle = ({span, text}) => {
    // const [device, setDevice] = useState()

    // useEffect(() => {
    //     setDevice(getMobileOperatingSystem())
    //     console.log(device)
    //     // alert(device)
    // }, [device])

    // function getMobileOperatingSystem() {
    //     let userAgent = navigator.userAgent || navigator.vendor || window.opera;
    //     if( /iPhone|iPad|iPod/i.test(userAgent) ) {
    //         return "IOS"
    //     }
    //     if( /Android|webOS|Opera Mini/i.test(userAgent) ) {
    //         return "Android"
    //     }
    //     return "unknown";
    // }

    
    
    return (
        // <div className={styles.text} style={{fontSize: device === "IOS" && '7px'}}><span>{span}</span>{text}</div>
        <div className={styles.text}><span>{span}</span>{text}</div>
    )
}

export default ScreenTitle;
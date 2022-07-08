import React from 'react'
import styles from './ScreenTitle.module.css'

const ScreenTitle = ({span, text}) => {
    return (
        <div className={styles.text}><span>{span}</span>{text}</div>
    )
}

export default ScreenTitle;
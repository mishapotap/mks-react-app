import React from 'react'
import styles from './CircleButton.module.css'
import {CircleButtonSvgWhite, CircleButtonSvgBlue} from '../../svg'

const CircleButton = ({buttonText, onClickHandler, active, icon}) => {
    return (
    <div className={styles.wrapper} onClick={onClickHandler}>
        {active ? <CircleButtonSvgBlue /> : <CircleButtonSvgWhite />}
        <div className={styles.inside}>
            <img className={styles.spaceship} src={icon} alt="#" />
            <div className={styles.color}>{buttonText}</div>
        </div>
    </div>

    )
}

export default CircleButton;
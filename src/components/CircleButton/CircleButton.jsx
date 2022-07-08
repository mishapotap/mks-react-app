import React from 'react'
import styles from './CircleButton.module.css'
import {CircleButtonSvgWhite, CircleButtonSvgBlue} from '../../svg'
import { SpaceShip } from '../../images'

const CircleButton = ({buttonText, onClickHandler, active}) => {
    return (
    <div className={styles.wrapper} onClick={onClickHandler}>
        {active ? <CircleButtonSvgBlue /> : <CircleButtonSvgWhite />}
        <div className={styles.inside}>
            <img className={styles.spaceship} src={SpaceShip} alt="#" />
            <div className={styles.color}>{buttonText}</div>
        </div>
    </div>

    )
}

export default CircleButton;
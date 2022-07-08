import React from 'react'
import styles from './SquareButton.module.css'
import {SquareButtonSvg} from '../../svg'

const SquareButton = ({buttonText, onClickHandler}) => {
    return (
    <div className={styles.wrapper} onClick={onClickHandler}>
        <SquareButtonSvg />
        <div className={styles.text}>{buttonText}</div>
    </div>

    )
}

export default SquareButton;
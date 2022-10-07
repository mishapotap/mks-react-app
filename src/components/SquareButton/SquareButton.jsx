import React from 'react'
import styles from './SquareButton.module.css'
import {SquareButtonSvg, SquareButtonSvgNew} from '../../svg'

const SquareButton = ({buttonText, onClickHandler, withImage, image, width, height}) => {
    return (
    <div className={styles.wrapper} onClick={onClickHandler}>
        {/* <SquareButtonSvg /> */}
        <SquareButtonSvgNew />
        <div className={styles.buttonContent}>
            {withImage && <img style={{marginBottom: '5px'}} src={image} alt="#" width={width} height={height}/>}
            <div className={styles.text}>{buttonText}</div>
        </div>
    </div>

    )
}

export default SquareButton;
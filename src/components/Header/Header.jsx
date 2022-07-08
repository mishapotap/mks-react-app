import React from 'react'
import { OrbitalIcon, RoscosmosIcon } from '../../svg';
import styles from './Header.module.css'

const Header = ({onClickHandler}) => {
    return (
    <div className={styles.wrapper}>
        <div className={styles.text}>Национальный орбитальный исследовательский центр</div>
        <OrbitalIcon/>
        <RoscosmosIcon/>
        <div className={styles.button} onClick={onClickHandler}>Вернуться на сайт</div>
    </div>
    )
}

export default Header;
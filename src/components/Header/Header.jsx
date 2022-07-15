import React from 'react'
import { OrbitalIcon, RoscosmosIcon } from '../../svg';
import styles from './Header.module.css'

const Header = ({onClickHandler}) => {
    return (
    <div className={styles.wrapper}>
        <div className={styles.text}>Национальный орбитальный исследовательский центр</div>
        <div className={styles.orbital} onClick={() => window.location.href = "http://orbital-science.space/"}>
            <OrbitalIcon/>
        </div>
        <div className={styles.roscosmos} onClick={() => window.location.href = "https://www.roscosmos.ru/"}>
            <RoscosmosIcon/>
        </div>
        <div className={styles.button} onClick={onClickHandler}>Вернуться на сайт</div>
    </div>
    )
}

export default Header;
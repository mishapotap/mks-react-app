import React from "react";
import styles from "./ModalInfo.module.css";

const ModalInfo = ({ data }) => {
	return (
        <div className={styles.wrapper}>
            <div className={styles.column}>
                <div className={styles.text}>Условное обозначение:</div>
                <div className={styles.text}>Старт:</div>
                <div className={styles.text}>Стыковка:</div>
            </div>
            <div className={styles.column}>
                <div className={styles.textBlue}>{data.symbol || "Нет информации"}</div>
                <div className={styles.textBlue}>{data.start || "Нет информации"}</div>
                <div className={styles.textBlue}>{data.finish || "Нет информации"}</div>
            </div>
        </div>
	);
};

export default {
	name: "ModalInfo",
	Component: ModalInfo,
};

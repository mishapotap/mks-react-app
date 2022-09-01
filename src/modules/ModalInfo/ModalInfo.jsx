import React from "react";
import styles from "./ModalInfo.module.css";

const ModalInfo = ({ data }) => {
	return (
        <div className={styles.wrapper}>
            <div className={styles.column}>
                {data.symbol && <div className={styles.text}>Условное обозначение:</div>}
                {data.start && <div className={styles.text}>Старт:</div>}
                {data.finish && <div className={styles.text}>Стыковка:</div>}
            </div>
            <div className={styles.column}>
                {data.symbol && <div className={styles.textBlue}>{data.symbol}</div>}
                {data.start && <div className={styles.textBlue}>{data.start}</div>}
                {data.finish && <div className={styles.textBlue}>{data.finish}</div>}
            </div>
        </div>
	);
};

export default {
	name: "ModalInfo",
	Component: ModalInfo,
};

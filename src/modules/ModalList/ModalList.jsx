import React from "react";
import styles from "./ModalList.module.css";

const ModalList = ({ data }) => {
	return (
		<div className={styles.wrapper}>
            {data.title && <span className={styles.title}>{data.title}</span>}
            {data.content.map((item) => (
                <div key={item.id} className={styles.item}>
                    <span className={styles.number}>{item.id}.</span>
                    <span className={styles.name}>{item.name}</span>
                </div>
            ))}
        </div>
	);
};

export default {
	name: "ModalList",
	Component: ModalList,
};
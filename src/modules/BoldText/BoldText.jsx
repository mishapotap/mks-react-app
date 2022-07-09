import React from "react";
import styles from "./BoldText.module.css";

const BoldText = ({ data: text }) => {
	return (
		<div className={styles.text}>{text}</div>
	);
};

export default {
	name: "BoldText",
	Component: BoldText,
};
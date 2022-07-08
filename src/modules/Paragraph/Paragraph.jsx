import React from "react";
import styles from "./Paragraph.module.css";

const Paragraph = ({ data: text }) => {
	return (
		<div className={styles.text}>{text}</div>
	);
};

export default {
	name: "Paragraph",
	Component: Paragraph,
};

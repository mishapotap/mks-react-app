import React from "react";
import styles from "./Heading.module.css";

const Heading = ({ data: text }) => {
	return (
		<div className={styles.text}>{text}</div>
	);
};

export default {
	name: "Heading",
	Component: Heading,
};
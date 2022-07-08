import React from "react";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>{children}</div>
		</div>
	);
};

export default Layout;

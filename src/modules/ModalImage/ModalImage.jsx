import React from "react";
import styles from "./ModalImage.module.css";

const ModalImage = ({ data }) => {
	return (
		data.map((item) => (
			<img key={item.id} src={item.image} alt="#" className={styles.image}/>
		))
	);
};

export default {
	name: "ModalImage",
	Component: ModalImage,
};
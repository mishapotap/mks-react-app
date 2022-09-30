import React from "react";
import styles from "./ImageBlock.module.css";

const ImageBlock = ({ data }) => {
	return (
		<img className={styles.image} src={data.image} alt="imageBlock" />
		// <video className={styles.videoWrapper} autoPlay loop>
		// 	<source src={data.video} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
		// </video>
	);
};

export default {
	name: "ImageBlock",
	Component: ImageBlock,
};
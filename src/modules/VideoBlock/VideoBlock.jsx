import React from "react";
import styles from "./VideoBlock.module.css";

const VideoBlock = ({ data }) => {
	return (
		<video className={styles.videoWrapper} autoPlay loop>
			<source src={data.video} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
		</video>
	);
};

export default {
	name: "VideoBlock",
	Component: VideoBlock,
};
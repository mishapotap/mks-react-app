import React from "react";
import { AnimRightBottom, LayoutBg } from "../../svg";
import styles from "./Layout.module.css";
import { Header, Video } from '../../components';

const Layout = ({ children, videoContent, setVideoContent }) => {
	return (
		<div className={styles.wrapper}>
			<Video videoContent={videoContent} setVideoContent={setVideoContent}/>
			<div style={{position: 'absolute', top: '1.8vh', left: 'auto', zIndex: 1}}>
				<Header onClickHandler={() => window.location.href = "https://agat.avt.promo/"}/>
			</div>
			<div className={styles.layoutBg}>
				<LayoutBg />
			</div>
			<div className={styles.container}>{children}</div>
			{/* <AnimRightBottom/> */}
		</div>
	);
};

export default Layout;

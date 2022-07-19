import React from "react";
import { AnimRightBottom, LayoutBg } from "../../svg";
import {SquareButton} from "../../components";
import styles from "./Layout.module.css";
import { Header, Video } from '../../components';
import { SpaceshipLeft, SpaceshipMiddle, SpaceshipRight } from '../../images'


const Layout = ({ children, videoContent, setVideoContent, science }) => {
	return (
		<div className={styles.wrapper}>
			<Video videoContent={videoContent} setVideoContent={setVideoContent}/>
			<div style={{width: '60%', position: 'absolute', top: '2%', left: 'auto', zIndex: 1}}>
				<Header onClickHandler={() => window.location.href = "https://agat.avt.promo/"}/>
			</div>
			<div className={styles.layoutBg}>
				<LayoutBg />
			</div>
			{children}
			{science && (
				<div className={styles.buttonWrapper}>
					<SquareButton withImage={true} image={SpaceshipLeft} width={94} height={39} buttonText={"Вид слева"} onClickHandler={() => document.getElementById('myIframe').contentWindow.postMessage("left", "*")}/>
					<SquareButton withImage={true} image={SpaceshipMiddle} width={96} height={48} buttonText={"Общий вид"} onClickHandler={() => document.getElementById('myIframe').contentWindow.postMessage("middle", "*")}/>
					<SquareButton withImage={true} image={SpaceshipRight} width={94} height={39} buttonText={"Вид справа"} onClickHandler={() => document.getElementById('myIframe').contentWindow.postMessage("right", "*")}/>
				</div>
			)}
			{/* <AnimRightBottom/> */}
		</div>
	);
};

export default Layout;

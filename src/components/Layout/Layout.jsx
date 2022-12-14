import React from "react";
import { LayoutBg } from "../../svg";
import {SquareButton} from "../../components";
import styles from "./Layout.module.css";
import { Header, Video } from '../../components';
import { SpaceshipLeft, SpaceshipMiddle, SpaceshipRight, PlaceholderImage } from '../../images'

const Layout = ({ children, videoContent, setVideoContent, scienceActive }) => {
	// audio
	let modalAudio = new Audio("/mks/modal.mp3")
    const playModal = () => {
        modalAudio.play()
    }
	return (
		<>
			<div className={styles.placeholder}>
				<div className={styles.placeholderText}>Данный раздел работает при горизонтальной ориентации экрана.</div>
				<img className={styles.placeholderImage} src={PlaceholderImage} alt="placeholder" />
				<div className={styles.placeholderText}>Пожалуйста, переведите ваше устройство 
в горизонтальное положение.</div>
			</div>
			<div className={styles.wrapper}>
				<Video scienceActive={scienceActive} videoContent={videoContent} setVideoContent={setVideoContent}/>
				{/* <div style={{position: 'absolute', top: '20px', left: 'auto', zIndex: 1}}> */}
					<Header onClickHandler={() => window.location.href = window.location.origin}/>
				{/* </div> */}
				<div className={styles.layoutBg}>
					<LayoutBg />
				</div>
				{children}
				{scienceActive && (
					<div className={styles.buttonWrapper}>
						<SquareButton withImage={true} image={SpaceshipLeft} width={94} height={39} buttonText={"Вид слева"} onClickHandler={() => {playModal(); document.getElementById('scienceIframe').contentWindow.postMessage("left", "*")}}/>
						<SquareButton withImage={true} image={SpaceshipMiddle} width={96} height={48} buttonText={"Общий вид"} onClickHandler={() => {playModal(); document.getElementById('scienceIframe').contentWindow.postMessage("middle", "*")}}/>
						<SquareButton withImage={true} image={SpaceshipRight} width={94} height={39} buttonText={"Вид справа"} onClickHandler={() => {playModal(); document.getElementById('scienceIframe').contentWindow.postMessage("right", "*")}}/>
					</div>
				)}
			</div>
		</>
	);
};

export default Layout;

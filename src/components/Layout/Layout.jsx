import React from "react";
import { LayoutBg } from "../../svg";
import styles from "./Layout.module.css";
import { Header, Video, VimeoVideo, SquareButton } from '../../components';
import { SpaceshipLeft, SpaceshipMiddle, SpaceshipRight } from '../../images'

const Layout = ({ children, videoContent, setVideoContent, scienceActive, researchActive, setResearchActive }) => {
	// audio
	let modalAudio = new Audio("/modal.mp3")
    const playModal = () => {
        modalAudio.play()
    }
	return (
		<div className={styles.wrapper}>
			<Video scienceActive={scienceActive} videoContent={videoContent} setVideoContent={setVideoContent} />
			<VimeoVideo researchActive={researchActive} setResearchActive={setResearchActive} />
			<div style={{width: '60%', position: 'absolute', top: '2%', left: 'auto', zIndex: 1}}>
				{/* <Header onClickHandler={() => window.location.href = "https://agat.avt.promo/"}/> */}
				<Header />
			</div>
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
	);
};

export default Layout;

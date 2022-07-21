import React, {useState, useEffect} from "react";
import { AnimRightBottom, LayoutBg, SoundButtonSvg, SoundButtonDisabled } from "../../svg";
import {SquareButton} from "../../components";
import styles from "./Layout.module.css";
import { Header, Video } from '../../components';
import { SpaceshipLeft, SpaceshipMiddle, SpaceshipRight } from '../../images'

// bg audio
const useAudio = url => {
	const [audio] = useState(new Audio(url));
	const [playing, setPlaying] = useState(false);

	const toggle = () => setPlaying(!playing);

	useEffect(() => {
		playing ? audio.play() : audio.pause();
	},
	[playing]
	);

	// Музыка зациклена
	useEffect(() => {
		audio.addEventListener('ended', () => audio.play());
		return () => {
			audio.removeEventListener('ended', () => audio.play());
		};
	}, []);

	// useEffect(() => {
	// audio.addEventListener('ended', () => setPlaying(false));
	// return () => {
	// 	audio.removeEventListener('ended', () => setPlaying(false));
	// };
	// }, []);

	return [playing, toggle];
};

const Layout = ({ children, videoContent, setVideoContent, science }) => {

	const [playing, toggle] = useAudio("/bg.mp3");
	// audio
	let modalAudio = new Audio("/modal.mp3")
    const playModal = () => {
        modalAudio.play()
    }
	return (
		<div className={styles.wrapper}>
			<Video videoContent={videoContent} setVideoContent={setVideoContent}/>
			<div style={{width: '60%', position: 'absolute', top: '2%', left: 'auto', zIndex: 1}}>
				<Header onClickHandler={() => window.location.href = "https://agat.avt.promo/"}/>
			</div>
			<div className={styles.layoutBg}>
				<LayoutBg />
			</div>
			<div className={styles.soundButton} onClick={toggle}>
				{playing ? <SoundButtonSvg/> : <SoundButtonDisabled/>}
			</div>
			{children}
			{science && (
				<div className={styles.buttonWrapper}>
					<SquareButton withImage={true} image={SpaceshipLeft} width={94} height={39} buttonText={"Вид слева"} onClickHandler={() => {playModal(); document.getElementById('myIframe').contentWindow.postMessage("left", "*")}}/>
					<SquareButton withImage={true} image={SpaceshipMiddle} width={96} height={48} buttonText={"Общий вид"} onClickHandler={() => {playModal(); document.getElementById('myIframe').contentWindow.postMessage("middle", "*")}}/>
					<SquareButton withImage={true} image={SpaceshipRight} width={94} height={39} buttonText={"Вид справа"} onClickHandler={() => {playModal(); document.getElementById('myIframe').contentWindow.postMessage("right", "*")}}/>
				</div>
			)}
			{/* <AnimRightBottom/> */}
		</div>
	);
};

export default Layout;

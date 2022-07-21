import React, {useState, useEffect } from 'react';
// import { SoundButtonSvg, SoundButtonDisabled } from '../../svg';
import {SquareButton, CircleButton, ScreenTitle, Layout, Modal} from '../../components';
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";
import styles from "./Mks.module.css";

// // bg audio
// const useAudio = url => {
//   const [audio] = useState(new Audio(url));
//   const [playing, setPlaying] = useState(false);

//   const toggle = () => setPlaying(!playing);

//   useEffect(() => {
//       playing ? audio.play() : audio.pause();
//     },
//     [playing]
//   );

//   useEffect(() => {
//     audio.addEventListener('ended', () => setPlaying(false));
//     return () => {
//       audio.removeEventListener('ended', () => setPlaying(false));
//     };
//   }, []);

//   return [playing, toggle];
// };

const Mks = () => {
  const [modalVisible, setModalVisible] = useState(false);
  // new
  const [aboutContent, setAboutContent] = useState(false);
  const [structureContent, setStructureContent] = useState(false);
  const [videoContent, setVideoContent] = useState(false);
  // button + modal audio
  let buttonAudio = new Audio("/button.mp3")
  let modalAudio = new Audio("/modal.mp3")
  const playButton = () => {
    buttonAudio.play()
  }
  const playModal = () => {
    modalAudio.play()
  }
  // bg audio
  // const [playing, toggle] = useAudio("/bg.mp3");
  return (
    <>
      <Helmet>
        <title>«МКС» — пилотируемая орбитальная станция, многоцелевой космический исследовательский комплекс</title>
      </Helmet>
      
      <Layout videoContent={videoContent} setVideoContent={setVideoContent}>
        <Modal modalVisible={modalVisible} setModalVisible={setModalVisible} aboutContent={aboutContent} setAboutContent={setAboutContent} structureContent={structureContent} setStructureContent={setStructureContent} />
        <div className={styles.screenTitle}>
          <ScreenTitle span={"«МКС»"} text={" - пилотируемая орбитальная станция, многоцелевой космический исследовательский комплекс"}/>
        </div>
        <div className={styles.aboutButton}>
          <SquareButton buttonText={"О МКС"} onClickHandler={() => {setAboutContent(true); setModalVisible(true)}}/>
        </div>
        <div className={styles.structureButton}>
          <SquareButton buttonText={"Состав МКС"} onClickHandler={() => {setStructureContent(true); setModalVisible(true)}}/>
        </div>
        <div className={styles.researchButton}>
          <SquareButton buttonText={"Космические исследования"} onClickHandler={() => window.location.href = "https://agat.avt.promo/kosmicheskie-issledovaniya/"}/>
        </div>
        <div className={styles.videoButton} onClick={playModal}>
          <SquareButton buttonText={"Видео"} onClickHandler={() => setVideoContent(true)}/>
        </div>
        <div className={styles.mksButton}>
          <CircleButton buttonText={"МКС"}/>
        </div>
        <Link to={"/science"}>
            <div className={styles.scienceButton} onClick={playButton}>
              <CircleButton buttonText={"Наука"} active={true}/>
            </div>
        </Link>
        {/* <div className={styles.soundButton} onClick={toggle}>
          {playing ? <SoundButtonSvg/> : <SoundButtonDisabled/>}
        </div> */}
        <div className={styles.iframeContainer}>
            <iframe id="myIframe" src="https://ate2.avt.promo/model/ISS.html" frameBorder="0"></iframe>
        </div>
      </Layout>
    </>
  );
}

export default Mks;

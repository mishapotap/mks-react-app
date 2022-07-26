import React, {useState, useEffect } from 'react';
import { SoundButtonSvg, SoundButtonDisabled } from '../../svg';
import {SquareButton, CircleButton, ScreenTitle, Layout, Modal} from '../../components';
import {Helmet} from "react-helmet";
import styles from "./Mks.module.css";
import useAudio from '../../hooks/useAudio';

const Mks = () => {
  const [scienceActive, setScienceActive] = useState(false);
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
  const [playing, toggle] = useAudio("/bg.mp3");
  return (
    <>
      <Helmet>
        <title>{scienceActive ? '«Наука» — многоцелевой лабораторный модуль российского сегмента МКС' : '«МКС» — пилотируемая орбитальная станция, многоцелевой космический исследовательский комплекс'}</title>
      </Helmet>
      
      <Layout scienceActive={scienceActive} videoContent={videoContent} setVideoContent={setVideoContent}>
        <Modal scienceActive={scienceActive} modalVisible={modalVisible} setModalVisible={setModalVisible} aboutContent={aboutContent} setAboutContent={setAboutContent} structureContent={structureContent} setStructureContent={setStructureContent} />
        <div className={styles.screenTitle}>
          <ScreenTitle span={scienceActive ? "«Наука»" : "«МКС»"} text={scienceActive ? " — многоцелевой лабораторный модуль российского сегмента МКС" : " - пилотируемая орбитальная станция, многоцелевой космический исследовательский комплекс"}/>
        </div>
        <div className={styles.aboutButton}>
          <SquareButton buttonText={scienceActive ? "О Науке" : "О МКС"} onClickHandler={() => {setAboutContent(true); setModalVisible(true)}}/>
        </div>
        <div className={styles.structureButton}>
          <SquareButton buttonText={scienceActive ? "Состав модуля" : "Состав МКС"} onClickHandler={() => {setStructureContent(true); setModalVisible(true)}}/>
        </div>
        <div className={styles.researchButton}>
          <SquareButton buttonText={"Космические исследования"} onClickHandler={() => window.location.href = "https://agat.avt.promo/kosmicheskie-issledovaniya/"}/>
        </div>
        <div className={styles.videoButton} onClick={playModal}>
          <SquareButton buttonText={"Видео"} onClickHandler={() => setVideoContent(true)}/>
        </div>
        <div className={styles.mksButton} onClick={() => {playButton(); setScienceActive(false)}}>
          <CircleButton buttonText={"МКС"} active={scienceActive ? true : false}/>
        </div>
        <div className={styles.scienceButton} onClick={() => {playButton(); setScienceActive(true)}}>
          <CircleButton buttonText={"Наука"} active={scienceActive ? false : true}/>
        </div>
        <div className={styles.soundButton} onClick={toggle}>
          {playing ? <SoundButtonSvg/> : <SoundButtonDisabled/>}
        </div>
        {/* <div className={styles.iframeContainer}>
            <iframe id="myIframe" src={scienceActive ? "https://ate2.avt.promo/modelscience/NAUKA.html" : "https://ate2.avt.promo/model/ISS.html"} frameBorder="0"></iframe>
        </div> */}
        <div className={styles.iframeContainer} style={{visibility: scienceActive ? "hidden" : "visible"}}>
            <iframe id="myIframe" src="https://mks-nauka.avt.promo/model/ISS.html" frameBorder="0"></iframe>
        </div>
        <div className={styles.iframeContainer} style={{visibility: scienceActive ? "visible" : "hidden"}}>
            <iframe id="scienceIframe" src="https://mks-nauka.avt.promo/modelscience/NAUKA.html" frameBorder="0"></iframe>
        </div>
      </Layout>
    </>
  );
}

export default Mks;

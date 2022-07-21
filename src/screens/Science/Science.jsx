import React, {useState} from 'react';
import { SoundButtonSvg } from '../../svg';
import {SquareButton, CircleButton, ScreenTitle, Layout, ModalScience} from '../../components';
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";
import styles from "./Science.module.css";

const Science = () => {
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
  return (
      <>
        <Helmet>
          <title>«Наука» — многоцелевой лабораторный модуль российского сегмента МКС</title>
        </Helmet>
        
        <Layout science={true} videoContent={videoContent} setVideoContent={setVideoContent}>
          <ModalScience modalVisible={modalVisible} setModalVisible={setModalVisible} aboutContent={aboutContent} setAboutContent={setAboutContent} structureContent={structureContent} setStructureContent={setStructureContent}/>
          <div className={styles.screenTitle}>
            <ScreenTitle span={"«Наука»"} text={" — многоцелевой лабораторный модуль российского сегмента МКС"}/>
          </div>
          <div className={styles.aboutButton}>
            <SquareButton buttonText={"О Науке"} onClickHandler={() => {setAboutContent(true); setModalVisible(true)}}/>
          </div>
          <div className={styles.structureButton}>
            <SquareButton buttonText={"Состав модуля"} onClickHandler={() => {setStructureContent(true); setModalVisible(true)}}/>
          </div>
          <div className={styles.researchButton}>
            <SquareButton buttonText={"Космические исследования"} onClickHandler={() => window.location.href = "https://agat.avt.promo/kosmicheskie-issledovaniya/"}/>
          </div>
          <div className={styles.videoButton} onClick={playModal}>
            <SquareButton buttonText={"Видео"} onClickHandler={() => setVideoContent(true)}/>
          </div>
          <Link to={"/"}>
            <div className={styles.mksButton} onClick={playButton}>
              <CircleButton buttonText={"МКС"} active={true}/>
              </div>
          </Link>
          <div className={styles.scienceButton}>
            <CircleButton buttonText={"Наука"}/>
          </div>
          {/* <div className={styles.soundButton} onClick={() => {console.log("Нажата звук")}}>
            <SoundButtonSvg/>
          </div> */}
          <div className={styles.iframeContainer}>
            <iframe id="myIframe" src="https://ate2.avt.promo/modelscience/NAUKA.html" frameBorder="0"></iframe>
          </div>
        </Layout>
      </>
  );
}

export default Science;

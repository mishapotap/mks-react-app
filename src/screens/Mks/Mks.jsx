import React, {useState, useLayoutEffect } from 'react';
import { SoundButtonSvg, SoundButtonDisabled } from '../../svg';
import {SquareButton, CircleButton, ScreenTitle, Layout, Modal} from '../../components';
import {Helmet} from "react-helmet";
import styles from "./Mks.module.css";
import useAudio from '../../hooks/useAudio';
import { SpaceShip, MksIcon } from '../../images'


const Mks = () => {

  const [scienceActive, setScienceActive] = useState(window.location.hash);
  const NAUKA = "#nauka";
  const MKS = "#mks";

  useLayoutEffect(() => {
    if (scienceActive === NAUKA) {
      window.location.hash = "#nauka"
    } else {
      window.location.hash = "#mks"
    }
    if (window.location.hash === "#mks") {
      setScienceActive(MKS);
    }
    if (window.location.hash === "#nauka") {
      setScienceActive(NAUKA);
    }
  }, [scienceActive])

  const [modalVisible, setModalVisible] = useState(false);
  // new
  const [aboutContent, setAboutContent] = useState(false);
  const [structureContent, setStructureContent] = useState(false);
  const [videoContent, setVideoContent] = useState(false);  
  // bg audio
  const [playing, toggle] = useAudio("/mks/bg.mp3");
  
  return (
    <>
      <Helmet>
        <title>{scienceActive === NAUKA ? '«Наука» — многоцелевой лабораторный модуль российского сегмента МКС' : '«МКС» — пилотируемая орбитальная станция, многоцелевой космический исследовательский комплекс'}</title>
      </Helmet>
      
      <Layout scienceActive={scienceActive === NAUKA} videoContent={videoContent} setVideoContent={setVideoContent}>
        <Modal scienceActive={scienceActive === NAUKA} modalVisible={modalVisible} setModalVisible={setModalVisible} aboutContent={aboutContent} setAboutContent={setAboutContent} structureContent={structureContent} setStructureContent={setStructureContent} />
        <div className={styles.screenTitle}>
          <ScreenTitle span={scienceActive === NAUKA ? "«Наука»" : "«МКС»"} text={scienceActive === NAUKA ? " — многоцелевой лабораторный модуль российского сегмента МКС" : " - пилотируемая орбитальная станция, многоцелевой космический исследовательский комплекс"}/>
        </div>
        <div className={styles.aboutButton}>
          <SquareButton buttonText={scienceActive === NAUKA ? "О Науке" : "О МКС"} onClickHandler={() => {setAboutContent(true); setModalVisible(true)}}/>
        </div>
        <div className={styles.structureButton}>
          <SquareButton buttonText={scienceActive === NAUKA ? "Состав модуля" : "Состав МКС"} onClickHandler={() => {setStructureContent(true); setModalVisible(true)}}/>
        </div>
        {/* <div className={styles.researchButton}>
          <SquareButton buttonText={"Космические исследования"} onClickHandler={() => window.location.href = "/kosmicheskie-issledovaniya/"}/>
        </div> */}
        {/* <div className={styles.videoButton}>
          <SquareButton buttonText={"Видео"} onClickHandler={() => setVideoContent(true)}/>
        </div> */}
        <div className={styles.mksButton} onClick={() => setScienceActive(MKS)}>
          <CircleButton buttonText={"МКС"} icon={MksIcon} active={scienceActive === NAUKA}/>
        </div>
        <div className={styles.scienceButton} onClick={() => setScienceActive(NAUKA)}>
          <CircleButton buttonText={"Наука"} icon={SpaceShip} active={scienceActive === MKS}/>
        </div>
        <div className={styles.soundButton} onClick={toggle}>
          {playing ? <SoundButtonSvg/> : <SoundButtonDisabled/>}
        </div>
        {/* <div className={styles.iframeContainer}>
            <iframe id="myIframe" src={scienceActive ? "https://ate2.avt.promo/modelscience/NAUKA.html" : "https://ate2.avt.promo/model/ISS.html"} frameBorder="0"></iframe>
        </div> */}
        <div className={styles.iframeContainer} style={{visibility: scienceActive === MKS ? "visible" : "hidden"}}>
            <iframe id="myIframe" title='Mks' src="https://agat.avt.promo/mks/model/ISS.html" frameBorder="0"></iframe>
        </div>
        <div className={styles.iframeContainer} style={{visibility: scienceActive === NAUKA ? "visible" : "hidden"}}>
            <iframe id="scienceIframe" title='Nauka' src="https://agat.avt.promo/mks/modelscience/NAUKA.html" frameBorder="0"></iframe>
        </div>
      </Layout>
    </>
  );
}

export default Mks;

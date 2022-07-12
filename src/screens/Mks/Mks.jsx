import React, {useState } from 'react';
import { SoundButtonSvg } from '../../svg';
import {SquareButton, CircleButton, ScreenTitle, Layout, Modal, Video} from '../../components';
import { Link } from "react-router-dom";

const Mks = () => {
  const [modalVisible, setModalVisible] = useState(false);
  // new
  const [aboutContent, setAboutContent] = useState(false);
  const [structureContent, setStructureContent] = useState(false);
  const [videoContent, setVideoContent] = useState(false);
  return (
    <>
      <Modal modalVisible={modalVisible} setModalVisible={setModalVisible} aboutContent={aboutContent} setAboutContent={setAboutContent} structureContent={structureContent} setStructureContent={setStructureContent} />
      <Layout videoContent={videoContent} setVideoContent={setVideoContent}>
        {/* <Video videoContent={videoContent} setVideoContent={setVideoContent}/> */}
        <div style={{position: 'absolute', top: '-4.5vh', left: '12.5vw'}}>
          <ScreenTitle span={"«МКС»"} text={" — пилотируемая орбитальная станция, используемая как многоцелевой космический исследовательский комплекс"}/>
        </div>
        <div style={{position: 'absolute', top: '0', left: '0'}}>
          <SquareButton buttonText={"О МКС"} onClickHandler={() => {setAboutContent(true); setModalVisible(true)}}/>
        </div>
        <div style={{position: 'absolute', top: '110px', left: '0'}}>
          <SquareButton buttonText={"Состав МКС"} onClickHandler={() => {setStructureContent(true); setModalVisible(true)}}/>
        </div>
        <div style={{position: 'absolute', top: '0', right: '0'}}>
          <SquareButton buttonText={"Космические исследования"} onClickHandler={() => window.location.href = "https://agat.avt.promo/kosmicheskie-issledovaniya/"}/>
        </div>
        <div style={{position: 'absolute', top: '110px', right: '0'}}>
          <SquareButton buttonText={"Видео"} onClickHandler={() => setVideoContent(true)}/>
        </div>
        <div style={{position: 'absolute', bottom: '0', left: '20px'}}>
          <CircleButton buttonText={"МКС"}/>
        </div>
        <Link to={"/science"}>
            <div style={{position: 'absolute', bottom: '0', right: '20px'}}>
            <CircleButton buttonText={"Наука"} onClickHandler={() => {console.log("На Наука")}} active={true}/>
            </div>
        </Link>
        <div style={{position: 'absolute', bottom: '158px', left: '52px'}} onClick={() => {console.log("Нажата звук")}}>
          <SoundButtonSvg/>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
          <div style={{width: '85%', height: '100%'}}>
            <iframe style={{width: '100%', height: '100%'}} src="https://ate2.avt.promo/ISS.html" frameBorder="0"></iframe>
          </div>
        </div>
        {/* <Modal modalVisible={modalVisible} setModalVisible={setModalVisible} aboutContent={aboutContent} setAboutContent={setAboutContent} structureContent={structureContent} setStructureContent={setStructureContent} /> */}
      </Layout>
    </>
  );
}

export default Mks;

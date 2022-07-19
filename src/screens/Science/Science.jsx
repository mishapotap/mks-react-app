import React, {useState} from 'react';
import { SoundButtonSvg } from '../../svg';
import {SquareButton, CircleButton, ScreenTitle, Layout, ModalScience, Video} from '../../components';
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";

const Science = () => {
  const [modalVisible, setModalVisible] = useState(false);
  // new
  const [aboutContent, setAboutContent] = useState(false);
  const [structureContent, setStructureContent] = useState(false);
  const [videoContent, setVideoContent] = useState(false);
  return (
      <>
        <Helmet>
          <title>«Наука» — многоцелевой лабораторный модуль российского сегмента МКС</title>
        </Helmet>
        <ModalScience modalVisible={modalVisible} setModalVisible={setModalVisible} aboutContent={aboutContent} setAboutContent={setAboutContent} structureContent={structureContent} setStructureContent={setStructureContent}/>
        <div style={{position: 'absolute', top: '9.5%', left: '13%', zIndex: 1}}>
          <ScreenTitle span={"«Наука»"} text={" — многоцелевой лабораторный модуль российского сегмента МКС"}/>
        </div>
        <div style={{position: 'absolute', top: '15%', left: '3%', zIndex: 1}}>
          <SquareButton buttonText={"О Науке"} onClickHandler={() => {setAboutContent(true); setModalVisible(true)}}/>
        </div>
        <div style={{position: 'absolute', top: '27%', left: '3%', zIndex: 1}}>
          <SquareButton buttonText={"Состав модуля"} onClickHandler={() => {setStructureContent(true); setModalVisible(true)}}/>
        </div>
        <div style={{position: 'absolute', top: '15%', right: '3%', zIndex: 1}}>
          <SquareButton buttonText={"Космические исследования"} onClickHandler={() => window.location.href = "https://agat.avt.promo/kosmicheskie-issledovaniya/"}/>
        </div>
        <div style={{position: 'absolute', top: '27%', right: '3%', zIndex: 1}}>
          <SquareButton buttonText={"Видео"} onClickHandler={() => setVideoContent(true)}/>
        </div>
        <Link to={"/"}>
          <div div style={{position: 'absolute', bottom: '8.5%', left: '4%', zIndex: 1}}>
            <CircleButton buttonText={"МКС"} onClickHandler={() => {console.log("На МКС")}} active={true}/>
            </div>
        </Link>
        <div style={{position: 'absolute', bottom: '8.5%', right: '4%', zIndex: 1}}>
          <CircleButton buttonText={"Наука"} onClickHandler={() => {console.log("На Наука")}}/>
        </div>
        <div style={{position: 'absolute', bottom: '24%', right: 'calc(4% + 32.5px)', zIndex: 1, cursor: 'pointer'}} onClick={() => {console.log("Нажата звук")}}>
          <SoundButtonSvg/>
        </div>
        <Layout science={true} videoContent={videoContent} setVideoContent={setVideoContent}>
          {/* <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}> */}
            <iframe id="myIframe" style={{width: '100%', height: '100%'}} src="https://ate2.avt.promo/modelscience/NAUKA.html" frameBorder="0"></iframe>
          {/* </div> */}
        </Layout>
      </>
  );
}

export default Science;

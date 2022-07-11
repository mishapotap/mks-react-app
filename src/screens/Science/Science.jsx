import React, {useState} from 'react';
import { SoundButtonSvg } from '../../svg';
import {SquareButton, CircleButton, Header, ScreenTitle, Layout, ModalScience} from '../../components';
import { Link } from "react-router-dom";

const Science = () => {
  const [modalVisible, setModalVisible] = useState(false);
  // new
  const [aboutContent, setAboutContent] = useState(false);
  const [structureContent, setStructureContent] = useState(false);
  const [videoContent, setVideoContent] = useState(false);
  return (
      <Layout>
        <div style={{position: 'absolute', top: '20px', left: '387px'}}>
          <Header onClickHandler={() => window.location.href = "https://agat.avt.promo/"}/>
        </div>
        <div style={{position: 'absolute', top: '102px', left: '234px'}}>
          <ScreenTitle span={"«Наука»"} text={" — многоцелевой лабораторный модуль российского сегмента МКС"}/>
        </div>
        <div style={{position: 'absolute', top: '154px', left: '57px'}}>
          <SquareButton buttonText={"О МКС"} onClickHandler={() => {setAboutContent(true); setModalVisible(true)}}/>
        </div>
        <div style={{position: 'absolute', top: '271px', left: '57px'}}>
          <SquareButton buttonText={"Состав МКС"} onClickHandler={() => {setStructureContent(true); setModalVisible(true)}}/>
        </div>
        <div style={{position: 'absolute', top: '154px', right: '57px'}}>
          <SquareButton buttonText={"Космические исследования"} onClickHandler={() => window.location.href = "https://agat.avt.promo/kosmicheskie-issledovaniya/"}/>
        </div>
        <div style={{position: 'absolute', top: '271px', right: '57px'}}>
          <SquareButton buttonText={"Видео"} onClickHandler={() => {setVideoContent(true); setModalVisible(true)}}/>
        </div>
        <Link to={"/mks"}>
            <div style={{position: 'absolute', bottom: '88px', left: '75px'}}>
            <CircleButton buttonText={"МКС"} onClickHandler={() => {console.log("На МКС")}} active={true}/>
            </div>
        </Link>
        <div style={{position: 'absolute', bottom: '88px', right: '75px'}}>
          <CircleButton buttonText={"Наука"} onClickHandler={() => {console.log("На Наука")}}/>
        </div>
        <div style={{position: 'absolute', bottom: '257px', left: '108px'}} onClick={() => {console.log("Нажата звук")}}>
          <SoundButtonSvg/>
        </div>
        {/* <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
          <div style={{width: '1500px', height: '825px'}}>
            <iframe style={{width: '100%', height: '100%'}} src="http://mks.avt.promo/NAUKA/NAUKA.html" frameBorder="0"></iframe>
          </div>
        </div> */}
        <ModalScience modalVisible={modalVisible} setModalVisible={setModalVisible} aboutContent={aboutContent} setAboutContent={setAboutContent} structureContent={structureContent} setStructureContent={setStructureContent} videoContent={videoContent} setVideoContent={setVideoContent}/>
      </Layout>
  );
}

export default Science;

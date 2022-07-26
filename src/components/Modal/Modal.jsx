import React, {useState} from "react";
import styles from "./Modal.module.css";
import { MKSStructureCircle, ModalCloseButton } from "../../svg";
import { ModalBg } from "../../images";
import { dummyData } from "../../data";
import { ContentModule } from "../../content";
import modules from "../../modules";

const Modal = ({ modalVisible, setModalVisible, aboutContent, setAboutContent, structureContent, setStructureContent, scienceActive }) => {
    const [structureId, setStructureId] = useState("");
    const [structureContentItem, setStructureContentItem] = useState(false);

    window.addEventListener("message", receiveMessage, false);
    function receiveMessage(event)  {
      if(event.origin !== 'https://ate2.avt.promo') {
          console.log('URL issues');
          console.log(event.data);
          return;
      } else {
          let myMsg = event.data;
          if (myMsg <= 17) {
            setStructureId(myMsg - 1);
            setStructureContent(true);
            setStructureContentItem(true);
            setModalVisible(true);
          }
      }           
    }

    let buttonAudio = new Audio("/button.mp3")
    let modalAudio = new Audio("/modal.mp3")
    const playButton = () => {
        buttonAudio.play()
    }
    const playModal = () => {
        modalAudio.play()
    }

    return (
		<div id="modal" className={styles.wrapper} style={{ display: modalVisible ? "flex" : "none" }}>
            {modalVisible && playModal()}
			<div className={styles.container}>
				<img src={ModalBg} alt="#" className={styles.bgImage} />
                {/* О МКС */}
				{aboutContent ? (
                    <>
                        <div className={styles.closeButton} onClick={() => {playButton(); setAboutContent(false); setModalVisible(false)}}>
                            <ModalCloseButton />
                        </div>
                        <div className={styles.content}>
                            <div className={styles.contentSlider}>
                                {scienceActive ? 
                                (dummyData.scienceAboutInfo.slider.map((item, index) => (
                                    <ContentModule key={index} data={item} modules={modules.base}/>
                                ))) 
                                : (dummyData.mksAboutInfo.slider.map((item, index) => (
                                    <ContentModule key={index} data={item} modules={modules.base}/>
                                )))}
                            </div>
                            <div className={styles.contentText}>
                                {scienceActive ? 
                                (dummyData.scienceAboutInfo.content.map((item, index) => (
                                    <ContentModule key={index} data={item} modules={modules.base}/>
                                ))) 
                                : (dummyData.mksAboutInfo.content.map((item, index) => (
                                    <ContentModule key={index} data={item} modules={modules.base}/>
                                )))}
                            </div>
                        </div>
                    </>
                )
                // Состав МКС 
                : structureContent ? (
                    <>
                        {structureContentItem ? (
                            <>
                                <div className={styles.closeButton} onClick={() => {playButton(); setStructureContent(false); setStructureContentItem(false); setModalVisible(false)}}>
                                    <ModalCloseButton />
                                </div>
                                <div className={styles.content}>
                                    <div className={styles.contentSlider}>
                                        {scienceActive ? 
                                        (dummyData.scienceStructure[structureId].slider.map((item, index) => (
                                            <ContentModule key={index} data={item} modules={modules.base}/>
                                        ))) 
                                        : (dummyData.mksStructure[structureId].slider.map((item, index) => (
                                            <ContentModule key={index} data={item} modules={modules.base}/>
                                        )))}
                                    </div>
                                    <div className={scienceActive ? styles.contentTextCentered : styles.contentText }>
                                        {scienceActive ? 
                                        (dummyData.scienceStructure[structureId].content.map((item, index) => (
                                            <ContentModule key={index} data={item} modules={modules.base}/>
                                        ))) 
                                        : (dummyData.mksStructure[structureId].content.map((item, index) => (
                                            <ContentModule key={index} data={item} modules={modules.base}/>
                                        )))}
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className={styles.closeButton} onClick={() => {playButton(); setStructureContent(false); setModalVisible(false)}}>
                                    <ModalCloseButton />
                                </div>
                                <div className={styles.aboutContent}>
                                    <div className={styles.moduleTitle}>{scienceActive ? "Состав Науки" : "Состав МКС"}</div>
                                        {scienceActive ? 
                                        (dummyData.scienceStructure.map((item, index) => (
                                            <div key={item.id} className={styles.structureItem} onClick={() => {setStructureId(item.id - 1); setStructureContentItem(true);}}>
                                                <div style={{display: 'flex', justifyContent: "center", alignItems: 'center', marginRight: '25px'}}>
                                                    <MKSStructureCircle/>
                                                    <div className={styles.aboutNumber}>{item.id}</div>
                                                </div>
                                                <div className={styles.aboutText}>{item.name}</div>
                                            </div>
                                        ))) 
                                        : (dummyData.mksStructure.map((item, index) => (
                                            <div key={item.id} className={styles.structureItem} onClick={() => {setStructureId(item.id - 1); setStructureContentItem(true);}}>
                                                <div style={{display: 'flex', justifyContent: "center", alignItems: 'center', marginRight: '25px'}}>
                                                    <MKSStructureCircle/>
                                                    <div className={styles.aboutNumber}>{item.id}</div>
                                                </div>
                                                <div className={styles.aboutText}>{item.name}</div>
                                            </div>
                                        )))}
                                </div>
                            </>
                        )}
                    </>
                ) : null  }
			</div>
		</div>
	);
};

export default Modal;

import React, {useState} from "react";
import styles from "./Modal.module.css";
import { MKSStructureCircle, ModalCloseButton } from "../../svg";
import { ModalBg } from "../../images";
import { dummyData } from "../../data";
import { ContentModule } from "../../content";
import modules from "../../modules";
import video1 from "../../video/main.mp4";

const Modal = ({ modalVisible, setModalVisible, aboutContent, setAboutContent, structureContent, setStructureContent, videoContent, setVideoContent }) => {
    const [structureId, setStructureId] = useState("");
    const [structureContentItem, setStructureContentItem] = useState(false);

    return (
		<div className={styles.wrapper} style={{ display: modalVisible ? "flex" : "none" }}>
			<div className={styles.container}>
				<img src={ModalBg} alt="#" className={styles.bgImage} />
                {/* О МКС */}
				{aboutContent ? (
                    <>
                        <div className={styles.closeButton} onClick={() => {setAboutContent(false); setModalVisible(false)}}>
                            <ModalCloseButton />
                        </div>
                        <div className={styles.content}>
                            <div className={styles.contentSlider}>
                                {dummyData.mksAboutInfo.slider.map((item, index) => (
                                    <ContentModule key={index} data={item} modules={modules.base}/>
                                ))}
                            </div>
                            <div className={styles.contentText}>
                                {dummyData.mksAboutInfo.content.map((item, index) => (
                                    <ContentModule key={index} data={item} modules={modules.base}/>
                                ))}
                            </div>
                        </div>
                    </>
                )
                // Состав МКС 
                : structureContent ? (
                    <>
                        {structureContentItem ? (
                            <>
                                <div className={styles.closeButton} onClick={() => {setStructureContent(false); setStructureContentItem(false); setModalVisible(false)}}>
                                    <ModalCloseButton />
                                </div>
                                <div className={styles.content}>
                                    <div className={styles.contentSlider}>
                                        {dummyData.mksStructure[structureId].slider.map((item, index) => (
                                            <ContentModule key={index} data={item} modules={modules.base}/>
                                        ))}
                                    </div>
                                    <div className={styles.contentText}>
                                        {dummyData.mksStructure[structureId].content.map((item, index) => (
                                            <ContentModule key={index} data={item} modules={modules.base}/>
                                        ))}
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className={styles.closeButton} onClick={() => {setStructureContent(false); setModalVisible(false)}}>
                                    <ModalCloseButton />
                                </div>
                                <div className={styles.aboutContent}>
                                    <div className={styles.moduleTitle}>Состав МКС</div>
                                        {dummyData.mksStructure.map((item, index) => (
                                            <div key={item.id} className={styles.structureItem} onClick={() => {setStructureId(item.id - 1); setStructureContentItem(true);}}>
                                                <div style={{display: 'flex', justifyContent: "center", alignItems: 'center', marginRight: '25px'}}>
                                                    <MKSStructureCircle/>
                                                    <div className={styles.aboutNumber}>{item.id}</div>
                                                </div>
                                                <div className={styles.aboutText}>{item.name}</div>
                                            </div>
                                        ))}
                                </div>
                                
                            </>
                        )}
                    </>
                // Видео
                ) : videoContent ? (
                    <>
                        <div className={styles.closeButton} onClick={() => {setVideoContent(false); setModalVisible(false)}}>
                            <ModalCloseButton />
                        </div>
                        {/* <div className={styles.videoWrapper}> */}
                        <video className={styles.videoWrapper} controls="controls" autoPlay>
                            <source src={video1} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
                        </video>
                            {/* <video src="../../video/main.mp4" autoPlay controls="controls" style={{width: '100%', height: '100%'}}></video> */}
                        {/* </div> */}
                        {/* <video width="1920" height="1080" controls="controls" autoPlay>
                            <source src={video1} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
                        </video> */}
                    </>
                ) : null }
			</div>
		</div>
	);
};

export default Modal;

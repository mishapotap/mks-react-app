import React, {useState} from "react";
import styles from "./Modal.module.css";
import { MKSStructureCircle, ModalCloseButton } from "../../svg";
import { ModalBg } from "../../images";
import { dummyData } from "../../data";
import { ContentModule } from "../../content";
import modules from "../../modules";

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
                                <div className={styles.closeButton} onClick={() => {setStructureContentItem(false); setModalVisible(false)}}>
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
                                    {/* <div></div> */}
                                        {dummyData.mksStructure.map((item, index) => (
                                            <div key={item.id} style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '10px', width: '50%'}} onClick={() => {setStructureId(item.id - 1); setStructureContentItem(true)}}>
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
                        <div className={styles.content}>
                            Video
                        </div>
                    </>
                ) : null }
			</div>
		</div>
	);
};

export default Modal;

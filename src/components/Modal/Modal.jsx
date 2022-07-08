import React, {useState} from "react";
import styles from "./Modal.module.css";
import { ModalCloseButton } from "../../svg";
import { ModalBg } from "../../images";
import { dummyData } from "../../data";
import { ContentModule } from "../../content";
import modules from "../../modules";

const Modal = ({ children, modalVisible, setModalVisible, aboutContent, setAboutContent, structureContent, setStructureContent }) => {
    const [videoContent, setVideoContent] = useState(false);
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
                : (
                    <>
                        <div className={styles.closeButton} onClick={() => {setStructureContent(false); setModalVisible(false)}}>
                            <ModalCloseButton />
                        </div>
                        <div className={styles.content}>
                            Состав МКС
                        </div>
                    </>
                )}
			</div>
		</div>
	);
};

export default Modal;

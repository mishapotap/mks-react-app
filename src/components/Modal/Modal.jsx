import React from "react";
import styles from "./Modal.module.css";
import { ModalCloseButton } from "../../svg";
import { ModalBg } from "../../images";
import { dummyData } from "../../data";
import { ContentModule } from "../../content";
import modules from "../../modules";

const Modal = ({ children, modalVisible, setModalVisible }) => {

    return (
		<div className={styles.wrapper} style={{ display: modalVisible ? "flex" : "none" }}>
			<div className={styles.container}>
				<img src={ModalBg} alt="#" className={styles.bgImage} />
				<div className={styles.closeButton} onClick={() => setModalVisible(false)}>
					<ModalCloseButton />
				</div>
				{/* <div className={styles.content}>{children}</div> */}
				<div className={styles.content}>
                    {/* <div>{dummyData.mksAboutInfo.name}</div> */}
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
			</div>
		</div>
	);
};

export default Modal;

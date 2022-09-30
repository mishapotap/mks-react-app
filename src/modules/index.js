import Paragraph from "./Paragraph/Paragraph";
import Heading from "./Heading/Heading";
import ModalSlider from "./ModalSlider/ModalSlider";
import ModalInfo from "./ModalInfo/ModalInfo";
import ModalTechnical from "./ModalTechnical/ModalTechnical";
import ModalList from "./ModalList/ModalList";
import BoldText from "./BoldText/BoldText";
import TextSlider from "./TextSlider/TextSlider";
import VideoBlock from "./VideoBlock/VideoBlock";
import ImageBlock from "./ImageBlock/ImageBlock";


export default {
	base: [Paragraph, Heading, BoldText, ModalSlider, ModalInfo, ModalTechnical, ModalList, TextSlider, VideoBlock, ImageBlock],
};

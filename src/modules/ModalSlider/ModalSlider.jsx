import React from "react";
import styles from "./ModalSlider.module.css";
import "./ModalSlider.css";
import { SliderPrevButton } from "../../svg";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ModalSlider = ({ data }) => {
	return (
		<>
			<Swiper
				id="swiper"
				pagination={{
					clickable: true
				}}
				loop={true}
				loopedSlides={data.length + 1}
				speed={800}
				navigation={{
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				}}
				modules={[Pagination, Navigation]}
				className={styles.swiper}
			>
				{data.map((item) => (
					<SwiperSlide key={item.id} className={styles.swiperSlide}>
						<img src={item.image} alt="#" />
					</SwiperSlide>
				))}
			</Swiper>
			<div id="swiper-button-prev" className="swiper-button-prev">
				<SliderPrevButton />
			</div>
			<div id="swiper-button-next" className="swiper-button-next">
				<SliderPrevButton />
			</div>
		</>

		// // <!-- Slider main container -->
		// <div className="swiper">
		// {/* <!-- Additional required wrapper --> */}
		// <div className="swiper-wrapper">
		// 	{/* <!-- Slides --> */}
		// {/* data.map((item) => (
		// 	<img key={item.id} src={item.image} alt="#" className={styles.image}/>
		// )) */}
		// 	<div className="swiper-slide">Slide 1</div>
		// 	<div className="swiper-slide">Slide 2</div>
		// 	<div className="swiper-slide">Slide 3</div>
		// </div>
		// {/* <!-- If we need pagination --> */}
		// <div className="swiper-pagination"></div>

		// {/* <!-- If we need navigation buttons --> */}
		// <div className="swiper-button-prev"></div>
		// <div className="swiper-button-next"></div>
	);
};

export default {
	name: "ModalSlider",
	Component: ModalSlider,
};

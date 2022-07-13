import React from "react";
import styles from "./TextSlider.module.css";
import "./TextSlider.css";
import { SliderPrevButton } from "../../svg";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { dummyData } from "../../data";
import { ContentModule } from "../../content";
import modules from "..";

const TextSlider = ({ data }) => {
	return (
		<>
			<Swiper
				id="textSwiper"
				direction={"vertical"}
				speed={800}
				pagination={{
					// el: ".swiper-pagi",
				  	type: "fraction",
				}}
				navigation={{
					nextEl: ".swiper-next",
					prevEl: ".swiper-prev",
				}}
				modules={[Pagination, Navigation]}
				className={styles.textSwiper}
			>
				{data.map((item) => (
					<SwiperSlide key={item.id} className={styles.swiperSlide}>
						{item.content.map((slide, index) => (
							<ContentModule key={index} data={slide} modules={modules.base}/>
						))}
					</SwiperSlide>
				))}
			</Swiper>
			<div id="swiper-prev" className="swiper-prev">
				<SliderPrevButton />
			</div>
			{/* <div className="swiper-pagi"></div> */}
			<div id="swiper-next" className="swiper-next">
				<SliderPrevButton />
			</div>
		</>
	);
};

export default {
	name: "TextSlider",
	Component: TextSlider,
};

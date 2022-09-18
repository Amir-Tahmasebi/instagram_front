import Story from "./Story";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { data } from "./StoriesData";

export default function Stories() {
  const renderStories = data.map((item) => (
    <SwiperSlide key={item.id}>
      <Story {...item} />
    </SwiperSlide>
  ));

  return (
    <div className="pl-3 border-b border-gray-300 pb-2 mb-3">
      <Swiper slidesPerView={4} spaceBetween={10} className="mySwiper">
        {renderStories}
      </Swiper>
    </div>
  );
}

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/imageswiper.css";
import { Autoplay, EffectFlip, Pagination, Navigation } from "swiper/modules";
import Uuid from "../utils/UuidMaker";
import type React from "react";

interface ImageSwiperProps {
  images: string[];
  swiperEffect?: string;
  swiperLoop?: boolean;
}

const ImageSwiper: React.FC<ImageSwiperProps> = ({
  images,
  swiperEffect = "flip",
  swiperLoop = true,
}) => {
  const ids = Uuid(images?.length);
  const slidesData = images?.map((image, index) => {
    return {
      imageSrc: image,
      id: ids[index],
    };
  });

  return (
    <>
      <Swiper
        effect={swiperEffect}
        grabCursor={true}
        pagination={true}
        navigation={true}
        loop={swiperLoop}
        autoplay={{
          delay: 1500,
          disableOnInteraction: true,
        }}
        modules={[Autoplay, EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        {slidesData?.map((slide) => {
          return (
            <SwiperSlide key={slide.id}>
              <img src={slide.imageSrc} alt={`image${slide.id}`} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default ImageSwiper;

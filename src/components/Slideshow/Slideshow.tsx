'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import Image from 'next/image';

const Slideshow = () => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      loop
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      {[...Array(10)].map((_, index) => (
        <SwiperSlide key={index}>
          <Image
            src={`https://placehold.jp/150x150.png?text=${index}`}
            alt={`画像${index}`}
            width={150}
            height={150}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slideshow;

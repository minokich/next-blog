'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { getCatImages } from '@/lib/theCat';
import { useState, useEffect } from 'react';
import { CatImageType } from '@/types/CatImage';
import CatImage from '../CatImage/CatImage';

const CatsSlideshow = () => {
  const [images, setImages] = useState<CatImageType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCatImages(10);
      setImages(data);
    };
    fetchData();
  }, []);
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={5}
      loop
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      observer
      observeParents
    >
      {images.map((image) => (
        <SwiperSlide
          key={image.id}
          style={{ width: '300px', flex: '0 0 auto' }}
        >
          <CatImage image={image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CatsSlideshow;

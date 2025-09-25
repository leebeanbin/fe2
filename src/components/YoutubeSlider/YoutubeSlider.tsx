// src/components/YoutubeSlider/YoutubeSlider.tsx
'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function YoutubeSlider({ items }: { items: string[] }) {
  return (
    <Swiper
      className="results_slider"
      modules={[Pagination, Autoplay]}
      slidesPerView={4}
      spaceBetween={20}
      loop
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      speed={2000}
    >
      {items.map((id, i) => (
        <SwiperSlide key={`${id}-${i}`}>
          <div className="iframe_wrap">
            <iframe
              src={`https://www.youtube.com/embed/${id}?controls=0`}
              title={`yt-${id}-${i}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

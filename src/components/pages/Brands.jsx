import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const logoIds = [
  '00',
  '01',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
  '13',
  '14',
];

const Brands = () => {
  const logos = logoIds.map((id) => ({
    id,
    src: new URL(`../../assets/${id}.svg`, import.meta.url).href,
  }));

  return (
    <section className="min-h-screen py-14">
      <div className="w-full px-6 md:px-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-8xl font-black leading-tight text-[#111112] mb-6">
            These brands <br /> got hyped.
          </h1>
        </div>
      </div>

      <div className="mt-12 w-full overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          loop
          speed={1000}
          autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false }}
          slidesPerView={1.5}
          spaceBetween={18}
          allowTouchMove={false}
          breakpoints={{
            640: { slidesPerView: 2.2, spaceBetween: 20 },
            768: { slidesPerView: 3.2, spaceBetween: 24 },
            1024: { slidesPerView: 4.5, spaceBetween: 28 },
            1280: { slidesPerView: 5.5, spaceBetween: 30 },
          }}
          className="w-full py-4"
        >
          {logos.concat(logos.slice(0, 4)).map((logo, index) => (
            <SwiperSlide key={`${logo.id}-${index}`}>
              <div className="rounded-2xl border border-[#ded0c5]p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] flex items-center justify-center md:min-h-90 h-40">
                <img src={logo.src} alt={`Brand logo ${logo.id}`} className="max-h-100 object-contain" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Brands;

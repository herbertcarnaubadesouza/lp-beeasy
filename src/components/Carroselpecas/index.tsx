// Carrossel.js
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './styles.module.scss';
import Button from '../Button';

const slideItems = [
  { imgSrc: '/Pacote.png', label: 'Anéis' },
  { imgSrc: '/Pacote.png', label: 'Pulseiras' },
  { imgSrc: '/Pacote.png', label: 'Colares' },
  { imgSrc: '/Pacote.png', label: 'Pingente' },
];

export default function Carrosselpecas() {
  const [selectedSlide, setSelectedSlide] = useState<number>(0);

  const handleSlideChange = (swiper: any) => {
    setSelectedSlide(swiper.realIndex);
  };

  return (
    <section className={styles.container}>
      <h2>
        Algumas peças <span>originais</span> criadas por clientes
      </h2>

      <Swiper
        slidesPerView={2}
        spaceBetween={80}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSlideChange={handleSlideChange}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className={styles.swiperContainer}
      >
        {slideItems.map((item: any, index: number) => (
          <SwiperSlide
            key={index}
            className={index === selectedSlide ? styles.selectedSlide : ''}
          >
            <div className={styles.productWrap}>
              <img src={item.imgSrc} alt={item.label} />
              <p>{item.label}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.button}>
        <Button />
      </div>
    </section>
  );
}

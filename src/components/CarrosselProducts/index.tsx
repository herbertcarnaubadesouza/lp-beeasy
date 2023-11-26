// Carrossel.js
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";

const slideItems = [
  { imgSrc: "/ring.webp", label: "Anéis" },
  { imgSrc: "/pulseiras.webp", label: "Pulseiras" },
  { imgSrc: "/colares.webp", label: "Colares" },
  { imgSrc: "/Pingente.webp", label: "Pingente" },
];

export default function Carrossel() {
  const [selectedSlide, setSelectedSlide] = useState<number>(0);

  const handleSlideChange = (swiper: any) => {
    setSelectedSlide(swiper.realIndex);
  };

  return (
    <section className={styles.container}>
      <h2>
        <span>diversas</span> opções de peças
      </h2>
      <p>
        Explore a sua elegância e adicione um toque pessoal à sua coleção de
        semijoias. Crie sua loja de semijoias personalizadas com designs
        exclusivos e brilhe com sua própria marca.
      </p>
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
            className={index === selectedSlide ? styles.selectedSlide : ""}
          >
            <div className={styles.productWrap}>
              <img src={item.imgSrc} alt={item.label} />
              <p>{item.label}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

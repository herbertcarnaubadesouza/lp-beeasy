import { useState } from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import styles from './styles.module.scss';
export default function SliderComponent() {
  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);

  return (
    <>
      {/*@ts-ignore*/}
      <section className={styles.background}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.title}>
              <h1>Anel Personalizado</h1>
              <div className={styles.undertitle}>
                <p>Preço de custo:</p>
                <h2>R$ 40,00</h2>
              </div>
            </div>
            <div className={styles.slidertitle}>
              <h2>Venda pelo preço de </h2>
              <h1>72,00</h1>
            </div>
            <Slider
              className={styles.slider}
              value={value}
              orientation="horizontal"
              onChange={(value) => setValue(value)}
            />

            <div className={styles.slidertitle}>
              <h2>Vendas por dia </h2>
              <h1>15 dias</h1>
            </div>
            <Slider
              className={styles.slider}
              value={value1}
              orientation="horizontal"
              onChange={(value1) => setValue1(value1)}
            />

            <div className={styles.divisor}></div>
            <div className={styles.underdivisor}>
              <p>Seu lucro por venda</p>
              <h2>R$ 32,00</h2>
            </div>
            <div className={styles.total}>
              <p>
                Em <strong>30 dias</strong> você ganhará
              </p>
              <h2>R$32.421,60</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

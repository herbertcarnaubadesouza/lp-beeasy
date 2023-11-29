import { useState } from 'react';
import styles from './styles.module.scss';
import Card from '../Card';
import CardM from '../CardM';
import CardA from '../CardA';
import CardS from '../CardS';
export default function Planos() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const handleSwitchClick = () => {
    setIsSwitchOn(!isSwitchOn);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h1>
              ENCONTRE O PLANO <span>PERFEITO PRA VOCÊ</span>
            </h1>
          </div>
          <div className={styles.undertitle}>
            <p>
              Sua loja hospedada na plataforma <strong>BEEASY</strong>, perfeita
              para quem busca uma solução mais simples de gerenciar. Sua loja já
              vem instalada com meio de pagamento e você terá a gestão completa
              de produtos, pedidos e customização de temas.
            </p>
          </div>

          <div
            className={`${styles.switch} ${isSwitchOn ? styles.active : ''}`}
            onClick={handleSwitchClick}
          >
            <div className={styles.switchBackground}>
              <div className={styles.switchButton}></div>
              <div className={styles.leftText}>COMPLETO</div>

              <div className={styles.rightText}>INTEGRAR</div>
            </div>
          </div>
        </div>
        <Card />
        <CardM />
        <CardS />
        <CardA />
      </div>
      <div className={styles.payment}>
        <img src="pix.svg" alt="" />
        <img src="boleto.svg" alt="" />
        <img src="visa.svg" alt="" />
        <img src="mastercard.svg" alt="" />
        <img src="hipercard.svg" alt="" />
        <img src="elo.svg" alt="" />
      </div>
      <div className={styles.underpayment}>
        Sem letrinhas miúdas, 100% transparente.
      </div>
    </>
  );
}

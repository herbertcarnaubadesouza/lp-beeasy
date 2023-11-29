import styles from './styles.module.scss';
export default function Receba() {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.image}>
          <img src="circuloamarelo.png" alt="" />
          <img src="recebagif.gif" alt="" className={styles.overlayImage} />
        </div>
        <div className={styles.text}>
          <h1>
            <span>Receba</span> seu dinheiro
          </h1>
          <p>
            Vendeu recebeu. Transparência e segurança máxima em todos os
            pagamentos
          </p>
        </div>
      </div>
    </>
  );
}

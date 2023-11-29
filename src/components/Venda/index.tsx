import styles from './styles.module.scss';
export default function Venda() {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.image}>
          <img src="circuloamarelo.png" alt="" />
          <img src="vendagif.gif" alt="" className={styles.overlayImage} />
        </div>
        <div className={styles.text}>
          <h1>
            <span>Venda</span> seus produtos originais
          </h1>
          <p>
            Crie e desenvolva seus produtos personalizados e venda do seu jeito!
          </p>
        </div>
      </div>
    </>
  );
}

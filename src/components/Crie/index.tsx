import styles from './styles.module.scss';
export default function Crie() {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.image}>
          <img src="circuloamarelo.png" alt="" />
          <img src="criegif.gif" alt="" className={styles.overlayImage} />
        </div>
        <div className={styles.text}>
          <h1>
            <span>Crie</span> sua loja
          </h1>
          <p>
            Em menos de 20 minutos você consegue configurar a sua loja e já
            fazer os seus primeiros pedidos!
          </p>
        </div>
      </div>
    </>
  );
}

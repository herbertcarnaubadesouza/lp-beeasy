import styles from './styles.module.scss';
export default function CardM() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.valor}>
            <h1>R$89,90</h1>
            <p>/mês</p>
          </div>
          <div className={styles.title}>
            <h1>Mensal</h1>
          </div>
          <div className={styles.undertitle}>
            <p>O plano mais vendido, um show de economia e bônus.</p>
            <ul>
              <li>All limited links</li>
              <li>Own analytics platform</li>
              <li>Chat support</li>
              <li>Optimize hashtags</li>
              <li>Unlimited users</li>
            </ul>
          </div>
          <div className={styles.button}>
            <button>Assinar agora</button>
          </div>
        </div>
      </div>
    </>
  );
}

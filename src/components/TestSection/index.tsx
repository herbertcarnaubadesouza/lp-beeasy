import styles from "./styles.module.scss";

export default function SecondVideo() {
  return (
    <section className={styles.container}>
      <img className={styles.threeDaysImage} src="3days.svg" />
      <h2>
        <span>teste grátis</span>
      </h2>
      <h2>sem compromisso</h2>
      <div className={styles.descriptionContent}>
        <p>
          Você tem 3 dias para testar a plataforma de forma TOTALMENTE GRATUITA.
          Neste tempo, você pode montar a loja, ver todas as funcionalidades e
          até mesmo fazer vendas!
        </p>
        <br></br>
        <p>
          E quando assinar o plano, você terá 3 dias de garantia para decidir se
          realmente vai embarcar na jornada rumo a sua liberdade e começar a
          empreender com a gente!
        </p>
      </div>
      <button className={styles.ctaButton}>quero uma loja beeasy</button>
      <div className={styles.wrapGiftSection}>
        <div className={styles.giftsSection}>
          <div className={styles.leftSide}>
            <img src="/Beassygif1.gif" />
          </div>
          <div className={styles.rightSide}>
            <h3>Pagamento seguro</h3>
            <p>Diversas formas de pagar, todas com selo de segurança.</p>
          </div>
        </div>
        <div className={styles.giftsSection}>
          <div className={styles.leftSide}>
            <img src="/Beassygif2.gif" />
          </div>
          <div className={styles.rightSide}>
            <h3>Suporte humanizado</h3>
            <p>Conta com um time de especialistas sempre dispostos a ajudas.</p>
          </div>
        </div>
        <div className={styles.giftsSection}>
          <div className={styles.leftSide}>
            <img src="/Beassygif3.gif" />
          </div>
          <div className={styles.rightSide}>
            <h3>100% seguro</h3>
            <p>Segurança ponta-a-ponta, te deixando tranquilo.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import styles from "./styles.module.scss";

export default function IASection() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2>
          Como a <span>inteligência artificial</span> pode ajudar
        </h2>
        <p className={styles.descriptionText}>
          Você tem 3 dias para testar a plataforma de forma TOTALMENTE GRATUITA.
          Neste tempo, você pode montar a loja, ver todas as funcionalidades e
          até mesmo fazer vendas!
        </p>
        <div className={styles.numbersBlockWrap}>
          <div className={styles.numbersBlock}>
            <div className={styles.leftSide}>
              <p>1</p>
            </div>
            <div className={styles.rightSide}>
              <h3>Criação de nomes</h3>
              <p>Crie diversos nomes com ajuda da ia</p>
            </div>
          </div>
          <div className={styles.numbersBlock}>
            <div className={styles.leftSide}>
              <p>2</p>
            </div>
            <div className={styles.rightSide}>
              <h3>Criação de logotipos</h3>
              <p>Copy Faça vários logotipos únicos</p>
            </div>
          </div>
          <div className={styles.numbersBlock}>
            <div className={styles.leftSide}>
              <p>3</p>
            </div>
            <div className={styles.rightSide}>
              <h3>Designs exclusivos</h3>
              <p>Faça vários estios de design exclusivos para suas peças</p>
            </div>
          </div>
          <div className={styles.numbersBlock}>
            <div className={styles.leftSide}>
              <p>4</p>
            </div>
            <div className={styles.rightSide}>
              <h3>Remoção de fundo</h3>
              <p>Diversas formas de pagar, todas com selo de segurança.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

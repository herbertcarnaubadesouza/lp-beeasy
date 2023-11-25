import styles from "./styles.module.scss";

export default function FirtVideo() {
  return (
    <>
      <section className={styles.container}>
        <img src="/foto1Td.svg" />
      </section>
      <div className={styles.crossSection}>
        <div className={styles.pinkRow}>
          <div className={styles.marquee}>
            <img src="/diamondWhite.svg" />
            <span className={styles.marqueeStyle}>
              SUA MARCA PERSONALIZADA COM NOSSA QUALIDADE
            </span>
            <img src="/diamondWhite.svg" />
            <span className={styles.marqueeStyle}>
              SUA MARCA PERSONALIZADA COM NOSSA QUALIDADE
            </span>
          </div>
        </div>
        <div className={styles.whiteRow}>
          <div className={styles.marquee}>
            <img src="/diamondBlack.svg" />
            <span className={styles.marqueeStyle}>
              SUA MARCA PERSONALIZADA COM NOSSA QUALIDADE
            </span>
            <img src="/diamondBlack.svg" />
            <span className={styles.marqueeStyle}>
              SUA MARCA PERSONALIZADA COM NOSSA QUALIDADE
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

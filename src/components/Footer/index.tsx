import styles from './styles.module.scss';
export default function Footer() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.text}>
            <p>© 2023 BEEASY | Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </>
  );
}

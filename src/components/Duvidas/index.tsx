import styles from './styles.module.scss';
import Pergunta from '../pergunta';
export default function Duvidas() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1>Ficou em dúvida?</h1>
            <p>
              Algumas dúvidas frequentes, mas caso não encontre aqui sua dúvida
              fale conosco.
            </p>
          </div>
        </div>
        <Pergunta />
        <Pergunta />
        <Pergunta />
        <Pergunta />
        <Pergunta />
        <Pergunta />
        <Pergunta />
        <Pergunta />
        <Pergunta />
        <Pergunta />
      </div>
    </>
  );
}

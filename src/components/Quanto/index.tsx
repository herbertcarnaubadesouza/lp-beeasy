import styles from './styles.module.scss';
export default function Quanto() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h1>
              <span>Quanto </span>você quer ganhar por mês?
            </h1>
          </div>
          <div className={styles.undertitle}>
            <p>
              Faça uma simulação ao lado de quantas vendas em média você precisa
              para atingir a renda desejada
            </p>
          </div>
          <div className={styles.button}>
            <button>Criar minha loja</button>
          </div>
        </div>
      </div>
    </>
  );
}

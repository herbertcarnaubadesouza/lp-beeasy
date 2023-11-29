import styles from './styles.module.scss';
import Crie from '../Crie';
import Venda from '../Venda';
import Button from '../Button';
import Receba from '../Receba';
export default function Sualoja() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h1>
              Crie, venda e <span>receba!</span>
            </h1>
            <p>
              Em questões de minutos com o uso da inteligência artificial com um
              toque exclusivo e produtos de alta qualidade com opções
              personalizadas de acordo com seu estilo e peças prontas best
              sellers de vendas.
            </p>
          </div>
        </div>
        <Crie />
        <Venda />
        <Receba />
        <Button />
      </div>
    </>
  );
}

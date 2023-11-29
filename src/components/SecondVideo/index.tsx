import styles from './styles.module.scss';
import Button from '../Button';
export default function SecondVideo() {
  return (
    <section className={styles.container}>
      <div className={styles.divVideo}>
        <video className={styles.video} autoPlay loop muted>
          <source src="/video1.mp4" type="video/mp4" />
        </video>
      </div>
      <h2>
        Com a <span>BEEASY</span> você só precisa se preocupar em vender, o
        resto cuidamos <span>para você!</span>
      </h2>
      <p>
        Somos a principal plataforma de e-commerce de semijoias personalizadas
        do Brasil. Com a Beeasy, você pode criar sua loja online em questão de
        minutos, com um toque exclusivo e produtos de alta qualidade, todos
        personalizados de acordo com o seu estilo contando com a qualidade e
        logística da BEEASY!
      </p>
      <Button />
    </section>
  );
}

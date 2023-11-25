import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export default function Banner() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const target = 284;
    const increment = 5;
    const intervalTime = 50;

    const interval = setInterval(() => {
      setCount((currentCount) => {
        if (currentCount + increment >= target) {
          clearInterval(interval);
          return target;
        }
        return currentCount + increment;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className={styles.container}>
      <nav className={styles.header}>
        <img src="/logoBeeasy.svg" />
        <button>testar grátis</button>
      </nav>
      <div className={styles.middleContent}>
        <h1>
          <span> Crie sua loja</span> de semijoias em{" "}
          <span>10 minutos sem estoque com IA</span> e destaque seu estilo
          único!
        </h1>
        <p>
          Em questões de minutos com o uso da inteligência artificial com um
          toque exclusivo e produtos de alta qualidade com opções personalizadas
          de acordo com seu estilo e peças prontas best sellers de vendas.
        </p>
        <button>quero minha loja</button>
      </div>
      <div className={styles.depoimentsSection}>
        <p>Mais de 284 mil clientes satisfeitos</p>
        <div className={styles.rowDepoiments}>
          <img src="/depoimentsBeeasy.svg" />
          <div className={styles.numberCouter}>{count}k</div>
        </div>
      </div>
    </section>
  );
}

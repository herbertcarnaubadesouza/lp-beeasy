import React, { useState } from 'react';
import styles from './styles.module.scss';

export default function Pergunta() {
  const Accordion = () => {
    const [isAccordionOpen, setAccordionOpen] = useState(false);

    const toggleAccordion = () => {
      setAccordionOpen(!isAccordionOpen);
    };

    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.button}>
            <button
              className={`${styles.button} ${
                isAccordionOpen ? styles.open : ''
              }`}
              onClick={toggleAccordion}
            >
              Lorem ipsum dolor sit amet consectetur
            </button>

            {isAccordionOpen && (
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Mauris ultricies
                  maecenas auctor nullam convallis. Purus nec tortor arcu vel
                  consectetur in. Aliquet etiam consectetur cursus curabitur
                  diam. Turpis accumsan sagittis sed urna aliquet. Nisl orci
                  purus mauris gravida massa consequat vitae. Phasellus donec
                  aliquet purus tincidunt sem faucibus erat mattis sit.
                  Adipiscing facilisis viverra blandit nisl varius urna turpis.
                </p>
              </div>
            )}
          </div>
          <div className={styles.divisor}></div>
        </div>
      </div>
    );
  };

  return <Accordion />;
}

import styles from "../styles/Footer.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.item}>
          <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
        </div>
        <div className={styles.item}>
          <div className={styles.card}>
            <h2 className={styles.motto}>
              Oh yeas, we did the lama pizza, we backed slik of piza
            </h2>
          </div>
          <div className={styles.card}>
            <h2 className={styles.title}>Find our restrants of piza</h2>
            <p className={styles.text}>
              <br /> <span>Pizza restruant</span>
              <br /> <span>Mirpur, Dhaka</span>
              <br /> <span>Phone,+8801255465</span>
            </p>
            <p className={styles.text}>
              <br /> <span>Pizza restruant</span>
              <br /> <span>Mirpur, Dhaka</span>
              <br /> <span>Phone,+8801255465</span>
            </p>
            <p className={styles.text}>
              <br /> <span>Pizza restruant</span>
              <br /> <span>Mirpur, Dhaka</span>
              <br /> <span>Phone,+8801255465</span>
            </p>
          </div>

          <div className={styles.card}>
            <h2 className={styles.title}>Working Hour</h2>
            <p className={styles.text}>
              <br /> <span>Monday to friday</span>
              <br /> <span>Mirpur, Dhaka</span>
              <br /> <span>Phone,+8801255465</span>
            </p>
            <p className={styles.text}>
              <br /> <span>Monday to friday</span>
              <br /> <span>Mirpur, Dhaka</span>
              <br /> <span>Phone,+8801255465</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

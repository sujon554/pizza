import styles from "../styles/PizzaCart.module.css";
import Image from "next/image";

const PizzaCart = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="" width="500" height="500" />
      <h1 className={styles.title}>FIORI DI ZUCCA</h1>
      <h2 className={styles.Price}>$19.99</h2>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme.
      </p>
    </div>
  );
};

export default PizzaCart;

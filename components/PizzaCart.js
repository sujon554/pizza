import styles from "../styles/PizzaCart.module.css";
import Image from "next/image";
import Link from "next/Link";

const PizzaCart = ({ pizza }) => {
  const { title, prices, img, desc } = pizza;
  return (
    <div className={styles.container}>
      <Link href={`/product/${pizza._id}`} passHref>
        <Image src={img} alt="" width="500" height="500" />
      </Link>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.Price}>${prices[0]}</h2>
      <p className={styles.desc}>{desc}</p>
    </div>
  );
};

export default PizzaCart;

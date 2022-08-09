import PizzaCart from "./PizzaCart";
import styles from "../styles/PizzaList.module.css"

const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wapper}>
        <PizzaCart />
        <PizzaCart />
        <PizzaCart />
        <PizzaCart />
        <PizzaCart />
        <PizzaCart />
        <PizzaCart />
        <PizzaCart />
      </div>
    </div>
  );
};

export default PizzaList;

import PizzaCart from "./PizzaCart";
import styles from "../styles/PizzaList.module.css";
// import Image from "next/image";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wapper}>
      {pizzaList.map((pizza) => (
          <PizzaCart key={pizza._id} pizza={pizza} />
        ))}
        {/* {pizzaList.map((pizza) => {
          <PizzaCart key={pizza._id} pizza={pizza} />;
          console.log(pizza);
        })} */}
      </div>
    </div>
  );
};

export default PizzaList;

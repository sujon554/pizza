import Image from "next/Image";

import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image
            src="/img/telephone.png"
            width="32"
            height="32"
            alt="icon photo"
          />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Order Now</div>
          <div className={styles.text}>121 121 121</div>
        </div>
      </div>

      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.itemItem}>Home</li>
          <li className={styles.itemItem}>Products</li>
          <li className={styles.itemItem}>Menu</li>
          <Image src="/img/logo.png" alt="" width="160px" height="69px" />
          <li className={styles.itemItem}>Events</li>
          <li className={styles.itemItem}>Blog</li>
          <li className={styles.itemItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/img/cart.png" alt="" width="30px" height="30px" />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

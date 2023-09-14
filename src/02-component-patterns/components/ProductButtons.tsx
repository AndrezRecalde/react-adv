import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from "../styles/styles.module.css";


export const ProductButtons = () => {

    const { handleIncrease, counter } = useContext(ProductContext);
  
    return (
      <div className={styles.buttonsContainer}>
        <button className={styles.buttonMinus} onClick={() => handleIncrease(-1)}>
          -
        </button>
        <div className={styles.countLabel}>{counter}</div>
        <button className={styles.buttonAdd} onClick={() => handleIncrease(1)}>
          +
        </button>
      </div>
    );
  };
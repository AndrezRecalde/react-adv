import { useContext } from 'react';
import { ProductContext } from './ProductCard';

import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";


export const ProductImage = () => {

    const { product } = useContext(ProductContext);
    const { img } = product;
  
    return (
      <img
        className={styles.productImg}
        src={img ? img : noImage}
        alt="Coffee Mug"
      />
    );
  };
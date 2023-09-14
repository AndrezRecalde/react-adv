import { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';

import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

interface ProductImageProps {
  className?: string;
  style?: CSSProperties
}

export const ProductImage = ({ className, style }: ProductImageProps) => {

    const { product } = useContext(ProductContext);
    const { img } = product;
  
    return (
      <img
        className={`${styles.productImg} ${className}`}
        style={style}
        src={img ? img : noImage}
        alt="Coffee Mug"
      />
    );
  };
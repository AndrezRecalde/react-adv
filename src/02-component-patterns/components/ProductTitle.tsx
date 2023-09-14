import { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from "../styles/styles.module.css";

interface ProductTitleProps {
  className?: string;
  style?: CSSProperties;
}

export const ProductTitle = ({ className, style }: ProductTitleProps) => {

    const { product } = useContext(ProductContext);

    const { title } = product;
    return <span className={`${styles.productDescription} ${className}`} style={style}>{title}</span>;
  };
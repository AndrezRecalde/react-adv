import { createContext } from "react";
import { useProduct } from "../hooks";
import {
  ProductContextProps,
  ProductCardProps,
} from "../interfaces/ProductInterfaces";
import { ProductButtons, ProductImage, ProductTitle } from "../components";

import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { counter, handleIncrease } = useProduct();

  return (
    <Provider value={{ counter, handleIncrease, product }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;

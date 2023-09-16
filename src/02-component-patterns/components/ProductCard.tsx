import { createContext, CSSProperties, ReactElement } from 'react';
import { useProduct } from "../hooks";
import {
  ProductContextProps,
  Product,
  OnChangeArgs,
} from "../interfaces/ProductInterfaces";

import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;


export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: ( args: OnChangeArgs ) => void;
  value?: number;
}


export const ProductCard = ({ children, product, className, style, onChange, value = 0 }: Props) => {

  const { counter, handleIncrease } = useProduct({ onChange, product, value });

  return (
    <Provider value={{ counter, handleIncrease, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};

/* ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons; */

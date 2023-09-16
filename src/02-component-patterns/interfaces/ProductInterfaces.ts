import { ReactElement } from "react";

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

/* interface ProductButtonsProps {
    counter: number;
    handleIncrease: (value: number) => void;
  } */

export interface ProductContextProps {
  counter: number;
  handleIncrease: (value: number) => void;
  product: Product;
}

export interface OnChangeArgs {
  product: Product;
  count: number;
}

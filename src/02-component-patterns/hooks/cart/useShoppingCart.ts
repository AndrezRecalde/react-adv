import { useState } from "react";
import { OnChangeArgs, Product } from "../../interfaces/ProductInterfaces";



export const useShoppingCart = () => {

    interface ProductInCart extends Product {
        count: number;
      }

    const [shoppingCart, setShoppingCart] = useState<{
        [key: string]: ProductInCart;
      }>({});
    
      const onProductCountChange = ({ count, product }: OnChangeArgs) => {
        setShoppingCart((prev) => {
           if (count === 0) {
            const { [product.id]: toDelete, ...rest } = prev;
            console.log(toDelete);
            return {
              ...rest,
            };
          }
    
          return {
            ...prev,
            [product.id]: { ...product, count },
          };
        });
      };
    


  return {
    shoppingCart,
    onProductCountChange
  }
}

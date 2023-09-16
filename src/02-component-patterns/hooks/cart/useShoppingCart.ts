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
          const productInCart: ProductInCart = prev[product.id] || {
            ...product,
            count: 0,
          };
    
          if (Math.max(productInCart.count + count, 0) > 0) {
            productInCart.count += count;
            return {
              ...prev,
              [product.id]: productInCart,
            };
          }
    
          //Borrar el producto
          const { [product.id]: toDelete, ...rest } = prev;
          console.log(toDelete);
          return {
            ...rest,
          };
        });
      };
    


  return {
    shoppingCart,
    onProductCountChange
  }
}

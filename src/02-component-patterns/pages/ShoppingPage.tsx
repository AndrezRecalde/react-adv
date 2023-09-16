import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";
import { Product } from "../interfaces/ProductInterfaces";
import { useShoppingCart } from "../hooks";

import "../styles/custom-styles.css";


const product1 = {
  id: "1",
  title: "Coffee Mug - Card",
  img: "./coffee-mug.png",
};

const product2 = {
  id: "2",
  title: "Coffee Mug - Meme",
  img: "./coffee-mug2.png",
};

const products: Product[] = [product1, product2];


export const ShoppingPage = () => {

 const { shoppingCart, onProductCountChange } = useShoppingCart()
 
  return (
    <div>
      <h2>ShoppingPage</h2>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {/* <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard> */}

        {products.map((product) => (
          <ProductCard
            product={product}
            className="bg-dark text-white"
            key={product.id}
            onChange={(e) => onProductCountChange(e)}
            value={shoppingCart[product.id]?.count ?? 0}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}

        {/* <ProductCard product={product} style={{ backgroundColor: '#70D1f8' }}>
          <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.5)' }} />
          <ProductTitle style={{ fontWeight: 'bold' }}  />
          <ProductButtons style={{ flex: 'flex', justifyContent: 'end' }}  />
        </ProductCard> */}
      </div>

      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className="bg-dark text-white"
            style={{ width: "100px" }}
            onChange={(e) => onProductCountChange(e)}
            value={product.count}
          >
            <ProductImage className="custom-image" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div>
        <code>{JSON.stringify(shoppingCart, null, 2)}</code>
      </div>
    </div>
  );
};

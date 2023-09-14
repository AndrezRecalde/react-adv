import { ProductCard, ProductButtons, ProductImage, ProductTitle } from "../components";
import "../styles/custom-styles.css";

const product = {
  id: "1",
  title: "Coffee Mug - Card",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
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

        <ProductCard product={product} className="bg-dark text-white ">
          <ProductImage className="custom-image" />
          <ProductTitle className="text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} style={{ backgroundColor: '#70D1f8' }}>
          <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.5)' }} />
          <ProductTitle style={{ fontWeight: 'bold' }}  />
          <ProductButtons style={{ flex: 'flex', justifyContent: 'end' }}  />
        </ProductCard>
      </div>
    </div>
  );
};

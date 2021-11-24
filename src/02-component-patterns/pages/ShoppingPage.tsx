import React from "react";
import { ProductCart } from "../components";

const product = { id: "1", title: "Coffe - Card", img: "./coffee-mug.png" };

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCart product={product}>
          <ProductCart.Image />
          <ProductCart.Title title={""} />
          <ProductCart.Buttons />
        </ProductCart>
      </div>
    </div>
  );
};

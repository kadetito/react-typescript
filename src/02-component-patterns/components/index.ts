import { ProductCart as ProductCartHOC } from "./ProductCart";
import { ProductTitle } from "./ProductTitle";
import { ProductImage } from "./ProductImage";
import { ProductButtons } from "./ProductButtons";

export { ProductTitle } from "./ProductTitle";
export { ProductImage } from "./ProductImage";
export { ProductButtons } from "./ProductButtons";

export const ProductCart = Object.assign(ProductCartHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});

export default ProductCart;

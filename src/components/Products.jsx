import { useSelector } from "react-redux";
import Product from "./Product";

const loadProducts = (products) => {
  return products.map((product, key) => (
    <Product key={key} product={product} />
  ));
};

export default function Products() {
  const products = useSelector((state) => state.products);

  return (
    <div className="productContainer" id="lws-productContainer">
      {products.length ? loadProducts(products) : "No product added yet!!!"}
    </div>
  );
}

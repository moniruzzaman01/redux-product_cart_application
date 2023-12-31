import AddProduct from "./AddProduct";
import Products from "./Products";

export default function ProductsContainer() {
  return (
    <main className="py-16">
      <div className="productWrapper">
        <Products />
        <AddProduct />
      </div>
    </main>
  );
}
